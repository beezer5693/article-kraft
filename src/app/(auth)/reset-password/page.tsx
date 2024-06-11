import AuthMessage from "@/components/auth/AuthMessage";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { Logo } from "@/components/shared/Logo";
import { FormVariant } from "@/lib/types";

export default function ResetPassword({
  searchParams,
}: {
  searchParams: { error: string; message: string; code: string };
}) {
  const { error, message, code } = searchParams;

  return (
    <AuthPageContainer>
      {error && <AuthMessage error={error === "true"} message={message} />}
      <FormContainer>
        <Logo />
        <FormHeader variant={FormVariant.RESET_PASSWORD} />
        <ResetPasswordForm code={code} />
      </FormContainer>
    </AuthPageContainer>
  );
}
