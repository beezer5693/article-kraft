import AuthMessage from "@/components/auth/AuthMessage";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";
import SignUpForm from "@/components/auth/SignUpForm";
import ToggleAuthForm from "@/components/auth/ToggleAuthForm";
import Logo from "@/components/shared/logo";
import Divider from "@/components/ui/divider";

const SignUp = ({ searchParams }: { searchParams: { error: string; message: string } }) => {
    const { error, message } = searchParams;

    return (
        <AuthPageContainer>
            {error && <AuthMessage error={error === "true"} message={message} />}
            <FormContainer>
                <Logo />
                <FormHeader variant={"SIGN_UP"} />
                <SignUpForm />
                <Divider />
                <ToggleAuthForm variant={"SIGN_UP"} />
            </FormContainer>
        </AuthPageContainer>
    );
};

export default SignUp;
