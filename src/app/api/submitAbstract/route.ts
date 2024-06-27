import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { promises as fs } from "fs";
import path from "path";
import AbstractModel from "@/Model/AbstractModel";

connect();

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
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

    // Save the abstract file to a directory
    const fileName = `${uuidv4()}-${abstractFile.name}`;
    const filePath = path.join(process.cwd(), "public/uploads", fileName);

    const fileBuffer = Buffer.from(await abstractFile.arrayBuffer());
    await fs.writeFile(filePath, fileBuffer);

    const abstractData = {
      email,
      whatsappNumber,
      name,
      affiliation,
      coAuthor,
      title,
      subject,
      abstractFileUrl: `/uploads/${fileName}`,
      address,
      city,
      state,
      pincode,
    };
    console.log("abstractData", abstractData);

    const newAbstract = new AbstractModel(abstractData);
    await newAbstract.save();

    return NextResponse.json({ message: "Abstract submitted successfully" });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}
