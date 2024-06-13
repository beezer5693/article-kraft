import AuthMessage from "@/components/auth/AuthMessage";
import AuthPageLayout from "@/components/auth/AuthPageLayout";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { Logo } from "@/components/shared/Logo";
import { FormVariant } from "@/lib/types";

export default function ResetPassword({
  searchParams,
}: {
  searchParams: { success: string; message: string; code: string };
}) {
  const { success, message, code } = searchParams;

  return (
    <AuthPageLayout>
      {message && (
        <AuthMessage success={success === "true"} message={message} />
      )}
      <FormContainer>
        <Logo />
        <FormHeader variant={FormVariant.RESET_PASSWORD} />
        <ResetPasswordForm code={code} />
      </FormContainer>
    </AuthPageLayout>
  );
}
