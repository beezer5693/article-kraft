"use client";

import { useLoginForm } from "@/hooks/useForm";
import { cn } from "@/lib/utils";
import { fieldHasError } from "@/utils/form/form-utils";
import Link from "next/link";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import ErrorMessage from "./ErrorMessage";
import FormSubmissionButton from "./FormSubmissionButton";
import PasswordVisibilityToggle from "./PasswordVisibilityToggle";

export default function LogInForm() {
  const [isVisible, setIsVisible] = useState(false);
  const { form, onSubmit, isLoading } = useLoginForm();

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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mt-5">
              <div className="flex items-center pb-0.5 justify-between">
                <FormLabel>Password</FormLabel>
                <Link
                  className="text-sm hover:underline text-foreground font-medium tracking-tight"
                  href={"/auth/forgot-password"}
                >
                  Forgot Password?
                </Link>
              </div>
              <FormControl className="mt-0.5">
                <div className="relative">
                  <Input
                    className={cn(fieldHasError(form, field))}
                    disabled={isLoading}
                    placeholder="••••••••"
                    type={isVisible ? "text" : "password"}
                    {...field}
                  />
                  <PasswordVisibilityToggle isVisible={isVisible} setIsVisible={setIsVisible} />
                </div>
              </FormControl>
              <ErrorMessage form={form} field={"password"} />
            </FormItem>
          )}
        />
        <FormSubmissionButton className="mt-6" variant={"LOG_IN"} isLoading={isLoading} />
      </form>
    </Form>
  );
}
