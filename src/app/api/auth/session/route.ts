import { ACCESS_TOKEN } from "@/lib/constants";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const accessToken = cookies().get(ACCESS_TOKEN)?.value;

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
    });

    const data = await response.json();

    if (response.status === 401) {
        return NextResponse.json({ message: data.message }, { status: 401 });
    }

    if (!response.ok) {
        return NextResponse.json(
            { message: "Uh oh. Something went wrong!" },
            { status: response.status }
        );
    }

    return NextResponse.json(data, { status: response.status });
}
