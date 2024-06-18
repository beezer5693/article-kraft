"use server";

import { GENERIC_ERROR_MESSAGE } from "@/lib/constants";
import { signUpSchema } from "@/lib/formValidators";
import { setSessionToken } from "@/lib/setSessionToken";
import {
  applyNameCapitalizationStrategy,
  trimAndLowercaseText,
} from "@/lib/textFormatters";
import { TSignUpSchema } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signupAction(formData: TSignUpSchema) {
  const { error } = signUpSchema.safeParse(formData);
  if (error) {
    return { errors: error.format() };
  }

  const { first_name, last_name, email, password } = formData;
  const formattedEmail = trimAndLowercaseText(email);
  const formattedFirstName = applyNameCapitalizationStrategy(first_name.trim());
  const formattedLastName = applyNameCapitalizationStrategy(last_name.trim());

  const values = {
    first_name: formattedFirstName,
    last_name: formattedLastName,
    email: formattedEmail,
    password: password.trim(),
  };

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    },
  );

  const jsonData = await response.json();

  if (response.status === 409) {
    return redirect(`/signup?success=false&message=${jsonData.message}`);
  }
  if (!response.ok) {
    return redirect(`/signup?success=false&message=${GENERIC_ERROR_MESSAGE}`);
  }

  const { data } = jsonData;

  setSessionToken(data.access_token);

  revalidatePath(`/dashboard/${data.user.user_id}`, "layout");
  redirect(`/dashboard/${data.user.user_id}`);
}
