"use server";

import { GENERIC_ERROR_MESSAGE } from "@/lib/constants";
import { loginSchema } from "@/lib/formValidators";
import { setSessionToken } from "@/lib/setSessionToken";
import { trimAndLowercaseText } from "@/lib/textFormatters";
import { TLoginSchema } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function loginAction(values: TLoginSchema) {
  const { error } = loginSchema.safeParse(values);
  if (error) {
    return { errors: error.format() };
  }

  const { email, password } = values;

  const formattedEmail = trimAndLowercaseText(email);

  const formValues = {
    email: formattedEmail,
    password: password.trim(),
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

  if (response.status === 401 || response.status === 404) {
    return redirect(`/login?success=false&message=${jsonData.message}`);
  }

  if (!response.ok) {
    return redirect(`/login?success=false&message=${GENERIC_ERROR_MESSAGE}`);
  }

  const { data } = jsonData;

  setSessionToken(data.access_token);

  revalidatePath(`/dashboard/${data.user.user_id}`, "layout");
  redirect(`/dashboard/${data.user.user_id}`);
}
