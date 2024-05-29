import { ONE_YEAR, SESSION_TOKEN } from "@/lib/constants";
import { extractTokenFromHeader } from "@/lib/extractToken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const accessToken = req.cookies.get(SESSION_TOKEN);

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/users`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    const jsonData = await response.json();

    if (!response.ok) {
        return NextResponse.json("Unauthorized", { status: 401 });
    }
    const { data } = jsonData;

    const res = NextResponse.json(data, { status: 200 });

    res.cookies.set({
        name: SESSION_TOKEN,
        value: extractTokenFromHeader(res.headers),
        path: "/",
        expires: ONE_YEAR,
        httpOnly: true,
        secure: false,
    });

    return res;
}
