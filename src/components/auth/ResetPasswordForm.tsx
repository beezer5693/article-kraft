"use client";

import { useResetPasswordForm } from "@/hooks/useForm";
import { cn } from "@/lib/utils";
import {
  checkConfirmPasswordMatchesPassword,
  getFieldErrorStyle,
  isPasswordGreaterThanEightChars,
} from "@/lib/form-helpers";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { Collapsible, CollapsibleContent } from "../ui/collapsible";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import ErrorMessage from "./ErrorMessage";
import FormSubmissionButton from "./FormSubmissionButton";
import PasswordVisibilityToggle from "./PasswordVisibilityToggle";

type ResetPasswordFormProps = {
  code: string;
};

export default function ResetPasswordForm({ code }: ResetPasswordFormProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [isConfirmPasswordOpen, setIsConfirmPasswordOpen] = useState(false);

  const { form, onSubmit, isSubmitting } = useResetPasswordForm(code);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl className="mt-1">
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
                className="w-full"
              >
                <CollapsibleContent className="CollapsibleContent">
                  <div className="flex items-center gap-1 pt-1">
                    <HiCheckCircle
                      size={16}
                      className={cn("text-foreground/40 dark:text-foreground/30", {
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
              <FormLabel>Confirm password</FormLabel>
              <FormControl className="mt-1">
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
                className="w-full"
              >
                <CollapsibleContent className="CollapsibleContent">
                  <div className="flex items-center gap-1 pt-1">
                    <HiCheckCircle
                      size={16}
                      className={cn("text-foreground/40 dark:text-foreground/30", {
                        "text-green-600 dark:text-green-600":
                          checkConfirmPasswordMatchesPassword(form),
                      })}
                    />
                    <FormDescription
                      className={cn("text-foreground/40 dark:text-foreground/30 font-medium", {
                        "text-foreground/70 dark:text-foreground/80":
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
          isLoading={isSubmitting}
        />
      </form>
    </Form>
  );
}
