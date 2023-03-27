import mongoose from "mongoose";

const QuotationSchema = new mongoose.Schema({
  quotationNo: Number,
  date: String,
  customername: { type: String },
  billingaddress: String,
  items: [
    {
      type: Object,
    },
  ],
  total: Number,
  grandTotal: Number,
});

export default mongoose.model("Quotation", QuotationSchema);
