import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";
import { v4 as uuidv4 } from "uuid";
import { sendMail } from "@/lib/email";

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();
        if (!email) {
            return NextResponse.json({ error: "Email is required." }, { status: 400 });
        }

        await dbConnect();

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User with that email is not exist" }, { status: 404 });
        }

        const token = uuidv4()
        const expires = 60 * 10 * 1000;
        
        // Update user's password reset token
        user.resetToken.token = token;
        user.resetToken.expires = Date.now() + expires

        await user.save()

        const mailContent = `Follow this link to reset your password: ${req.nextUrl.origin}/reset?token=${token}&email=${email}`
        const mailSent = await sendMail("Reset your password", email, mailContent)
        console.log("Mail sent:", mailSent)

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: "Server error." }, { status: 500 });
    }
}