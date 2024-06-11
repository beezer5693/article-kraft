"use client";

import { Collapsible, CollapsibleContent } from "@/components/ui/Collapsible";
import { useSignupForm } from "@/hooks/useForm";
import {
  applyFullNameFormatting,
  checkForEmailInPassword,
  getFieldErrorStyle,
  isFieldDirty,
  isPasswordGreaterThanEightChars,
} from "@/lib/formHelpers";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/Form";
import { Input } from "../ui/Input";
import ErrorMessage from "./ErrorMessage";
import FormSubmissionButton from "./FormSubmissionButton";
import PasswordVisibilityToggle from "./PasswordVisibilityToggle";
import { FormVariant } from "@/lib/types";

export default function SignUpForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { form, onSubmit } = useSignupForm();
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
                className="mt-1.5 w-full"
              >
                <CollapsibleContent className="CollapsibleContent">
                  <div className="flex items-center gap-1">
                    <FaCheck
                      className={cn("h-3 w-3 text-foreground/30", {
                        "text-green-600": isPasswordGreaterThanEightChars(form),
                      })}
                    />
                    <FormDescription
                      className={cn("font-medium text-foreground/40", {
                        "text-foreground/80":
                          isPasswordGreaterThanEightChars(form),
                      })}
                    >
                      Must be at least 8 characters
                    </FormDescription>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCheck
                      className={cn("h-3 w-3 text-foreground/30", {
                        "text-green-600":
                          isFieldDirty(form, "password") &&
                          !checkForEmailInPassword(form),
                      })}
                    />
                    <FormDescription
                      className={cn("font-medium text-foreground/40", {
                        "text-foreground/80":
                          isFieldDirty(form, "password") &&
                          !checkForEmailInPassword(form),
                      })}
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
          className="mt-6"
          variant={FormVariant.SIGN_UP}
          isSubmitting={isSubmitting}
        />
      </form>
    </Form>
  );
}
