import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  size: Number,
  qty: Number,
  price: Number,
  itemName: String,

  // mount: {
  //   size: Number,
  //   qty: Number,
  //   price: Number,
  // },
  // hardboard: {
  //   size: Number,
  //   qty: Number,
  //   price: Number,
  // },
  // glass: {
  //   size: Number,
  //   qty: Number,
  //   price: Number,
  // },
});

export default mongoose.model("Items", ItemSchema);
