import { NextResponse } from 'next/server'
import React from 'react'

export async function GET() {
  try {
    const response = NextResponse.json(
        {
            message: "LogOut Successful",
            success: true,
        }
    )
    response.cookies.set("token", "", {
        httpOnly: true, expires: new Date(0)
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message},
        {status: 500});
  }
}
