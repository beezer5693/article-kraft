import AuthPageContainer from "@/components/auth/AuthPageContainer";
import BackToLoginButton from "@/components/auth/BackToLoginButton";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";

function ForgotPassword() {
    return (
        <AuthPageContainer>
            <FormContainer>
                <FormHeader variant={"FORGOT_PASSWORD"} />
                <ForgotPasswordForm />
                <BackToLoginButton />
            </FormContainer>
        </AuthPageContainer>
    );
}

export default ForgotPassword;
