"use server";

import { SESSION_TOKEN, SUCCESSFUL_PASSWORD_RESET_MESSAGE } from "@/lib/constants";
import { resetPasswordSchema } from "@/lib/formValidators";
import { TResetPasswordSchema } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function resetPasswordAction(email: string, values: TResetPasswordSchema) {
    const { error } = resetPasswordSchema.safeParse(values);
    if (error) {
        return { errors: error.format() };
    }

    const accessToken = cookies().get(SESSION_TOKEN)?.value;

    const { password, confirmPassword } = values;

    const formValues = {
        email,
        password: password.trim(),
        confirm_password: confirmPassword.trim(),
    };

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/reset-password`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formValues),
    });

    const jsonData = await response.json();

    if (!response.ok) {
        return redirect(`/reset-password?error=true&message=${jsonData.message}&email=${email}`);
    }

    cookies().delete(SESSION_TOKEN);

    revalidatePath("/login", "layout");
    redirect(`/login?error=false&message=${SUCCESSFUL_PASSWORD_RESET_MESSAGE}`);
}
