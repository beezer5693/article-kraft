import AuthPageContainer from "@/components/auth/AuthPageContainer";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";
import FormMessage from "@/components/auth/FormMessage";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { ApiResponseParams } from "@/types/types";

type ResetPasswordProps = {
  searchParams: { status: "error" | "success"; message: string; code: string };
};

export default function ResetPassword({ searchParams }: ResetPasswordProps) {
  const { status, message, code } = searchParams;

  return (
    <AuthPageContainer>
      <FormContainer>
        <FormHeader variant={"RESET_PASSWORD"} />
        {status && <FormMessage status={status} message={message} />}
        <ResetPasswordForm code={code} />
      </FormContainer>
    </AuthPageContainer>
  );
}
