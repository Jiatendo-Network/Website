import mongoose, { Schema, Document, models } from "mongoose";

export interface IUser extends Document {
    email: string;
    password: string;
    nickname: string;
    avatarSVG?: string;
    avatarConfig: object;
}

const UserSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nickname: { type: String, required: true },
    avatarSVG: { type: String, default: "" },
    avatarConfig: { type: Object, default: {} },
});

export default models.User || mongoose.model<IUser>("User", UserSchema);
