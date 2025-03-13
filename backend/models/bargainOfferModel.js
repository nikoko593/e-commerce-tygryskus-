import mongoose from "mongoose";
import { CategorySchema } from "../db/schema";
import { BargainOfferSchema } from "../db/schema";

const bargainOfferModel = mongoose.models.BargainOffer || mongoose.model('BargainOffer', BargainOfferSchema);

export default bargainOfferModel