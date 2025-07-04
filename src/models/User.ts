import mongoose, { Schema, Document, models } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IUser extends Document {
    email: string;
    password: string;
    nickname: string;
    avatarSVG?: string;
    avatarConfig: object;
}

const UserPasswordResetToken: Schema = new Schema({
    token: { type: String, default: uuidv4() },
    expires: { type: Number, default: Date.now() }
})

const UserSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nickname: { type: String, required: true },
    avatarSVG: { type: String, default: "" },
    avatarConfig: { type: Object, default: {} },
    resetToken: { type: UserPasswordResetToken, default: () => ({}) }
});

export default models.User || mongoose.model<IUser>("User", UserSchema);
