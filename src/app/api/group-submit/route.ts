import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import { sendEmail } from "@/lib/mailer";
import { uploadQRCodeToFirebase } from "@/lib/firebase";
import QRCode from "qrcode";
import RegistrationModel from "@/Model/RegistrationModel";

connect();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      groupCode,
      Salutations,
      dob,
      AadharNumber,
      gender,
      email,
      whatsappNumber,
      name,
      affiliation,
      designation,
      imageUrl,
      address,
      city,
      state,
      pincode,
      country,
      needAccommodation,
    } = body;

    const registrationCode = await getNextRegistrationCode();

    const newGroupRegistration = new RegistrationModel({
      groupCode,
      Salutations,
      dob,
      AadharNumber,
      gender,
      email,
      whatsappNumber,
      name,
      affiliation,
      designation,
      imageUrl,
      address,
      city,
      state,
      pincode,
      country,
      needAccommodation,
      registrationCode,
      registrationStatus: "Confirmed",
      registrationType: "Group",
    });

    const savedGroupRegistration = await newGroupRegistration.save();

    // Generate QR Code
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/abstractForm/${savedGroupRegistration._id}`;
    const qrCodeBuffer = await QRCode.toBuffer(url);
    const qrCodeUrl = await uploadQRCodeToFirebase(
      qrCodeBuffer,
      `group_${savedGroupRegistration._id}.png`
    );

    // Update the registration with the QR code URL
    const updatedGroupRegistration = await RegistrationModel.findByIdAndUpdate(
      savedGroupRegistration._id,
      { qrCodeUrl },
      { new: true }
    );

    // Send confirmation email
    await sendEmail({
      emailType: "REGISTRATION_SUCCESS",
      _id: updatedGroupRegistration._id,
    });

    return NextResponse.json(
      {
        message: "Group Registration saved successfully",
        registration: updatedGroupRegistration,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Group Registration save error:", error);
    return NextResponse.json(
      { message: "Error saving group registration", error: error.message },
      { status: 500 }
    );
  }
}

async function getNextRegistrationCode(): Promise<string> {
  const lastRegistration = await RegistrationModel.findOne().sort({
    registrationCode: -1,
  });

  if (!lastRegistration || !lastRegistration.registrationCode) {
    return "G1001";
  }

  const lastNumber = parseInt(lastRegistration.registrationCode.slice(1), 10);
  const nextNumber = lastNumber + 1;
  return `G${nextNumber.toString().padStart(4, "0")}`;
}
