import Contact from "@/Model/contactModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest): Promise<Response> {
  if (req.method === "POST") {
    const { id } = await req.json();
    const student = await Contact.findOne({ registrationId: id }).lean();
    if (!student) {
      return new Response(null, { status: 404 });
    }

    return new Response(JSON.stringify({ props: { student } }));
  } else {
    return new Response("Method not allowed", { status: 405 });
  }
}
