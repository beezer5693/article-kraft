import {
    forgotPasswordSchema,
    signInSchema,
    resetPasswordSchema,
    signUpSchema,
} from "@/lib/form-validators";
import { useToast } from "@/hooks/useToast";
import { signIn, signUp } from "@/server-actions/auth/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    TSignUpSchema,
    TSignInSchema,
    TForgotPasswordSchema,
    TResetPasswordSchema,
} from "@/lib/types";

// Signup form
export const useSignUpForm = () => {
    const { getToast } = useToast();

    const form = useForm<TSignUpSchema>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            full_name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: TSignUpSchema) => {
        try {
            const result = await signUp(values);

            if (result?.errors) {
                const { errors } = result;
                if (errors.email) {
                    form.setError("email", {
                        type: "server",
                        message: `${errors.email._errors[0]}`,
                    });
                }
                if (errors.password) {
                    form.setError("password", {
                        type: "server",
                        message: `${errors.password._errors[0]}`,
                    });
                }
            }
        } catch (error: any) {
            getToast("error", error.message);
        }
    };

    return { form, onSubmit };
};

// Login form
export const useLoginForm = () => {
    const { getToast } = useToast();

    const form = useForm<TSignInSchema>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: TSignInSchema) => {
        try {
            const result = await signIn(values);

            if (result?.errors) {
                const { errors } = result;
                if (errors.email) {
                    form.setError("email", {
                        type: "server",
                        message: `${errors.email._errors[0]}`,
                    });
                }
                if (errors.password) {
                    form.setError("password", {
                        type: "server",
                        message: `${errors.password._errors[0]}`,
                    });
                }
            }
        } catch (error: any) {
            getToast("error", error.message);
        }
    };

    return { form, onSubmit };
};

// Forgot password form
export const useForgotPasswordForm = () => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const form = useForm<TForgotPasswordSchema>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (values: TForgotPasswordSchema) => {
        try {
            console.log(values);
            setIsSuccess(true);
            form.reset();
        } catch (error) {
            console.log(error);
        }
    };

    return { form, isSuccess, onSubmit };
};

// Reset password form
export const useResetPasswordForm = (code: string) => {
    const form = useForm<TResetPasswordSchema>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (values: TResetPasswordSchema) => {
        try {
            console.log(values);
        } catch (error) {
            console.log(error);
        }
    };

    return { form, onSubmit };
};
