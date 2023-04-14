import mongoose, { Schema } from "mongoose";

const InvoiceSchema = new mongoose.Schema({
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
console.log(12, InvoiceSchema);
export default mongoose.model("Invoice", InvoiceSchema);
