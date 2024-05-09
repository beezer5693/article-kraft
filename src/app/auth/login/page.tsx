import AuthOptionsDivider from "@/components/auth/AuthOptionsDivider";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";
import GoogleAuth from "@/components/auth/GoogleAuth";
import LogInForm from "@/components/auth/LogInForm";
import ToggleAuthForm from "@/components/auth/ToggleAuthForm";

export default async function Login() {
  return (
    <AuthPageContainer>
      <FormContainer>
        <FormHeader variant={"LOG_IN"} />
        <LogInForm />
        <ToggleAuthForm variant={"LOG_IN"} />
        <AuthOptionsDivider />
        <GoogleAuth />
      </FormContainer>
    </AuthPageContainer>
  );
}
