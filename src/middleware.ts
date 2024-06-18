import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { SESSION_TOKEN } from "./lib/constants";

const protectedRoutes = ["/dashboard"];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const sessionToken = cookies().get(SESSION_TOKEN)?.value;

  // If the user is trying to access their dashboard and the token is not present
  if (
    protectedRoutes.some((route) => path.startsWith(route)) &&
    !sessionToken
  ) {
    return notAuthorizedRedirectResponse(request);
  }

  // Continue with the request
  return NextResponse.next();
}

function notAuthorizedRedirectResponse(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/login", request.url));
  deleteAllCookies(response, SESSION_TOKEN);
  return response;
}

function deleteAllCookies(res: NextResponse, ...cookies: string[]) {
  cookies.forEach((cookie) => {
    res.cookies.set(cookie, "", {
      maxAge: 0,
    });
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
