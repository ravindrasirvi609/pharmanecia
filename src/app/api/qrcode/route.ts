import AbstractModel from "@/Model/AbstractModel";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import mongoose from "mongoose";

connect();

export async function POST(req: NextRequest): Promise<Response> {
  if (req.method === "POST") {
    const { id } = await req.json();

    let student;

    // Check if id is a valid ObjectId
    if (mongoose.Types.ObjectId.isValid(id)) {
      console.log("Valid Image");

      student = await AbstractModel.findOne({ _id: id }).lean();
    }

    // If not found by _id or id is not a valid ObjectId, try with temporaryAbstractCode
    if (!student) {
      console.log("Invalid Image");

      student = await AbstractModel.findOne({
        temporyAbstractCode: id,
      }).lean();
      console.log(student);
    }

    if (!student) {
      return new Response(null, { status: 404 });
    }

    return new Response(JSON.stringify({ props: { student } }), {
      status: 200,
    });
  } else {
    return new Response("Method not allowed", { status: 405 });
  }
}
