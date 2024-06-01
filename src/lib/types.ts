import { ControllerRenderProps, FieldValues, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import {
    forgotPasswordSchema,
    loginSchema,
    resetPasswordSchema,
    signUpSchema,
} from "./formValidators";

export type FormVariant = "SIGN_UP" | "LOG_IN" | "FORGOT_PASSWORD" | "RESET_PASSWORD" | "OTP";

export type TLoginSchema = z.infer<typeof loginSchema>;

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export type TForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export type TResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

export type Field = ControllerRenderProps<FieldValues, string>;

export type Form = UseFormReturn<any, any, undefined>;
