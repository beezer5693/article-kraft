import AuthMessage from "@/components/auth/AuthMessage";
import AuthPageLayout from "@/components/auth/AuthPageLayout";
import BackToLoginButton from "@/components/auth/BackToLoginButton";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";
import { Logo } from "@/components/shared/Logo";
import { FormVariant } from "@/lib/types";

export default function ForgotPassword({
  searchParams,
}: {
  searchParams: { success: string; message: string };
}) {
  const { success, message } = searchParams;

  return (
    <AuthPageLayout>
      {message && (
        <AuthMessage success={success === "true"} message={message} />
      )}
      <FormContainer>
        <Logo />
        <FormHeader variant={FormVariant.FORGOT_PASSWORD} />
        <ForgotPasswordForm />
        <BackToLoginButton />
      </FormContainer>
    </AuthPageLayout>
  );
}
