import mongoose from "mongoose";
import { ProductSchema } from "../db/schema";

const productModel = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default productModel