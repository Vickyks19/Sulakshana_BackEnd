import mongoose from "mongoose";

const GlassSchema = new mongoose.Schema(
  {
    // slNo: String,
    name: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    rate: { type: Number, required: true },
  }
  // {
  // collection: "UserInfo",
  // }
);

export default mongoose.model("Glass", GlassSchema);
