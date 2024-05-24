import AuthMessage from "@/components/auth/AuthMessage";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

const ResetPassword = ({ searchParams }: { searchParams: { error: string; message: string } }) => {
    const { error, message } = searchParams;

    return (
        <AuthPageContainer>
            {error && <AuthMessage error={error === "true"} message={message} />}
            <FormContainer>
                <FormHeader variant={"RESET_PASSWORD"} />
                <ResetPasswordForm />
            </FormContainer>
        </AuthPageContainer>
    );
};

export default ResetPassword;
