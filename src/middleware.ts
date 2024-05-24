import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import { SESSION_TOKEN } from "./lib/constants";

export async function middleware(request: NextRequest) {
    const sessionToken = cookies().get(SESSION_TOKEN);

    if (!isAuthenticated()) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

const isAuthenticated = () => {
    const sessionToken = cookies().get(SESSION_TOKEN);
    return !!sessionToken;
};

export const config = {
    matcher: ["/dashboard/:path*"],
};
