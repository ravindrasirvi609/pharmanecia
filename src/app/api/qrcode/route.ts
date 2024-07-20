import AbstractModel from "@/Model/AbstractModel";
import RegistrationModel from "@/Model/RegistrationModel";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import mongoose from "mongoose";

connect();

export async function POST(req: NextRequest): Promise<Response> {
  if (req.method === "POST") {
    const { id } = await req.json();

    let abstract: any = null;
    let registration: any = null;

    // Check if id is a valid ObjectId
    if (mongoose.Types.ObjectId.isValid(id)) {
      console.log("Valid ID");
      abstract = await AbstractModel.findOne({ _id: id }).lean();
    }

    // If not found by _id or id is not a valid ObjectId, try with temporaryAbstractCode
    if (!abstract) {
      console.log("Trying with temporaryAbstractCode");
      abstract = await AbstractModel.findOne({
        temporaryAbstractCode: id,
      }).lean();
    }

    if (!abstract) {
      return new Response(null, { status: 404 });
    }

    // Fetch registration data
    if (abstract.registrationCode) {
      registration = await RegistrationModel.findOne({
        registrationCode: abstract.registrationCode,
      }).lean();
    }

    return new Response(
      JSON.stringify({
        props: {
          abstract,
          registration: registration || null,
        },
      }),
      {
        status: 200,
      }
    );
  } else {
    return new Response("Method not allowed", { status: 405 });
  }
}
