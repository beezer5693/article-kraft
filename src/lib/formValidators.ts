import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().min(1, "Email is a required field").email("Enter a valid email address"),
    password: z.string().min(1, "Password is a required field"),
});

export const signUpSchema = z
    .object({
        full_name: z
            .string()
            .min(1, "Full name is a required field")
            .refine(
                (value) => /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/.test(value),
                "First and last name required"
            ),
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

export const forgotPasswordSchema = z.object({
    email: z.string().min(1, "Email is a required field").email("Enter a valid email address"),
});

export const otpSchema = z.object({
    pin: z.string().min(6, {
        message: "Code must be 6 characters.",
    }),
});

export const resetPasswordSchema = z
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
