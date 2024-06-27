import { Schema, model, models } from "mongoose";

const abstractSchema = new Schema({
  email: { type: String, required: true },
  whatsappNumber: { type: String, required: true },
  name: { type: String, required: true },
  affiliation: { type: String, required: true },
  coAuthor: { type: String },
  title: { type: String, required: true },
  subject: { type: String, required: true },
  abstractFileUrl: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
});

const AbstractModel = models.Abstract || model("Abstract", abstractSchema);

export default AbstractModel;
