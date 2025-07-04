import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
    try {
        const { email, token, password } = await req.json();
        if (!email) {
            return NextResponse.json({ error: "Email is required." }, { status: 400 });
        }

        await dbConnect();

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User with that email is not exist" }, { status: 404 });
        }

        if(user.resetToken.token !== token) {
            return NextResponse.json({ error: "Invalid reset token provided" }, { status: 403 });
        }

        if(user.resetToken.expires < Date.now()) {
            return NextResponse.json({ error: "Link has been expired" }, { status: 403 });
        }

        const hashed = await bcrypt.hash(password, 10);

        user.password = hashed
        user.resetToken.token = uuidv4()
        await user.save()

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: "Server error." }, { status: 500 });
    }
}