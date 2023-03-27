import mongoose from "mongoose";

const CounterSchema = new mongoose.Schema(
  {
    slNo: {
      type: String,
    },
    seq: {
      type: Number,
    },
  }
  // {
  // collection: "UserInfo",
  // }
);

export default mongoose.model("Counter", CounterSchema);
