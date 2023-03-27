import mongoose from "mongoose";

const TaxSchema = new mongoose.Schema(
  {
    taxpercentage: { type: Number, required: true },
    // name: String,
    // width: String,
    // height: String,
    // rate: String,
  }
  // {
  // collection: "UserInfo",
  // }
);

export default mongoose.model("Tax", TaxSchema);
