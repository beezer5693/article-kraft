import { forgotPassword, login, resetPassword, signup } from "@/server/actions/actions";
import {
  forgotPasswordFormSchema,
  loginFormSchema,
  resetPasswordFormSchema,
  signupFormSchema,
} from "@/lib/auth-form-validator";
import { FormVariant } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function useFormSubmissionButtonText(variant: FormVariant, isLoading: boolean) {
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

export function useFormHeader(variant: FormVariant) {
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

export function useSignUpForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signupFormSchema>) {
    setIsLoading(true);

    try {
      await signup(values);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { form, isLoading, onSubmit };
}

export function useLoginForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    setIsLoading(true);

    try {
      await login(values);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { form, isLoading, onSubmit };
}

export function useForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof forgotPasswordFormSchema>>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof forgotPasswordFormSchema>) {
    setIsLoading(true);

    try {
      await forgotPassword(values);
      form.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { form, isLoading, onSubmit };
}

export function useResetPasswordForm(code: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof resetPasswordFormSchema>>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof resetPasswordFormSchema>) {
    setIsLoading(true);

    try {
      await resetPassword(values, code);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { form, isLoading, onSubmit };
}
