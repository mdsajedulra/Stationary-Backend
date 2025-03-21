import mongoose, { Schema } from "mongoose";
import { IProduct } from "./product.interface";

const ProductSchema = new Schema<IProduct>(
    {
      name: { type: String, required: true, trim: true },
      brand: { type: String, required: true, trim: true },
      price: { type: Number, required: true, min: 0 },
      model: { type: String, required: true, trim: true },
      stock: { type: Number, required: true, min: 0 },
    },
    { timestamps: true }
  );
  
  export const ProductModel = mongoose.model<IProduct>("Product", ProductSchema);