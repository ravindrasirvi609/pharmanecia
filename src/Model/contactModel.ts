// models/Student.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  message: { type: String },
  registrationId: { type: String },
  qrCodeUrl: { type: String },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
