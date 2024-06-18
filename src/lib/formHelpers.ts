import { Field, Form, FormVariant } from "@/lib/types";
import { ChangeEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import { ZodFormattedError } from "zod";

export function getFieldErrorStyle(form: Form, field: Field): string {
  const fieldState = form.getFieldState(field.name) || {};
  const fieldError = fieldState.error || fieldState.invalid;
  return fieldError
    ? "border-destructive focus:border-destructive focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40"
    : "";
}

export function checkForEmailInPassword(form: Form): boolean {
  const email = form.watch("email").toLowerCase();
  const password = form.watch("password").toLowerCase();
  const textBeforeAtSign = email?.split("@")[0];
  return password?.includes(textBeforeAtSign);
}

export function isPasswordGreaterThanEightChars(form: Form): boolean {
  return form.watch("password")?.length >= 8;
}

export function isFieldDirty(form: Form, name: string): boolean {
  return form.getFieldState(name).isDirty;
}

export function checkConfirmPasswordMatchesPassword(form: Form): boolean {
  return (
    form.watch("password") === form.watch("confirmPassword") &&
    isFieldDirty(form, "confirmPassword")
  );
}

export function getFormSubmitButtonText(variant: FormVariant): {
  buttonText: string;
} {
  let buttonText = "";

  switch (variant) {
    case FormVariant.SIGN_UP:
      buttonText = "Sign up";
      break;
    case FormVariant.LOG_IN:
      buttonText = "Log in";
      break;
    case FormVariant.FORGOT_PASSWORD:
      buttonText = "Continue";
      break;
    case FormVariant.RESET_PASSWORD:
      buttonText = "Reset password";
      break;
  }

  return { buttonText };
}

export function getFormHeader(variant: FormVariant): {
  formTitle: string;
  formDescription: string;
} {
  let formTitle = "";
  let formDescription = "";

  switch (variant) {
    case FormVariant.SIGN_UP:
      formTitle = "Get started";
      formDescription = "Create a new account";
      break;
    case FormVariant.LOG_IN:
      formTitle = "Welcome back";
      formDescription = "Log in to your account";
      break;
    case FormVariant.FORGOT_PASSWORD:
      formTitle = "Forgot password";
      formDescription =
        "Enter your email address and we'll send you a link to reset your password";
      break;
    case FormVariant.RESET_PASSWORD:
      formTitle = "Reset password";
      formDescription = "Create a new password for your account";
      break;
  }

  return { formTitle, formDescription };
}

function formatName(value: string): string {
  return value
    .replace(/\s{2,}/g, " ") // Replace multiple spaces with a single space
    .replace(/[^a-zA-Z\s'-]+/g, "") // Remove any non-alphabetical characters except spaces, hyphens and apostrophess
    .replace(/^ +/, ""); // Remove spaces at the beginning
}

export function applyNameFormatting(
  e: ChangeEvent<HTMLInputElement>,
  field: Field,
): string {
  const { value } = e.target;
  field.onChange(formatName(value));
  return e.target.value.trim();
}

export function displayFormErrorsFromServerAction(
  errors: ZodFormattedError<
    {
      first_name: string;
      last_name: string;
      email: string;
      password: string;
    },
    string
  >,
  form: UseFormReturn<any, any, undefined>,
) {
  if (errors.first_name) {
    form.setError("first_name", {
      type: "server",
      message: `${errors.first_name._errors[0]}`,
    });
  }
  if (errors.last_name) {
    form.setError("last_name", {
      type: "server",
      message: `${errors.last_name._errors[0]}`,
    });
  }
  if (errors.email) {
    form.setError("email", {
      type: "server",
      message: `${errors.email._errors[0]}`,
    });
  }
  if (errors.password) {
    form.setError("password", {
      type: "server",
      message: `${errors.password._errors[0]}`,
    });
  }
}
