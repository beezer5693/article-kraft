"use client";

import { useLoginForm } from "@/hooks/useForm";
import { cn } from "@/lib/utils";
import { getFieldErrorStyle } from "@/lib/formHelpers";
import Link from "next/link";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/Form";
import { Input } from "../ui/Input";
import ErrorMessage from "./ErrorMessage";
import FormSubmissionButton from "./FormSubmissionButton";
import PasswordVisibilityToggle from "./PasswordVisibilityToggle";

export default function LoginForm() {
    const [isVisible, setIsVisible] = useState(false);

    const { form, onSubmit } = useLoginForm();
    const { isSubmitting } = form.formState;

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl className="mt-0.5">
                                <Input
                                    className={cn(getFieldErrorStyle(form, field))}
                                    placeholder="you@example.com"
                                    disabled={isSubmitting}
                                    {...field}
                                />
                            </FormControl>
                            <ErrorMessage form={form} field={"email"} />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="mt-5">
                            <div className="flex items-center pb-0.5 justify-between">
                                <FormLabel>Password</FormLabel>
                                <Link
                                    className="hover:underline hover:text-foreground/70 text-sm"
                                    href={"/forgot-password"}
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                            <FormControl className="mt-0.5">
                                <div className="relative">
                                    <Input
                                        className={cn(getFieldErrorStyle(form, field))}
                                        disabled={isSubmitting}
                                        placeholder="••••••••"
                                        type={isVisible ? "text" : "password"}
                                        {...field}
                                    />
                                    <PasswordVisibilityToggle
                                        isVisible={isVisible}
                                        setIsVisible={setIsVisible}
                                    />
                                </div>
                            </FormControl>
                            <ErrorMessage form={form} field={"password"} />
                        </FormItem>
                    )}
                />
                <FormSubmissionButton
                    className="mt-6"
                    variant={"LOG_IN"}
                    isSubmitting={isSubmitting}
                />
            </form>
        </Form>
    );
}
