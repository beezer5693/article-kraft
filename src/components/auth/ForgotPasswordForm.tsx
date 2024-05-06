"use client";

import { useForgotPasswordForm } from "@/hooks/useForm";
import { cn } from "@/lib/utils";
import { fieldHasError } from "@/utils/form/form-utils";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import ErrorMessage from "./ErrorMessage";
import FormSubmissionButton from "./FormSubmissionButton";

export default function ForgotPasswordForm() {
  const { form, onSubmit, isLoading } = useForgotPasswordForm();

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
                  className={cn(fieldHasError(form, field))}
                  placeholder="you@example.com"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <ErrorMessage form={form} field={"email"} />
            </FormItem>
          )}
        />
        <FormSubmissionButton className="mt-5" variant={"FORGOT_PASSWORD"} isLoading={isLoading} />
      </form>
    </Form>
  );
}
