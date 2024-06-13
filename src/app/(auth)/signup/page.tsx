import AuthMessage from "@/components/auth/AuthMessage";
import AuthPageLayout from "@/components/auth/AuthPageLayout";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";
import SignUpForm from "@/components/auth/SignUpForm";
import ToggleAuthForm from "@/components/auth/ToggleAuthForm";
import { Logo } from "@/components/shared/Logo";
import { FormVariant } from "@/lib/types";

export default function SignUp({
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
        <FormHeader variant={FormVariant.SIGN_UP} />
        <SignUpForm />
        <ToggleAuthForm variant={FormVariant.SIGN_UP} />
      </FormContainer>
    </AuthPageLayout>
  );
}
