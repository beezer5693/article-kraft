import AuthMessage from "@/components/auth/AuthMessage";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { Logo } from "@/components/shared/Logo";

export default function ResetPassword({
    searchParams,
}: {
    searchParams: { error: string; message: string; email: string };
}) {
    const { error, message, email } = searchParams;

    return (
        <AuthPageContainer>
            {error && <AuthMessage error={error === "true"} message={message} />}
            <FormContainer>
                <Logo />
                <FormHeader variant={"RESET_PASSWORD"} />
                <ResetPasswordForm email={email} />
            </FormContainer>
        </AuthPageContainer>
    );
}
