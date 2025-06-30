import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function GET(req: NextRequest) {
    const auth = req.headers.get("authorization");
    if (!auth || !auth.startsWith("Bearer ")) {
        return NextResponse.json({ error: "No token provided." }, { status: 401 });
    }

    const token = auth.split(" ")[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as any;
        await dbConnect();
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) return NextResponse.json({ error: "User not found." }, { status: 404 });
        return NextResponse.json({ user }, { status: 200 });
    } catch {
        return NextResponse.json({ error: "Invalid token." }, { status: 401 });
    }
}