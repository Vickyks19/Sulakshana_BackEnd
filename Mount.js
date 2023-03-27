import mongoose from "mongoose";

const MountSchema = new mongoose.Schema(
  {
    // slNo: Number,
    name: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    rate: { type: Number },
  }
  // {
  // collection: "UserInfo",
  // }
);

export default mongoose.model("Mount", MountSchema);
