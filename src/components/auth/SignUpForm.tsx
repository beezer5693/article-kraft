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
import { HiCheckCircle } from "react-icons/hi";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import ErrorMessage from "./ErrorMessage";
import FormSubmissionButton from "./FormSubmissionButton";
import PasswordVisibilityToggle from "./PasswordVisibilityToggle";

export default function SignUpForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { form, onSubmit, isSubmitting } = useSignUpForm();

  form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl className="mt-1">
                <Input
                  className={cn(getFieldErrorStyle(form, field))}
                  placeholder="John Doe"
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
              <FormLabel>Email address</FormLabel>
              <FormControl className="mt-1">
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
              <FormControl className="mt-1">
                <div className="relative">
                  <Input
                    className={cn(getFieldErrorStyle(form, field))}
                    onFocus={() => setIsOpen(true)}
                    placeholder="••••••••"
                    disabled={isSubmitting}
                    type={isVisible ? "text" : "password"}
                    {...field}
                  />
                  <PasswordVisibilityToggle isVisible={isVisible} setIsVisible={setIsVisible} />
                </div>
              </FormControl>
              <ErrorMessage form={form} field={"password"} />
              <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full mt-1">
                <CollapsibleContent className="CollapsibleContent">
                  <div className="flex items-center gap-1 pt-1">
                    <HiCheckCircle
                      size={16}
                      className={cn("text-foreground/30 dark:text-foreground/30", {
                        "text-green-600 dark:text-green-600": isPasswordGreaterThanEightChars(form),
                      })}
                    />
                    <FormDescription
                      className={cn("text-foreground/40 dark:text-foreground/30 font-medium", {
                        "text-foreground/70 dark:text-foreground/80":
                          isPasswordGreaterThanEightChars(form),
                      })}
                    >
                      Must be at least 8 characters
                    </FormDescription>
                  </div>
                  <div className="flex items-center gap-1 pt-0.5">
                    <HiCheckCircle
                      size={16}
                      className={cn("text-foreground/30 dark:text-foreground/30", {
                        "text-green-600 dark:text-green-600":
                          isFieldDirty(form, "password") && !checkForEmailInPassword(form),
                      })}
                    />
                    <FormDescription
                      className={cn("text-foreground/40 dark:text-foreground/30 font-medium", {
                        "text-foreground/70 dark:text-foreground/80":
                          isFieldDirty(form, "password") && !checkForEmailInPassword(form),
                      })}
                    >
                      Does not contain your email address
                    </FormDescription>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </FormItem>
          )}
        />
        <FormSubmissionButton className="mt-6" variant="SIGN_UP" isLoading={isSubmitting} />
      </form>
    </Form>
  );
}
