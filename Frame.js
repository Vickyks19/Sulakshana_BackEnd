import mongoose from "mongoose";

const FrameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  rate: { type: Number, required: true },
});

export default mongoose.model("Frame", FrameSchema);
