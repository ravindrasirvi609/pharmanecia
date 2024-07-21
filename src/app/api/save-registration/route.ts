import { connect } from "@/dbConfig/dbConfig";
import RegistrationModel from "@/Model/RegistrationModel";
import { NextRequest, NextResponse } from "next/server";
import QRCode from "qrcode";

connect();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      Salutations,
      dob,
      AadharNumber,
      institute,
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
      registrationType,
      abstractSubmitted,
      abstractId,
      needAccommodation,
      dietaryRequirements,
      specialAssistance,
    } = body;

    const newRegistration = new RegistrationModel({
      Salutations,
      dob,
      AadharNumber,
      institute,
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
      registrationType,
      abstractSubmitted,
      abstractId,
      needAccommodation,
      dietaryRequirements,
      specialAssistance,
    });

    const savedRegistration = await newRegistration.save();

    let qrCodeUrl = "";
    if (!abstractId) {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/abstractForm/${savedRegistration._id}`;
      const qrCodeBuffer = await QRCode.toBuffer(url);
      qrCodeUrl = `data:image/png;base64,${qrCodeBuffer.toString("base64")}`;
    }

    // Use findByIdAndUpdate with the `new` option to return the updated document
    const updatedRegistration = await RegistrationModel.findByIdAndUpdate(
      savedRegistration._id,
      { qrCodeUrl },
      { new: true }
    );

    return NextResponse.json(
      {
        message: "Registration saved successfully",
        registration: updatedRegistration,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Registration save error:", error);
    return NextResponse.json(
      { message: "Error saving registration", error: error.message },
      { status: 500 }
    );
  }
}
