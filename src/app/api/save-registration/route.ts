import { connect } from "@/dbConfig/dbConfig";
import RegistrationModel from "@/Model/RegistrationModel";
import { NextRequest, NextResponse } from "next/server";

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
      registrationCode: `OPF-${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 5)}`,
    });

    const savedRegistration = await newRegistration.save();

    return NextResponse.json(
      {
        message: "Registration saved successfully",
        registration: savedRegistration,
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
