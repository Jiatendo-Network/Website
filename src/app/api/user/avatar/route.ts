import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(req: NextRequest) {
    const auth = req.headers.get("authorization");
    if (!auth || !auth.startsWith("Bearer ")) {
        return NextResponse.json({ error: "No token provided." }, { status: 401 });
    }
    const token = auth.split(" ")[1];
    let userId;
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as any;
        userId = decoded.userId;
    } catch {
        return NextResponse.json({ error: "Invalid token." }, { status: 401 });
    }

    const { avatarSVG } = await req.json();
    if (!avatarSVG) {
        return NextResponse.json({ error: "No avatar SVG provided." }, { status: 400 });
    }

    await dbConnect();
    await User.findByIdAndUpdate(userId, { avatarSVG });
    return NextResponse.json({ message: "Avatar updated." });
}
