import { ZodType, z } from "zod";

export type LoginFormSchema = {
  email: string;
  password: string;
};

export const loginFormSchema: ZodType<LoginFormSchema> = z.object({
  email: z.string().min(1, "Email is a required field").email("Enter a valid email address"),
  password: z.string().min(1, "Password is a required field"),
});

export type SignupFormSchema = {
  email: string;
  password: string;
};

export const signupFormSchema: ZodType<SignupFormSchema> = z
  .object({
    email: z.string().min(1, "Email is a required field").email("Enter a valid email address"),
    password: z
      .string()
      .min(1, "Password is a required field")
      .refine((value) => value.length >= 8, "Password must be at least 8 characters"),
  })
  .refine(
    (data) => {
      const emailBeforeAt = data.email.split("@")[0];
      return !data.password.includes(emailBeforeAt);
    },
    {
      message: "Password cannot contain your email",
      path: ["password"],
    }
  );

export type ForgotPasswordFormSchema = {
  email: string;
};

export const forgotPasswordFormSchema: ZodType<ForgotPasswordFormSchema> = z.object({
  email: z.string().min(1, "Email is a required field").email("Enter a valid email address"),
});

export type ResetPasswordFormSchema = {
  password: string;
  confirmPassword: string;
};

export const resetPasswordFormSchema: ZodType<ResetPasswordFormSchema> = z
  .object({
    password: z
      .string()
      .min(1, "Password is a required field")
      .refine((value) => value.length >= 8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Confirm password is a required field"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
