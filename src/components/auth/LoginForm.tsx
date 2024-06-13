"use client";

import { useLoginForm } from "@/hooks/useLoginForm";
import { cn } from "@/lib/utils";
import { getFieldErrorStyle } from "@/lib/formHelpers";
import Link from "next/link";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/Form";
import { Input } from "../ui/Input";
import ErrorMessage from "./ErrorMessage";
import FormSubmissionButton from "./FormSubmissionButton";
import PasswordVisibilityToggle from "./PasswordVisibilityToggle";
import { FormVariant } from "@/lib/types";
import { Checkbox } from "../ui/checkbox";

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
              <div className="flex items-center justify-between pb-0.5">
                <FormLabel>Password</FormLabel>
                <Link
                  className="text-sm hover:underline"
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
        <FormField
          control={form.control}
          name="remember_me"
          render={({ field }) => (
            <FormItem className="mt-5 flex flex-row items-center">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="ml-1.5 leading-none">
                <FormLabel className="font-normal">Remember me</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormSubmissionButton
          className="mt-6"
          variant={FormVariant.LOG_IN}
          isSubmitting={isSubmitting}
        />
      </form>
    </Form>
  );
}
