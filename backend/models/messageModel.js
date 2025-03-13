import mongoose from "mongoose";
import { UserSchema } from "../db/schema";
import { MessageSchema } from "../db/schema";


const messageModel = mongoose.models.Message || mongoose.model('Message', MessageSchema);

export default messageModel