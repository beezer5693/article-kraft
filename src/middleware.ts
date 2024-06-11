import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { SESSION_ID, SESSION_TOKEN } from "./lib/constants";
import { Theme } from "./lib/types";

const protectedRoutes = ["/dashboard/"];
const publicRoutes = ["/login", "/"];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const cookieStore = cookies();
  const sessionToken = cookieStore.get(SESSION_TOKEN)?.value;
  const sessionId = cookieStore.get(SESSION_ID)?.value;

  // If the user is trying to access their dashboard and the token is not present
  if (
    protectedRoutes.some((route) => path.startsWith(route)) &&
    (!sessionToken || !sessionId)
  ) {
    return notAuthorizedRedirectResponse(request);
  }

  // If the user is trying to access the homepage or
  // the login page and the session token is present
  if (publicRoutes.includes(path) && sessionToken) {
    if (!sessionId) {
      const response = NextResponse.next();
      deleteAllCookies(response, SESSION_ID, SESSION_TOKEN);
      return response;
    } else {
      return authorizedRedirectResponse(request, sessionId);
    }
  }

  // Continue with the request
  return NextResponse.next();
}

function authorizedRedirectResponse(request: NextRequest, sessionId: string) {
  return NextResponse.redirect(new URL(`/dashboard/${sessionId}`, request.url));
}

function notAuthorizedRedirectResponse(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/login", request.url));
  deleteAllCookies(response, SESSION_ID, SESSION_TOKEN);
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
