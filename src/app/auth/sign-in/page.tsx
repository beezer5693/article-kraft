import AuthOptionsDivider from "@/components/auth/AuthOptionsDivider";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";
import GoogleAuth from "@/components/auth/GoogleAuth";
import LogInForm from "@/components/auth/LogInForm";
import ToggleAuthForm from "@/components/auth/ToggleAuthForm";
import Divider from "@/components/ui/divider";

function SignIn() {
    return (
        <AuthPageContainer>
            <FormContainer>
                <FormHeader variant={"SIGN_IN"} />
                <LogInForm />
                <AuthOptionsDivider />
                <GoogleAuth />
                <Divider />
                <ToggleAuthForm variant={"SIGN_IN"} />
            </FormContainer>
        </AuthPageContainer>
    );
}

export default SignIn;
