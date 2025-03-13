import mongoose from "mongoose";
import { CategorySchema } from "../db/schema";

const categoryModel = mongoose.models.Category || mongoose.model('Category', CategorySchema);

export default categoryModel