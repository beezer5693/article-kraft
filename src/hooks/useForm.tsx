import {
    forgotPasswordSchema,
    loginSchema,
    resetPasswordSchema,
    signUpSchema,
} from "@/lib/formValidators";
import {
    TForgotPasswordSchema,
    TLoginSchema,
    TResetPasswordSchema,
    TSignUpSchema,
} from "@/lib/types";
import { displayFormErrorsFromServerAction } from "@/lib/formHelpers";
import { loginAction } from "@/server-actions/auth/loginAction";
import { signupAction } from "@/server-actions/auth/signupAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

// Signup form
export function useSignupForm() {
    const form = useForm<TSignUpSchema>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            full_name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<TSignUpSchema> = async (values) => {
        const result = await signupAction(values);
        if (result?.errors) {
            const { errors } = result;
            displayFormErrorsFromServerAction(errors, form);
        }
    };

    return { form, onSubmit };
}

// Login form
export function useLoginForm() {
    const form = useForm<TLoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<TLoginSchema> = async (values) => {
        const result = await loginAction(values);
        if (result?.errors) {
            const { errors } = result;
            displayFormErrorsFromServerAction(errors, form);
        }
    };

    return { form, onSubmit };
}

export function useForgotPasswordForm() {
    const form = useForm<TForgotPasswordSchema>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit: SubmitHandler<TForgotPasswordSchema> = async (values) => {
        console.log("Forgot password form submitted", values);
    };

    return { form, onSubmit };
}

export function useResetPasswordForm() {
    const form = useForm<TResetPasswordSchema>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit: SubmitHandler<TResetPasswordSchema> = async (values: TResetPasswordSchema) => {
        console.log("Reset password form submitted", values);
    };

    return { form, onSubmit };
}
