import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import AbstractModel from "@/Model/AbstractModel";
import QRCode from "qrcode";
import { sendEmail } from "@/lib/mailer";
import { uploadQRCodeToFirebase } from "@/lib/firebase";

connect();

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("abstractFile") as File;

    if (!file) {
      return NextResponse.json(
        { message: "Abstract file is required" },
        { status: 400 }
      );
    }

    const email = formData.get("email") as string;
    const whatsappNumber = formData.get("whatsappNumber");
    const name = formData.get("name");
    const designation = formData.get("designation");
    const affiliation = formData.get("affiliation");
    const coAuthor = formData.get("coAuthor");
    const title = formData.get("title");
    const subject = formData.get("subject");
    const abstractFile = formData.get("abstractFile") as File;
    const address = formData.get("address");
    const city = formData.get("city");
    const state = formData.get("state");
    const pincode = formData.get("pincode");

    if (
      !email ||
      !whatsappNumber ||
      !name ||
      !affiliation ||
      !title ||
      !subject ||
      !abstractFile ||
      !address ||
      !city ||
      !state ||
      !pincode
    ) {
      return NextResponse.json(
        { message: "All required fields must be provided" },
        { status: 400 }
      );
    }

    // Check if an abstract with this email already exists
    const existingAbstract = await AbstractModel.findOne({ email });
    if (existingAbstract) {
      return NextResponse.json(
        { message: "An abstract with this email already exists" },
        { status: 409 } // 409 Conflict status code
      );
    }

    const temporyAbstractCode = await abstractCodeGenration();
    let qrCodeUrl = "";

    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/abstractForm/${temporyAbstractCode}`;
    const qrCodeBuffer = await QRCode.toBuffer(url);
    qrCodeUrl = await uploadQRCodeToFirebase(
      qrCodeBuffer,
      `${temporyAbstractCode}.png`
    );

    const abstractData = {
      email,
      whatsappNumber,
      name,
      affiliation,
      coAuthor,
      designation,
      title,
      subject,
      abstractFileUrl: file,
      address,
      city,
      state,
      pincode,
      qrCodeUrl,
      temporyAbstractCode,
    };

    const newAbstract = new AbstractModel(abstractData);
    await newAbstract.save();
    await sendEmail({
      _id: newAbstract._id,
      emailType: "SUBMMITED",
    });

    return NextResponse.json({
      message: "Abstract submitted successfully",
      newAbstract,
    });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}

async function abstractCodeGenration(): Promise<string> {
  const opfPrefix = "OPF";
  const year = new Date().getFullYear().toString().slice(-2);

  // Find the last abstract and get its sequence number
  const lastAbstract = await AbstractModel.findOne().sort({
    temporyAbstractCode: -1,
  });

  let sequenceNumber;
  if (lastAbstract && lastAbstract.temporyAbstractCode) {
    // Extract the sequence number from the last abstract code
    const lastSequence = parseInt(
      lastAbstract.temporyAbstractCode.slice(3, 6),
      10
    );
    sequenceNumber = (lastSequence + 1).toString().padStart(3, "0");
  } else {
    // If no abstracts exist, start from 001
    sequenceNumber = "001";
  }

  return `${opfPrefix}${sequenceNumber}${year}`;
}
