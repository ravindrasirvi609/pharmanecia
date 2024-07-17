import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import AbstractModel from "@/Model/AbstractModel";
import QRCode from "qrcode";

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

    const email = formData.get("email");
    const whatsappNumber = formData.get("whatsappNumber");
    const name = formData.get("name");
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

    const temporyAbstractCode = await abstractCodeGenration();
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/abstractForm/${temporyAbstractCode}`;
    const qrCodeUrl = await QRCode.toDataURL(url);

    const abstractData = {
      email,
      whatsappNumber,
      name,
      affiliation,
      coAuthor,
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
  return uuidv4();
}
