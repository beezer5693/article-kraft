import AuthMessage from "@/components/auth/AuthMessage";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";
import LoginForm from "@/components/auth/LoginForm";
import ToggleAuthForm from "@/components/auth/ToggleAuthForm";
import Logo from "@/components/shared/logo";
import Divider from "@/components/ui/divider";

const Login = ({ searchParams }: { searchParams: { error: string; message: string } }) => {
    const { error, message } = searchParams;

    return (
        <AuthPageContainer>
            {error && <AuthMessage error={error === "true"} message={message} />}
            <FormContainer>
                <Logo />
                <FormHeader variant={"SIGN_IN"} />
                <LoginForm />
                <Divider />
                <ToggleAuthForm variant={"SIGN_IN"} />
            </FormContainer>
        </AuthPageContainer>
    );
};

export default Login;
