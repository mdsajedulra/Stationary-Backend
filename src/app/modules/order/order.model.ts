import mongoose, { Schema } from "mongoose";
import { IOrder } from "./order.interface";

 const orderSchema = new Schema<IOrder>(
  {
    userId: { type: String, required: true },
    productId: { type: String, required: true },

    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

  export const orderModel = mongoose.model<IOrder>("Order", orderSchema);