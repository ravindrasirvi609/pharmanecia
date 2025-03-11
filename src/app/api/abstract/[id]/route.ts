import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import AbstractModel from "@/Model/AbstractModel";
import RegistrationModel from "@/Model/RegistrationModel";

connect();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const abstract = await AbstractModel.findById(id);

    if (!abstract) {
      return NextResponse.json(
        { error: "Abstract not found" },
        { status: 404 }
      );
    }

    // If the abstract has a registration code, fetch the registration to get the fees receipt URL
    let feesReceiptUrl = null;
    if (abstract.registrationCompleted && abstract.registrationCode) {
      const registration = await RegistrationModel.findOne({
        registrationCode: abstract.registrationCode,
      });

      if (registration && registration.feesReceiptUrl) {
        feesReceiptUrl = registration.feesReceiptUrl;
      }
    }

    // Add the fees receipt URL to the abstract data
    const abstractData = abstract.toObject();
    abstractData.feesReceiptUrl = feesReceiptUrl;

    return NextResponse.json(abstractData);
  } catch (error) {
    console.error("Error fetching abstract:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
