"use client";

import { useResetPasswordForm } from "@/hooks/useResetPasswordForm";
import {
  checkConfirmPasswordMatchesPassword,
  getFieldErrorStyle,
  isPasswordGreaterThanEightChars,
} from "@/lib/formHelpers";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { Collapsible, CollapsibleContent } from "../ui/Collapsible";
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

type ResetPasswordFormProps = {
  code: string;
};

export default function ResetPasswordForm({ code }: ResetPasswordFormProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [isConfirmPasswordOpen, setIsConfirmPasswordOpen] = useState(false);

  const { form, onSubmit } = useResetPasswordForm(code);
  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl className="mt-0.5">
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
              <FormLabel>Re-enter password</FormLabel>
              <FormControl className="mt-0.5">
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
                className="mt-1.5 w-full"
              >
                <CollapsibleContent className="CollapsibleContent">
                  <div className="flex items-center gap-1">
                    <FaCheck
                      className={cn("h-3 w-3 text-foreground/30", {
                        "text-green-600":
                          checkConfirmPasswordMatchesPassword(form),
                      })}
                    />
                    <FormDescription
                      className={cn("font-medium text-foreground/40", {
                        "text-foreground/80":
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
          variant={FormVariant.RESET_PASSWORD}
          isSubmitting={isSubmitting}
        />
      </form>
    </Form>
  );
}
