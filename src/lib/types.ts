import { z } from "zod";
import {
    signUpSchema,
    forgotPasswordSchema,
    resetPasswordSchema,
    loginSchema,
    otpSchema,
} from "./formValidators";
import { ControllerRenderProps, FieldValues, UseFormReturn } from "react-hook-form";

export type FormVariant = "SIGN_UP" | "LOG_IN" | "FORGOT_PASSWORD" | "RESET_PASSWORD" | "OTP";

export type TLoginSchema = z.infer<typeof loginSchema>;

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export type TForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export type TResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

export type TOTPSchema = z.infer<typeof otpSchema>;

export type Field = ControllerRenderProps<FieldValues, string>;

export type Form = UseFormReturn<any, any, undefined>;
