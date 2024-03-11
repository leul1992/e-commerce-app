import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import user from '@/models/user';
import { connect } from "@/dbConfig/conn";

connect();

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  // Input validation
  if (!username || !password) {
    return NextResponse.json({ success: false, error: 'Missing username or password' });
  }

  try {
    // Fetch user by username
    const user_data = await user.findOne({ username }); // Replace with your user model

    if (!user_data) {
      return NextResponse.json({ success: false, error: 'Invalid username or password' });
    }


    // Verify password using a secure hashing function
    const isValidPassword = await bcrypt.compare(password, user_data.password);
    if (!isValidPassword) {
      return NextResponse.json({ success: false, error: 'Invalid username or password' });
    }

    // Generate and sign access token
    // Generate JWT token
    const tokenData = {
      id: user_data._id,
      username: user_data.username,
      email: user_data.email,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {
      expiresIn: "12h",
    });

    // Set secure cookie with the access token
    const response = NextResponse.json({ success: true, message: 'Login successful' });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Internal server error' });
  }
}
