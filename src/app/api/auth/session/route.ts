import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/lib/constants";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const refreshToken = searchParams.get("refresh_token");

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/refresh`, {
        headers: {
            Authorization: `Bearer ${refreshToken}`,
        },
        credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
        cookies().delete(ACCESS_TOKEN);
        cookies().delete(REFRESH_TOKEN);
        return NextResponse.json({ message: "Not authorized" }, { status: 401 });
    }

    const {
        data: { access_token, refresh_token },
    } = data;

    cookies().set({
        name: ACCESS_TOKEN,
        value: access_token,
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "lax",
    });

    cookies().set({
        name: REFRESH_TOKEN,
        value: refresh_token,
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "lax",
    });

    return NextResponse.json(data, { status: response.status });
}
