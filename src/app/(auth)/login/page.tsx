import AuthMessage from "@/components/auth/AuthMessage";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";
import LoginForm from "@/components/auth/LoginForm";
import ToggleAuthForm from "@/components/auth/ToggleAuthForm";
import { Logo } from "@/components/shared/logo";
import Divider from "@/components/ui/divider";

export default function Login({
    searchParams,
}: {
    searchParams: { error: string; message: string };
}) {
    const { error, message } = searchParams;

    return (
        <AuthPageContainer>
            {error && <AuthMessage error={error === "true"} message={message} />}
            <FormContainer>
                <Logo />
                <FormHeader variant={"LOG_IN"} />
                <LoginForm />
                <Divider />
                <ToggleAuthForm variant={"LOG_IN"} />
            </FormContainer>
        </AuthPageContainer>
    );
}
