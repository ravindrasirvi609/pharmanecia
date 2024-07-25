// models/Student.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  mobile: { type: String },
  message: { type: String },
  registrationId: { type: String },
  qrCodeUrl: { type: String },
  kitTaken: { type: Boolean, default: false },
  idCardTaken: { type: Boolean, default: false },
  breakfastTaken: { type: Boolean, default: false },
  lunchTaken: { type: Boolean, default: false },
  certificateTaken: { type: Boolean, default: false },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
