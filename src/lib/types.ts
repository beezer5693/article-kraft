import { z } from "zod";
import {
    signUpSchema,
    forgotPasswordSchema,
    resetPasswordSchema,
    loginSchema,
} from "./formValidators";
import { ControllerRenderProps, FieldValues, UseFormReturn } from "react-hook-form";

export type FormVariant = "SIGN_UP" | "LOG_IN" | "FORGOT_PASSWORD" | "RESET_PASSWORD";

export type TLoginSchema = z.infer<typeof loginSchema>;

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export type TForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export type TResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

export type Field = ControllerRenderProps<FieldValues, string>;

export type Form = UseFormReturn<any, any, undefined>;

export type StoreTokenRequest = {
    accessToken: string;
    refreshToken: string;
};
