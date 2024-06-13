import { cookies } from "next/headers";
import { ONE_YEAR, PATH, SESSION_TOKEN } from "./constants";

export function setSessionToken(data: { access_token: string }) {
  cookies().set(SESSION_TOKEN, data.access_token, {
    path: PATH,
    expires: ONE_YEAR,
    httpOnly: true,
    secure: false,
  });
}
