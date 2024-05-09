import { FormVariant } from "@/lib/types";
import { ChangeEvent } from "react";
import { ControllerRenderProps, FieldValues, UseFormReturn } from "react-hook-form";

type Field = ControllerRenderProps<FieldValues, string>;

export function getFieldErrorStyle(form: any, field: Field): string {
  const fieldState = form.getFieldState(field.name) || {};
  const fieldError = fieldState.error || fieldState.invalid;
  return fieldError && "border-destructive focus:border-destructive";
}

export function checkForEmailInPassword(form: UseFormReturn<any, any, undefined>): boolean {
  const email = form.watch("email").toLowerCase();
  const password = form.watch("password").toLowerCase();
  const textBeforeAtSign = email?.split("@")[0];
  return password?.includes(textBeforeAtSign);
}

export function isPasswordGreaterThanEightChars(form: UseFormReturn<any, any, undefined>): boolean {
  return form.watch("password")?.length >= 8;
}

export function isFieldDirty(form: UseFormReturn<any, any, undefined>, name: string): boolean {
  return form.getFieldState(name).isDirty;
}

export function checkConfirmPasswordMatchesPassword(
  form: UseFormReturn<any, any, undefined>
): boolean {
  return (
    form.watch("password") === form.watch("confirmPassword") &&
    isFieldDirty(form, "confirmPassword")
  );
}

export function getFormSubmissionButtonText(variant: FormVariant, isLoading: boolean) {
  let buttonText = "";

  switch (variant) {
    case "SIGN_UP":
      buttonText = isLoading ? "Signing up..." : "Sign up";
      break;
    case "LOG_IN":
      buttonText = isLoading ? "Logging in..." : "Log in";
      break;
    case "FORGOT_PASSWORD":
      buttonText = isLoading ? "Sending reset link..." : "Send reset link";
      break;
    case "RESET_PASSWORD":
      buttonText = isLoading ? "Resetting password..." : "Reset password";
      break;
  }

  return { buttonText };
}

export function getFormHeader(variant: FormVariant) {
  let formTitle = "";
  let formDescription = "";

  switch (variant) {
    case "SIGN_UP":
      formTitle = "Get started";
      formDescription =
        "Elevate your content, boost search engine rankings, and streamline your workflow for peak SEO performance.";
      break;
    case "LOG_IN":
      formTitle = "Welcome back";
      formDescription = "Log in to your account to continue.";
      break;
    case "FORGOT_PASSWORD":
      formTitle = "Forgot Password";
      formDescription =
        "Enter your email address and we will send you instructions to reset your password.";
      break;
    case "RESET_PASSWORD":
      formTitle = "Reset Password";
      formDescription = "Create a new password for your account.";
      break;
  }

  return { formTitle, formDescription };
}

function formatFullName(value: string): string {
  return value
    .replace(/\s{2,}/g, " ") // Replace multiple spaces with a single space
    .replace(/[^a-zA-Z\s]+/g, "") // Remove any non-alphabetical characters except spaces
    .replace(/^ +/, ""); // Remove spaces at the beginning
}

export function applyFullNameFormatting(e: ChangeEvent<HTMLInputElement>, field: Field): string {
  const { value } = e.target;
  field.onChange(formatFullName(value));
  return e.target.value.trim();
}
