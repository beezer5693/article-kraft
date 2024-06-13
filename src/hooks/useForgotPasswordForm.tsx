import { displayFormErrorsFromServerAction } from "@/lib/formHelpers";
import { forgotPasswordSchema } from "@/lib/formValidators";
import { TForgotPasswordSchema } from "@/lib/types";
import { forgotPasswordAction } from "@/server-actions/auth/forgotPasswordAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

export function useForgotPasswordForm() {
  const form = useForm<TForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<TForgotPasswordSchema> = async (values) => {
    const result = await forgotPasswordAction(values);
    if (result?.errors) {
      const { errors } = result;
      displayFormErrorsFromServerAction(errors, form);
    }
  };

  return { form, onSubmit };
}
