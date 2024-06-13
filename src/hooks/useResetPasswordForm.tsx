import { displayFormErrorsFromServerAction } from "@/lib/formHelpers";
import { resetPasswordSchema } from "@/lib/formValidators";
import { TResetPasswordSchema } from "@/lib/types";
import { resetPasswordAction } from "@/server-actions/auth/resetPasswordAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

export function useResetPasswordForm(code: string) {
  const form = useForm<TResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<TResetPasswordSchema> = async (
    values: TResetPasswordSchema,
  ) => {
    const result = await resetPasswordAction(code, values);
    if (result?.errors) {
      const { errors } = result;
      displayFormErrorsFromServerAction(errors, form);
    }
  };

  return { form, onSubmit };
}
