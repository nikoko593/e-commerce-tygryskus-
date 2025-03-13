import mongoose from "mongoose";
import { CategorySchema } from "../db/schema";
import { CategoryProductPivotSchema } from "../db/schema";

const categoryProductPivolModel = mongoose.models.CategoryProductPivot || mongoose.model('CategoryProductPivot', CategoryProductPivotSchema);

export default categoryProductPivolModel