import { z } from "zod";
import {
    signInSchema,
    signUpSchema,
    forgotPasswordSchema,
    resetPasswordSchema,
} from "./form-validators";
import { ControllerRenderProps, FieldValues, UseFormReturn } from "react-hook-form";

export type FormVariant = "SIGN_UP" | "SIGN_IN" | "FORGOT_PASSWORD" | "RESET_PASSWORD";

export type TSignInSchema = z.infer<typeof signInSchema>;

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export type TForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export type TResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

export type Field = ControllerRenderProps<FieldValues, string>;

export type Form = UseFormReturn<any, any, undefined>;

export type StoreTokenRequest = {
    access_token: string;
    refresh_token: string;
};
