import { connect } from "@/dbConfig/dbConfig";
import RegistrationModel from "@/Model/RegistrationModel";
import { NextResponse } from "next/server";

connect();

export async function GET() {
  try {
    const registrations = await RegistrationModel.find({}).sort({
      createdAt: -1,
    });
    return NextResponse.json(registrations);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch registrations" },
      { status: 500 }
    );
  }
}
