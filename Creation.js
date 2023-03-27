import mongoose from "mongoose";

const CreationSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  middlename: { type: String },
  lastname: { type: String },
  address: { type: String },
  billingaddress: { type: String },
  phonenumber: { type: Number, required: true },
  additionphonenumber: { type: Number },
  dob: { type: String, required: true },
  emailid: { type: String, required: true },
  gender: { type: String, required: true },
});

export default mongoose.model("Creation", CreationSchema);
