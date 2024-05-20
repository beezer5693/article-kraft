"use client";

import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { useSignUpForm } from "@/hooks/useForm";
import { cn } from "@/lib/utils";
import {
    applyFullNameFormatting,
    checkForEmailInPassword,
    getFieldErrorStyle,
    isFieldDirty,
    isPasswordGreaterThanEightChars,
} from "@/lib/form-helpers";
import { useState } from "react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import ErrorMessage from "./ErrorMessage";
import FormSubmissionButton from "./FormSubmissionButton";
import PasswordVisibilityToggle from "./PasswordVisibilityToggle";
import { PiCheckFatFill } from "react-icons/pi";

const SignUpForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const { form, onSubmit } = useSignUpForm();
    const { isSubmitting } = form.formState;

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your name</FormLabel>
                            <FormControl className="mt-0.5">
                                <Input
                                    className={cn(getFieldErrorStyle(form, field))}
                                    placeholder="First and last name"
                                    disabled={isSubmitting}
                                    {...field}
                                    onChange={(e) => applyFullNameFormatting(e, field)}
                                />
                            </FormControl>
                            <ErrorMessage form={form} field={"full_name"} />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="mt-4">
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
                        <FormItem className="mt-4">
                            <FormLabel>Password</FormLabel>
                            <FormControl className="mt-0.5">
                                <div className="relative">
                                    <Input
                                        className={cn(getFieldErrorStyle(form, field))}
                                        onFocus={() => setIsOpen(true)}
                                        placeholder="At least 8 characters"
                                        disabled={isSubmitting}
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
                            <Collapsible
                                open={isOpen}
                                onOpenChange={setIsOpen}
                                className="w-full mt-1.5"
                            >
                                <CollapsibleContent className="CollapsibleContent">
                                    <div className="flex items-center gap-1">
                                        <PiCheckFatFill
                                            className={cn("text-foreground/30 h-[11px] w-[11px]", {
                                                "text-green-600":
                                                    isPasswordGreaterThanEightChars(form),
                                            })}
                                        />
                                        <FormDescription
                                            className={cn(
                                                "text-foreground/40 dark:text-foreground/30 font-medium",
                                                {
                                                    "text-foreground/65":
                                                        isPasswordGreaterThanEightChars(form),
                                                }
                                            )}
                                        >
                                            Must be at least 8 characters
                                        </FormDescription>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <PiCheckFatFill
                                            className={cn("text-foreground/30 h-[11px] w-[11px]", {
                                                "text-green-600":
                                                    isFieldDirty(form, "password") &&
                                                    !checkForEmailInPassword(form),
                                            })}
                                        />
                                        <FormDescription
                                            className={cn(
                                                "text-foreground/40 dark:text-foreground/30 font-medium",
                                                {
                                                    "text-foreground/65":
                                                        isFieldDirty(form, "password") &&
                                                        !checkForEmailInPassword(form),
                                                }
                                            )}
                                        >
                                            Does not contain your email
                                        </FormDescription>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        </FormItem>
                    )}
                />
                <FormSubmissionButton
                    className="mt-4"
                    variant="SIGN_UP"
                    isSubmitting={isSubmitting}
                />
            </form>
        </Form>
    );
};

export default SignUpForm;
