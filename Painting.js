import mongoose from "mongoose";

const PaintingSchema = new mongoose.Schema({
  paintingName: { type: String },
  artistName: { type: String },
  purchaseRate: { type: Number },
  sellingRate: { type: Number },
  tax: { type: Number },
  //   totalAmount: { type: Number },
});

export default mongoose.model("Painting", PaintingSchema);
