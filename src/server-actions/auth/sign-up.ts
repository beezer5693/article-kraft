"use server";

import { SignupFormSchema, signupFormSchema } from "@/lib/form-validators";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signUp(values: SignupFormSchema) {
  const { error: zodError } = signupFormSchema.safeParse(values);

  if (zodError) {
    return { error: zodError.format() };
  }

  const [firstName, lastName] = values.full_name.trim().split(" ");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      email: values.email.trim(),
      password: values.password.trim(),
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  const {
    data: { user_id },
  } = data;

  revalidatePath(`/dashboard/${user_id}`);
  redirect(`/dashboard/${user_id}`);
}
