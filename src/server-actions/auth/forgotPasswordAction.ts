"use server";

import {
  NO_ACCOUNT_FOUND_MESSAGE,
  PASSWORD_RESET_LINK_SENT_MESSAGE,
} from "@/lib/constants";
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

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/auth/forgot-password`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    },
  );

  const jsonData = await response.json();

  if (response.status === 404) {
    return redirect(
      `/forgot-password?success=false&message=${NO_ACCOUNT_FOUND_MESSAGE}`,
    );
  }

  if (!response.ok) {
    return redirect(
      `/forgot-password?success=false&message=${jsonData.message}`,
    );
  }

  redirect(
    `/forgot-password?success=true&message=${PASSWORD_RESET_LINK_SENT_MESSAGE}`,
  );
}
