import {
  forgotPasswordFormSchema,
  loginFormSchema,
  resetPasswordFormSchema,
  signupFormSchema,
} from "@/lib/form-validators";
import { getToast } from "@/lib/get-toast";
import { signUp } from "@/server-actions/auth/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCurrentTheme } from "./useTheme";

// Signup form
export function useSignUpForm() {
  const { theme } = useCurrentTheme() || {};

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: z.infer<typeof signupFormSchema>) {
    try {
      const result = await signUp(values);

      if (result?.error) {
        const errors = result.error;

        if (errors.email) {
          form.setError("email", { type: "server", message: `${errors.email._errors[0]}` });
        }
        if (errors.password) {
          form.setError("password", { type: "server", message: `${errors.password._errors[0]}` });
        }
      }
    } catch (error: any) {
      getToast("error", error.message, theme);
    }
  }

  return { form, isSubmitting, onSubmit };
}

// Login form
export function useLoginForm() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    try {
      console.log(values);
    } catch (error: any) {
      console.log(error);
    }
  }

  return { form, isSubmitting, onSubmit };
}

// Forgot password form
export function useForgotPasswordForm() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const form = useForm<z.infer<typeof forgotPasswordFormSchema>>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: z.infer<typeof forgotPasswordFormSchema>) {
    try {
      console.log(values);
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  }

  return { form, isSubmitting, isSuccess, onSubmit };
}

// Reset password form
export function useResetPasswordForm(code: string) {
  const form = useForm<z.infer<typeof resetPasswordFormSchema>>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: z.infer<typeof resetPasswordFormSchema>) {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  }

  return { form, isSubmitting, onSubmit };
}
