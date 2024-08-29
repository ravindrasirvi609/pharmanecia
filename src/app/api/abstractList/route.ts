import AbstractModel from "@/Model/AbstractModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(req: NextRequest) {
  try {
    // Get page and limit from query parameters
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "50");

    // Calculate skip value for pagination
    const skip = (page - 1) * limit;

    // Fetch total count of abstracts
    const total = await AbstractModel.countDocuments();

    // Fetch paginated abstracts from the database
    const abstracts = await AbstractModel.find({}).lean();

    // Check if abstracts exist
    if (!abstracts || abstracts.length === 0) {
      return NextResponse.json(
        { message: "No abstracts found" },
        { status: 404 }
      );
    }

    // Return the list of abstracts with pagination info
    return NextResponse.json({
      message: "Abstracts fetched successfully",
      abstracts,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error.toString() },
      { status: 500 }
    );
  }
}
