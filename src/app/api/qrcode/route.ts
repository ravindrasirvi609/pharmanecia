import AbstractModel from "@/Model/AbstractModel";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function POST(req: NextRequest): Promise<Response> {
  if (req.method === "POST") {
    const { id } = await req.json();
    console.log(id);

    let student = await AbstractModel.findOne({ _id: id }).lean();
    if (!student) {
      student = await AbstractModel.findOne({
        temporaryAbstractCode: id,
      }).lean();
      if (!student) {
        return new Response(null, { status: 404 });
      }
    }

    return new Response(JSON.stringify({ props: { student } }), {
      status: 200,
    });
  } else {
    return new Response("Method not allowed", { status: 405 });
  }
}
