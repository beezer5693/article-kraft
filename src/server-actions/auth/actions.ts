"use server";

import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/lib/constants";
import { signInSchema, signUpSchema } from "@/lib/form-validators";
import { formatName } from "@/lib/format-name";
import { StoreTokenRequest, TSignInSchema, TSignUpSchema } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Sign up a new user
export const signUp = async (values: TSignUpSchema) => {
    const { error } = signUpSchema.safeParse(values);
    if (error) {
        return { errors: error.format() };
    }

    const [firstName, lastName] = values.full_name.split(" ");

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            first_name: formatName(firstName),
            last_name: formatName(lastName),
            email: values.email.trim().toLowerCase(),
            password: values.password.trim(),
        }),
        credentials: "include",
    });

    const data = await response.json();

    if (response.status === 409) {
        throw new Error(data.message);
    }

    if (!response.ok) {
        throw new Error("Uh oh! Something went wrong. Please try again.");
    }

    const { data: responseData } = data;

    console.log("responseData: ", responseData);

    await storeTokens(responseData);

    revalidatePath(`/dashboard/${responseData.user.user_id}`, "layout");
    redirect(`/dashboard/${responseData.user.user_id}`);
};

// Sign in a user
export const signIn = async (values: TSignInSchema) => {
    const { error } = signInSchema.safeParse(values);
    if (error) {
        return { errors: error.format() };
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: values.email.trim().toLowerCase(),
            password: values.password.trim(),
        }),
        credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    const { data: responseData } = data;

    await storeTokens(responseData);

    revalidatePath(`/dashboard/${responseData.user.user_id}`, "layout");
    redirect(`/dashboard/${responseData.user.user_id}`);
};

export const signOut = async () => {
    cookies().delete(ACCESS_TOKEN);
    cookies().delete(REFRESH_TOKEN);
};

export const getSession = async () => {
    console.log("Getting session...");
    const accessToken = cookies().get(ACCESS_TOKEN)?.value;

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
    });

    if (response.status === 401) {
        const data = await refreshAccessToken();
        await storeTokens(data);
    }

    const token = {
        access_token: cookies().get(ACCESS_TOKEN)?.value,
    };

    return token;
};

export const refreshAccessToken = async () => {
    console.log("Refreshing access token...");
    const refreshToken = cookies().get(REFRESH_TOKEN)?.value;

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/refresh`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${refreshToken}`,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    const {
        data: { access_token, refresh_token },
    } = data;

    return { access_token, refresh_token };
};

export const storeTokens = async (request: StoreTokenRequest) => {
    const { access_token, refresh_token } = request;

    cookies().set(ACCESS_TOKEN, access_token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
    });

    cookies().set(REFRESH_TOKEN, refresh_token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
    });
};
