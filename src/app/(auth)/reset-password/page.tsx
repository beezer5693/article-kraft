import AuthMessage from "@/components/auth/AuthMessage";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

const ResetPassword = ({
    searchParams,
}: {
    searchParams: { code: string; error: string; message: string };
}) => {
    const { code, error, message } = searchParams;

    console.log(code);

    return (
        <AuthPageContainer>
            {error && <AuthMessage error={error === "true"} message={message} />}
            <FormContainer>
                <FormHeader variant={"RESET_PASSWORD"} />
                <ResetPasswordForm code={code} />
            </FormContainer>
        </AuthPageContainer>
    );
};

export default ResetPassword;
