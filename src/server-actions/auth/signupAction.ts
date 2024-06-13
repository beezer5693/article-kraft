"use server";

import { GENERIC_ERROR_MESSAGE } from "@/lib/constants";
import { signUpSchema } from "@/lib/formValidators";
import { setSessionToken } from "@/lib/setSessionToken";
import {
  seperateFullNameIntoFirstAndLastName,
  trimAndLowercaseText,
} from "@/lib/textFormatters";
import { TSignUpSchema } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signupAction(values: TSignUpSchema) {
  const { error } = signUpSchema.safeParse(values);
  if (error) {
    return { errors: error.format() };
  }

  const { full_name, email, password } = values;

  const [first_name, last_name] =
    seperateFullNameIntoFirstAndLastName(full_name);
  const formattedEmail = trimAndLowercaseText(email);

  const formValues = {
    first_name,
    last_name,
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
      body: JSON.stringify(formValues),
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
