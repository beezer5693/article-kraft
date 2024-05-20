"use client";

import { useForgotPasswordForm } from "@/hooks/useForm";
import { cn } from "@/lib/utils";
import { getFieldErrorStyle } from "@/lib/form-helpers";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import ErrorMessage from "./ErrorMessage";
import FormSubmissionButton from "./FormSubmissionButton";

const ForgotPasswordForm = () => {
    const { form, onSubmit, isSuccess } = useForgotPasswordForm();
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
                                    disabled={isSubmitting || isSuccess}
                                    {...field}
                                />
                            </FormControl>
                            <ErrorMessage form={form} field={"email"} />
                        </FormItem>
                    )}
                />
                <FormSubmissionButton
                    className={cn("mt-5", {
                        "opacity-50 pointer-events-none": isSuccess,
                    })}
                    variant={"FORGOT_PASSWORD"}
                    isSubmitting={isSubmitting}
                />
            </form>
        </Form>
    );
};

export default ForgotPasswordForm;
