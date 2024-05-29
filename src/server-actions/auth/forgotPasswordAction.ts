"use server";

import { forgotPasswordSchema } from "@/lib/formValidators";
import { trimAndLowercaseText } from "@/lib/textFormatters";
import { TForgotPasswordSchema } from "@/lib/types";
import { redirect } from "next/navigation";

export async function forgotPasswordAction(values: TForgotPasswordSchema) {
    const { error } = forgotPasswordSchema.safeParse(values);
    if (error) {
        return { errors: error.format() };
    }

    const { email } = values;

    const formattedEmail = trimAndLowercaseText(email);

    const formValues = {
        email: formattedEmail,
    };

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/forgot-password`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
    });

    const jsonData = await response.json();

    if (response.status === 404) {
        return redirect(
            `/forgot-password?error=true&message=No account found with the provided email. Please make sure the email is correct and try again.`
        );
    }

    if (!response.ok) {
        return redirect(`/forgot-password?error=true&message=${jsonData.message}`);
    }

    redirect(`/forgot-password/otp?email=${formattedEmail}`);
}
