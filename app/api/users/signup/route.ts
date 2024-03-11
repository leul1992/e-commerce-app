// app/api/signup.ts
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connect } from "@/dbConfig/conn";
import user from "@/models/user";
import { sendEmail } from "@/helper/mailer";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    // if (req.method !== "POST") {
    //   return NextResponse.json(
    //     { success: false, error: "Method Not Allowed" }
    //   );
    // }
    const reqBody = await req.json();

    const { username, email, password, repassword } = reqBody;

    // Check if any required field is missing
    if (!username || !email || !password || !repassword) {
      return NextResponse.json(
        { success: false, error: "Missing fields" }
      );
    }

    // Check if password matches the re-entered password
    if (password !== repassword) {
      return NextResponse.json(
        { success: false, error: "Passwords do not match" }
      );
    }

    // Check if a user with the same username or email already exists
    const existingUsername = await user.findOne({ username });
    const existingEmail = await user.findOne({ email });

    if (existingUsername && existingEmail) {
      return NextResponse.json({
        success: false,
        error: "Username and email already taken",
      });
    } else if (existingUsername) {
      return NextResponse.json({
        success: false,
        error: "Username already taken",
      });
    } else if (existingEmail) {
      return NextResponse.json({
        success: false,
        error: "Email already taken",
      });
    }


    // Hash the password using bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user instance
    const newUser = new user({
      username,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    console.log(savedUser);

    // Send verification email
    await sendEmail({ email, emailType: "VERIFY", userId: newUser._id });

    // Generate JWT token
    const tokenData = {
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {
      expiresIn: "12h",
    });

    // Set the token in an HTTP-only cookie
    // NextResponse.setHeader('Set-Cookie', `token=${token}; HttpOnly; Secure=${process.env.NODE_ENV === 'production'}`);

    return NextResponse.json({ success: true, user: savedUser });
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json(
      { success: false, error: "Error creating user" }
    );
  }
}
