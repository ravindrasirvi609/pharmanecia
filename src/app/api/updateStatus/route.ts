import AbstractModel from "@/Model/AbstractModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function PATCH(req: NextRequest) {
  try {
    const { status, _id } = await req.json();

    if (!_id || !status) {
      console.error("Missing _id or status in the request");
      return NextResponse.json(
        { message: "Missing id or status" },
        { status: 400 }
      );
    }

    const abstract = await AbstractModel.findById(_id);

    if (!abstract) {
      console.error("Abstract not found with _id:", _id);
      return NextResponse.json(
        { message: "Abstract not found" },
        { status: 404 }
      );
    }

    // Update the status and save the abstract
    abstract.status = status;
    await abstract.save();

    // Log the successful update
    console.log("Status updated successfully for _id:", _id);

    return NextResponse.json({
      message: "Status updated successfully",
      abstract,
    });
  } catch (error: any) {
    // Log the error
    console.error("Error updating status:", error);
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}
