export const extractTokenFromHeader = (headers: Headers) => {
    const cookieHeader = headers.getSetCookie()[0];
    return cookieHeader ? cookieHeader.split(";")[0].split("=")[1] : "";
};
