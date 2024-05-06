import { ControllerRenderProps, FieldValues, UseFormReturn } from "react-hook-form";

type Field = ControllerRenderProps<FieldValues, string>;

export function fieldHasError(form: any, field: Field): string {
  const fieldState = form.getFieldState(field.name) || {};
  const fieldError = fieldState.error || fieldState.invalid;
  return fieldError && "border-destructive focus:border-destructive hover:border-destructive";
}

export function checkForEmailInPassword(form: UseFormReturn<any, any, undefined>): boolean {
  const email = form.watch("email").toLowerCase();
  const password = form.watch("password").toLowerCase();
  const textBeforeAtSign = email?.split("@")[0];
  return password?.includes(textBeforeAtSign);
}

export function isPasswordGreaterThanEightChars(form: UseFormReturn<any, any, undefined>): boolean {
  return form.watch("password")?.length >= 8;
}

export function isFieldDirty(form: UseFormReturn<any, any, undefined>, name: string): boolean {
  return form.getFieldState(name).isDirty;
}

export function checkConfirmPasswordMatchesPassword(
  form: UseFormReturn<any, any, undefined>
): boolean {
  return (
    form.watch("password") === form.watch("confirmPassword") &&
    form.getFieldState("confirmPassword").isDirty
  );
}
