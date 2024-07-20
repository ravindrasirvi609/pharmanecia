import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Transaction from "@/Model/TransactionModel";
import Registration from "@/Model/RegistrationModel";

connect();

export async function POST(req: NextRequest) {
  try {
    const transactionDetails = await req.json();
    const newTransaction = new Transaction({
      razorpayOrderId: transactionDetails.razorpay_order_id,
      razorpayPaymentId: transactionDetails.razorpay_payment_id,
      razorpaySignature: transactionDetails.razorpay_signature,
      amount: transactionDetails.amount,
      currency: transactionDetails.currency,
      status: "completed",
      planName: transactionDetails.planName,
      customerName: transactionDetails.customerName,
      customerEmail: transactionDetails.customerEmail,
      customerPhone: transactionDetails.customerPhone,
    });

    const savedTransaction = await newTransaction.save();

    // Find the corresponding registration and update its payment status
    const updatedRegistration = await Registration.findOneAndUpdate(
      { email: transactionDetails.customerEmail },
      {
        paymentStatus: "Completed",
        paymentAmount: transactionDetails.amount,
        paymentDate: new Date(),
        transactionId: savedTransaction._id,
        registrationStatus: "Confirmed",
      },
      { new: true }
    );

    if (!updatedRegistration) {
      console.error(
        "No matching registration found for email:",
        transactionDetails.customerEmail
      );
      return NextResponse.json(
        { error: "No matching registration found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        transaction: savedTransaction,
        registration: updatedRegistration,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to save transaction or update registration:", error);
    return NextResponse.json(
      { error: "Failed to save transaction or update registration" },
      { status: 500 }
    );
  }
}
