import AbstractModel from "@/Model/AbstractModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(req: NextRequest) {
  try {
    // Fetch all abstracts from the database
    const abstracts = await AbstractModel.find({});

    // Check if abstracts exist
    if (!abstracts || abstracts.length === 0) {
      return NextResponse.json(
        { message: "No abstracts found" },
        { status: 404 }
      );
    }

    // Return the list of abstracts
    return NextResponse.json({
      message: "Abstracts fetched successfully",
      abstracts,
    });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}
