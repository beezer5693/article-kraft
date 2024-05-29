import { cookies } from "next/headers";
import { SESSION_TOKEN, PATH, ONE_YEAR, SESSION_ID } from "./constants";

export function setAuthCookies(data: { access_token: string; user: { user_id: string } }) {
    cookies().set(SESSION_TOKEN, data.access_token, {
        path: PATH,
        expires: ONE_YEAR,
        httpOnly: true,
        secure: false,
    });

    cookies().set(SESSION_ID, data.user.user_id, {
        path: PATH,
        expires: ONE_YEAR,
        httpOnly: true,
        secure: false,
    });
}
