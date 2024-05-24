"use server";

import { PATH, SESSION_TOKEN } from "@/lib/constants";
import { extractTokenFromHeader } from "@/lib/extract-token";
import { loginSchema, signUpSchema } from "@/lib/form-validators";
import { seperateFullNameIntoFirstAndLastName } from "@/lib/format-name";
import { TLoginSchema, TSignUpSchema } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const BACKEND_URL = process.env.BACKEND_URL;

export const login = async (values: TLoginSchema) => {
    const { error } = loginSchema.safeParse(values);
    if (error) {
        return { errors: error.format() };
    }

    const formValues = {
        email: values.email.trim().toLowerCase(),
        password: values.password.trim(),
    };

    const response = await fetch(`${BACKEND_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
        credentials: "include",
    });

    const jsonData = await response.json();

    if (!response.ok) {
        redirect(`/login?error=true&message=${jsonData.message}`);
    }

    const {
        data: { user },
    } = jsonData;

    cookies().set({
        name: SESSION_TOKEN,
        value: extractTokenFromHeader(response.headers),
        path: PATH,
        httpOnly: true,
        secure: false,
    });

    revalidatePath(`/dashboard/${user.user_id}`, "layout");
    redirect(`/dashboard/${user.user_id}`);
};

export const signup = async (values: TSignUpSchema) => {
    const { error } = signUpSchema.safeParse({ ...values, email: 11111111 });
    if (error) {
        return { errors: error.format() };
    }

    const [first_name, last_name] = seperateFullNameIntoFirstAndLastName(values.full_name);
    const formValues = {
        first_name,
        last_name,
        email: values.email.trim().toLowerCase(),
        password: values.password.trim(),
    };

    const response = await fetch(`${BACKEND_URL}/api/v1/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
    });

    const jsonData = await response.json();

    if (response.status === 409) {
        redirect(`/signup?error=true&message=${jsonData.message}`);
    }
    if (!response.ok) {
        redirect(`/signup?error=true&message=Uh oh! Something went wrong. Please try again.`);
    }

    const {
        data: { user },
    } = jsonData;

    cookies().set({
        name: SESSION_TOKEN,
        value: extractTokenFromHeader(response.headers),
        path: PATH,
        httpOnly: true,
        secure: false,
    });

    revalidatePath(`/dashboard/${user.user_id}`, "layout");
    redirect(`/dashboard/${user.user_id}`);
};
