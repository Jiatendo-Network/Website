import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();
        if (!email || !password) {
            return NextResponse.json({ error: "Email and password required." }, { status: 400 });
        }

        await dbConnect();

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
        }

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email, nickname: user.nickname },
            JWT_SECRET,
            { expiresIn: "7d" }
        );

        return NextResponse.json({ token }, { status: 200 });
    } catch(error) {
        console.error(error)
        return NextResponse.json({ error: "Server error." }, { status: 500 });
    }
}