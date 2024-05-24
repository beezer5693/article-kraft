import AuthMessage from "@/components/auth/AuthMessage";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import BackToLoginButton from "@/components/auth/BackToLoginButton";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";

const ForgotPassword = ({ searchParams }: { searchParams: { error: string; message: string } }) => {
    const { error, message } = searchParams;

    return (
        <AuthPageContainer>
            {error && <AuthMessage error={error === "true"} message={message} />}
            <FormContainer>
                <FormHeader variant={"FORGOT_PASSWORD"} />
                <ForgotPasswordForm />
                <BackToLoginButton />
            </FormContainer>
        </AuthPageContainer>
    );
};

export default ForgotPassword;
