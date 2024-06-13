import { displayFormErrorsFromServerAction } from "@/lib/formHelpers";
import { loginSchema } from "@/lib/formValidators";
import { TLoginSchema } from "@/lib/types";
import { loginAction } from "@/server-actions/auth/loginAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

export function useLoginForm() {
  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember_me: false,
    },
  });

  const onSubmit: SubmitHandler<TLoginSchema> = async (values) => {
    const result = await loginAction(values);
    if (result?.errors) {
      const { errors } = result;
      displayFormErrorsFromServerAction(errors, form);
    }
  };

  return { form, onSubmit };
}
