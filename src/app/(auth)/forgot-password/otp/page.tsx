import AuthMessage from "@/components/auth/AuthMessage";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";
import OTPForm from "@/components/auth/OTPForm";
import { Logo } from "@/components/shared/Logo";

export default function OTP({
    searchParams,
}: {
    searchParams: { email: string; error: string; message: string };
}) {
    const { email, error, message } = searchParams;

    return (
        <AuthPageContainer>
            {error && <AuthMessage error={error === "true"} message={message} />}
            <FormContainer>
                <Logo />
                <FormHeader variant={"OTP"} />
                <OTPForm email={email} />
            </FormContainer>
        </AuthPageContainer>
    );
}
