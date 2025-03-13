import mongoose from "mongoose";
import { UserSchema } from "../db/schema";


const userModel = mongoose.models.User || mongoose.model('User', UserSchema);

export default userModel