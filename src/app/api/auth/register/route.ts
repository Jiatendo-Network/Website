import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
    try {
        const { email, password, nickname } = await req.json();
        if (!email || !password || !nickname) {
            return NextResponse.json({ error: "All fields are required." }, { status: 400 });
        }

        await dbConnect();

        const existing = await User.findOne({ email });
        if (existing) {
            return NextResponse.json({ error: "Email already in use." }, { status: 409 });
        }

        const hashed = await bcrypt.hash(password, 10);
        await User.create({ email, password: hashed, nickname });

        return NextResponse.json({ message: "User registered successfully." }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Server error." }, { status: 500 });
    }
}
