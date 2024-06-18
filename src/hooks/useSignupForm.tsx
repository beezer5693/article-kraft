import { displayFormErrorsFromServerAction } from "@/lib/formHelpers";
import { signUpSchema } from "@/lib/formValidators";
import { TSignUpSchema } from "@/lib/types";
import { signupAction } from "@/server-actions/auth/signupAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

export function useSignupForm() {
  const form = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<TSignUpSchema> = async (values) => {
    const result = await signupAction(values);
    if (result?.errors) {
      const { errors } = result;
      displayFormErrorsFromServerAction(errors, form);
    }
  };

  return { form, onSubmit };
}
