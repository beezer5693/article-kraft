import { Field, Form, FormVariant } from "@/lib/types";
import { ChangeEvent } from "react";

export const getFieldErrorStyle = (form: Form, field: Field): string => {
    const fieldState = form.getFieldState(field.name) || {};
    const fieldError = fieldState.error || fieldState.invalid;
    return fieldError
        ? "border-destructive shadow-[inset_0px_0px_0px_1px_rgba(204,12,57,1)] focus:border-destructive focus:shadow-[0px_0px_0px_3px_rgb(196,0,0,0.2),inset_0px_0px_0px_1px_rgba(204,12,57,1)]"
        : "";
};

export const checkForEmailInPassword = (form: Form): boolean => {
    const email = form.watch("email").toLowerCase();
    const password = form.watch("password").toLowerCase();
    const textBeforeAtSign = email?.split("@")[0];
    return password?.includes(textBeforeAtSign);
};

export const isPasswordGreaterThanEightChars = (form: Form): boolean => {
    return form.watch("password")?.length >= 8;
};

export const isFieldDirty = (form: Form, name: string): boolean => {
    return form.getFieldState(name).isDirty;
};

export const checkConfirmPasswordMatchesPassword = (form: Form): boolean => {
    return (
        form.watch("password") === form.watch("confirmPassword") &&
        isFieldDirty(form, "confirmPassword")
    );
};

export const getFormSubmissionButtonText = (
    variant: FormVariant,
    isSubmitting: boolean
): { buttonText: string } => {
    let buttonText = "";

    switch (variant) {
        case "SIGN_UP":
            buttonText = isSubmitting ? "Signing up..." : "Sign up";
            break;
        case "SIGN_IN":
            buttonText = isSubmitting ? "Signing in..." : "Sign in";
            break;
        case "FORGOT_PASSWORD":
            buttonText = isSubmitting ? "Sending reset link..." : "Send reset link";
            break;
        case "RESET_PASSWORD":
            buttonText = isSubmitting ? "Resetting password..." : "Reset password";
            break;
    }

    return { buttonText };
};

export const getFormHeader = (
    variant: FormVariant
): { formTitle: string; formDescription: string } => {
    let formTitle = "";
    let formDescription = "";

    switch (variant) {
        case "SIGN_UP":
            formTitle = "Get started";
            formDescription = "Create a new account";
            break;
        case "SIGN_IN":
            formTitle = "Welcome back";
            formDescription = "Sign in to your account";
            break;
        case "FORGOT_PASSWORD":
            formTitle = "Forgot Password";
            formDescription = "Enter your email and we'll send you a link to reset your password";
            break;
        case "RESET_PASSWORD":
            formTitle = "Reset Password";
            formDescription = "Create a new password for your account";
            break;
    }

    return { formTitle, formDescription };
};

const formatFullName = (value: string): string => {
    return value
        .replace(/\s{2,}/g, " ") // Replace multiple spaces with a single space
        .replace(/[^a-zA-Z\s]+/g, "") // Remove any non-alphabetical characters except spaces
        .replace(/^ +/, ""); // Remove spaces at the beginning
};

export const applyFullNameFormatting = (e: ChangeEvent<HTMLInputElement>, field: Field): string => {
    const { value } = e.target;
    field.onChange(formatFullName(value));
    return e.target.value.trim();
};
