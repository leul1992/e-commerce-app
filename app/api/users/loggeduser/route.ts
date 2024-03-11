import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import user from "@/models/user";
import { connect } from "@/dbConfig/conn";

connect();

export async function GET(req: NextRequest) {
    try {
        const userId = await getDataFromToken(req)
        const user_data = await user.findOne({_id: userId}).select("-password");

        return NextResponse.json({
            message: "User Found",
            data: user_data
        })
    } catch(error: any) {
        return NextResponse.json({error: error.message});
    }
}