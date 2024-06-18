import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is a required field")
    .email("Enter a valid email address"),
  password: z.string().min(1, "Password is a required field"),
  remember_me: z.boolean().optional(),
});

export const signUpSchema = z
  .object({
    first_name: z.string().min(1, "First name is a required field"),
    last_name: z.string().min(1, "Last name is a required field"),
    email: z
      .string()
      .min(1, "Email is a required field")
      .email("Enter a valid email address"),
    password: z
      .string()
      .min(1, "Password is a required field")
      .refine(
        (value) => value.length >= 8,
        "Password must be at least 8 characters",
      ),
  })
  .refine(
    (data) => {
      const emailBeforeAt = data.email.split("@")[0];
      return !data.password.includes(emailBeforeAt);
    },
    {
      message: "Password cannot contain your email",
      path: ["password"],
    },
  );

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is a required field")
    .email("Enter a valid email address"),
});

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, "Password is a required field")
      .refine(
        (value) => value.length >= 8,
        "Password must be at least 8 characters",
      ),
    confirmPassword: z.string().min(1, "Confirm password is a required field"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
