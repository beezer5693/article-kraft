"use client";

import { useForgotPasswordForm } from "@/hooks/useForm";
import { cn } from "@/lib/utils";
import { getFieldErrorStyle } from "@/lib/form-helpers";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import ErrorMessage from "./ErrorMessage";
import FormSubmissionButton from "./FormSubmissionButton";

export default function ForgotPasswordForm() {
  const { form, onSubmit, isSubmitting, isSuccess } = useForgotPasswordForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl className="mt-1">
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
          isLoading={isSubmitting}
        />
      </form>
    </Form>
  );
}
