"use server";

import { signUpSchema } from "@/lib/formValidators";
import { seperateFullNameIntoFirstAndLastName } from "@/lib/formatName";
import { setAuthCookies } from "@/lib/setAuthCookies";
import { TSignUpSchema } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signupAction(values: TSignUpSchema) {
    const { error } = signUpSchema.safeParse(values);
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

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/register`, {
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

    const { data } = jsonData;

    setAuthCookies(data);

    revalidatePath(`/dashboard/${data.user.user_id}`, "layout");
    redirect(`/dashboard/${data.user.user_id}`);
}
