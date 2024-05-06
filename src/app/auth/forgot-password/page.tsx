import AuthPageContainer from "@/components/auth/AuthPageContainer";
import BackToLoginButton from "@/components/auth/BackToLoginButton";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";
import FormMessage from "@/components/auth/FormMessage";
import { ApiResponseParams } from "@/types/types";

export default function ForgotPassword({ searchParams }: { searchParams: ApiResponseParams }) {
  const { status, message } = searchParams;

  return (
    <AuthPageContainer>
      <FormContainer>
        <FormHeader variant={"FORGOT_PASSWORD"} />
        {status && <FormMessage status={status} message={message} />}
        <ForgotPasswordForm />
        <BackToLoginButton />
      </FormContainer>
    </AuthPageContainer>
  );
}
