import Contact from "@/Model/contactModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const { id } = await req.json();
    const student = await Contact.findOne({ registrationId: id }).lean();
    if (!student) {
      return {
        notFound: true,
      };
    }

    return NextResponse.json({ props: { student } });
  } else {
    return NextResponse.json({ message: "Method not allowed" });
  }
}
