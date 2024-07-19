import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Transaction from "@/Model/TransactionModel";
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

    return NextResponse.json(savedTransaction, { status: 200 });
  } catch (error) {
    console.error("Failed to save transaction:", error);
    return NextResponse.json(
      { error: "Failed to save transaction" },
      { status: 500 }
    );
  }
}
