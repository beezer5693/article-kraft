"use client";

import { useForgotPasswordForm } from "@/hooks/useForm";
import { cn } from "@/lib/utils";
import { getFieldErrorStyle } from "@/lib/formHelpers";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/Form";
import { Input } from "../ui/Input";
import ErrorMessage from "./ErrorMessage";
import FormSubmissionButton from "./FormSubmissionButton";
import { FormVariant } from "@/lib/types";

export default function ForgotPasswordForm() {
  const { form, onSubmit } = useForgotPasswordForm();
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
        <FormSubmissionButton
          className={cn("mt-6")}
          variant={FormVariant.FORGOT_PASSWORD}
          isSubmitting={isSubmitting}
        />
      </form>
    </Form>
  );
}
