import mongoose, { Document, Schema } from "mongoose";

interface ITransaction extends Document {
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
  amount: number;
  currency: string;
  status: "pending" | "completed" | "failed";
  planName: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  createdAt: Date;
  updatedAt: Date;
}

const TransactionSchema: Schema = new Schema(
  {
    razorpayOrderId: { type: String, required: true, unique: true },
    razorpayPaymentId: { type: String, required: true, unique: true },
    razorpaySignature: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    planName: { type: String, required: true },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerPhone: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ITransaction>("Transaction", TransactionSchema);
