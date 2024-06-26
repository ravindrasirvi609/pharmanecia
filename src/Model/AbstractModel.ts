import { Schema, model, models } from "mongoose";

const abstractSchema = new Schema({
  email: { type: String },
  whatsappNumber: { type: String },
  name: { type: String },
  affiliation: { type: String },
  coAuthor: { type: String },
  title: { type: String },
  subject: { type: String },
  abstractFileUrl: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  pincode: { type: String },
  qrCodeUrl: { type: String },
  temporyAbstractCode: { type: String },
  AbstractCode: { type: String },
  Status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const AbstractModel = models.Abstract || model("Abstract", abstractSchema);

export default AbstractModel;
