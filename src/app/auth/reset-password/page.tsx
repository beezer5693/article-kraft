import AuthPageContainer from "@/components/auth/AuthPageContainer";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

type ResetPasswordProps = {
    searchParams: { code: string };
};

function ResetPassword({ searchParams }: ResetPasswordProps) {
    const { code } = searchParams;

    return (
        <AuthPageContainer>
            <FormContainer>
                <FormHeader variant={"RESET_PASSWORD"} />
                <ResetPasswordForm code={code} />
            </FormContainer>
        </AuthPageContainer>
    );
}

export default ResetPassword;
