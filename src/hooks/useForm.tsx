import { getFormErrorsFromServerAction } from "@/lib/form-helpers";
import {
    forgotPasswordSchema,
    loginSchema,
    resetPasswordSchema,
    signUpSchema,
} from "@/lib/form-validators";
import {
    TForgotPasswordSchema,
    TLoginSchema,
    TResetPasswordSchema,
    TSignUpSchema,
} from "@/lib/types";
import { login, signup } from "@/server-actions/auth/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

// Signup form
export const useSignupForm = () => {
    const form = useForm<TSignUpSchema>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            full_name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<TSignUpSchema> = async (values) => {
        const result = await signup(values);

        if (result?.errors) {
            const { errors } = result;
            getFormErrorsFromServerAction(errors, form);
        }
    };

    return { form, onSubmit };
};

// Login form
export const useLoginForm = () => {
    const form = useForm<TLoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<TLoginSchema> = async (values) => {
        const result = await login(values);

        if (result?.errors) {
            const { errors } = result;
            getFormErrorsFromServerAction(errors, form);
        }
    };

    return { form, onSubmit };
};

export const useForgotPasswordForm = () => {
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
};

export const useResetPasswordForm = () => {
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
};
