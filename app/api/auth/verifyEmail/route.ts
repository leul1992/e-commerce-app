import { connect } from "@/dbConfig/conn";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";

connect();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { token } = reqBody;

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid or expired verification token" },
        { status: 400 }
      );
    }

    // Update user's verification status
    await User.findByIdAndUpdate(user._id, {
      isVerified: true,
      verifyToken: null, // Clear the verification token
      verifyTokenExpiry: null, // Clear the verification token expiry
    });

    return NextResponse.json({ message: "Email verification successful" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
