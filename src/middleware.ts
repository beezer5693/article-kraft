import { NextRequest, NextResponse } from "next/server";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./lib/constants";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/auth/sign-in", "/auth/sign-up"];

export const middleware = async (request: NextRequest) => {
    const pathname = request.nextUrl.pathname;

    if (
        !publicRoutes.some((path) => pathname.startsWith(path)) &&
        !protectedRoutes.some((path) => pathname.startsWith(path))
    ) {
        return NextResponse.next();
    }

    if (!isAuthenticated(request) && protectedRoutes.some((path) => pathname.startsWith(path))) {
        const response = NextResponse.redirect(new URL("/auth/sign-in", request.url));
        deleteAllCookies(request, response, ACCESS_TOKEN, REFRESH_TOKEN);
        return response;
    }

    return NextResponse.next();
};

const isAuthenticated = (request: NextRequest): boolean => {
    const refreshToken: string | undefined = request.cookies.get(REFRESH_TOKEN)?.value;
    return !!refreshToken;
};

const deleteAllCookies = (request: NextRequest, response: NextResponse, ...cookies: string[]) => {
    cookies.forEach((cookie) => {
        request.cookies.delete(cookie);
        response.cookies.delete(cookie);
    });
};

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
