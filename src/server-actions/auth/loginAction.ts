"use server";

import { loginSchema } from "@/lib/formValidators";
import { setAuthCookies } from "@/lib/setAuthCookies";
import { TLoginSchema } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function loginAction(values: TLoginSchema) {
    const { error } = loginSchema.safeParse(values);
    if (error) {
        return { errors: error.format() };
    }

    const formValues = {
        email: values.email.trim().toLowerCase(),
        password: values.password.trim(),
    };

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/login`, {
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

    const { data } = jsonData;

    setAuthCookies(data);

    revalidatePath(`/dashboard/${data.user.user_id}`, "layout");
    redirect(`/dashboard/${data.user.user_id}`);
}
