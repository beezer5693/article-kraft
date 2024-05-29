"use server";

import { SESSION_TOKEN } from "@/lib/constants";
import { otpSchema } from "@/lib/formValidators";
import { TOTPSchema } from "@/lib/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function verifyOTPAction(email: string, values: TOTPSchema) {
    const { error } = otpSchema.safeParse(values);
    if (error) {
        return { errors: error.format() };
    }

    const { pin } = values;

    const formValues = {
        email,
        otp: pin,
    };

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/verify-otp`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
    });

    const jsonData = await response.json();

    if (!response.ok) {
        return redirect(
            `/forgot-password/otp?error=true&message=${jsonData.message}&email=${email}`
        );
    }

    const { data } = jsonData;

    cookies().set(SESSION_TOKEN, data.access_token, {
        maxAge: 60 * 5,
        path: "/",
        httpOnly: true,
        sameSite: "lax",
    });

    redirect(`/reset-password?email=${email}`);
}
