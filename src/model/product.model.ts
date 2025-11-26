import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  task: string;
  productPrice: number;
}

const ProductSchema: Schema = new Schema(
  {
    task: { type: String, required: true },
    productPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Product = mongoose.model<IProduct>("Product", ProductSchema);
