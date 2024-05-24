"use client";

import { useResetPasswordForm } from "@/hooks/useForm";
import {
    checkConfirmPasswordMatchesPassword,
    getFieldErrorStyle,
    isPasswordGreaterThanEightChars,
} from "@/lib/form-helpers";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { Collapsible, CollapsibleContent } from "../ui/collapsible";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import ErrorMessage from "./ErrorMessage";
import FormSubmissionButton from "./FormSubmissionButton";
import PasswordVisibilityToggle from "./PasswordVisibilityToggle";

const ResetPasswordForm = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [isPasswordOpen, setIsPasswordOpen] = useState(false);
    const [isConfirmPasswordOpen, setIsConfirmPasswordOpen] = useState(false);

    const { form, onSubmit } = useResetPasswordForm();
    const { isSubmitting } = form.formState;

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl className="mt-0.5">
                                <div className="relative">
                                    <Input
                                        className={cn(getFieldErrorStyle(form, field))}
                                        onFocus={() => setIsPasswordOpen(true)}
                                        disabled={isSubmitting}
                                        placeholder="••••••••"
                                        type={isPasswordVisible ? "text" : "password"}
                                        {...field}
                                    />
                                    <PasswordVisibilityToggle
                                        isVisible={isPasswordVisible}
                                        setIsVisible={setIsPasswordVisible}
                                    />
                                </div>
                            </FormControl>
                            <ErrorMessage form={form} field={"password"} />
                            <Collapsible
                                open={isPasswordOpen}
                                onOpenChange={setIsPasswordOpen}
                                className="w-full mt-1.5"
                            >
                                <CollapsibleContent className="CollapsibleContent">
                                    <div className="flex items-center gap-1">
                                        <FaCheck
                                            className={cn("text-foreground/30 h-3 w-3", {
                                                "text-green-600":
                                                    isPasswordGreaterThanEightChars(form),
                                            })}
                                        />
                                        <FormDescription
                                            className={cn("text-foreground/40 font-medium", {
                                                "text-foreground/65":
                                                    isPasswordGreaterThanEightChars(form),
                                            })}
                                        >
                                            Must be at least 8 characters
                                        </FormDescription>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem className="mt-4">
                            <FormLabel>Re-enter password</FormLabel>
                            <FormControl className="mt-0.5">
                                <div className="relative">
                                    <Input
                                        className={cn(getFieldErrorStyle(form, field))}
                                        onFocus={() => setIsConfirmPasswordOpen(true)}
                                        placeholder="••••••••"
                                        disabled={isSubmitting}
                                        type={isConfirmPasswordVisible ? "text" : "password"}
                                        {...field}
                                    />
                                    <PasswordVisibilityToggle
                                        isVisible={isConfirmPasswordVisible}
                                        setIsVisible={setIsConfirmPasswordVisible}
                                    />
                                </div>
                            </FormControl>
                            <ErrorMessage form={form} field={"confirmPassword"} />
                            <Collapsible
                                open={isConfirmPasswordOpen}
                                onOpenChange={setIsConfirmPasswordOpen}
                                className="w-full mt-1.5"
                            >
                                <CollapsibleContent className="CollapsibleContent">
                                    <div className="flex items-center gap-1">
                                        <FaCheck
                                            className={cn("text-foreground/30 h-3 w-3", {
                                                "text-green-600":
                                                    checkConfirmPasswordMatchesPassword(form),
                                            })}
                                        />
                                        <FormDescription
                                            className={cn("text-foreground/40 font-medium", {
                                                "text-foreground/65":
                                                    checkConfirmPasswordMatchesPassword(form),
                                            })}
                                        >
                                            Must match password
                                        </FormDescription>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        </FormItem>
                    )}
                />
                <FormSubmissionButton
                    className="mt-6"
                    variant={"RESET_PASSWORD"}
                    isSubmitting={isSubmitting}
                />
            </form>
        </Form>
    );
};

export default ResetPasswordForm;
