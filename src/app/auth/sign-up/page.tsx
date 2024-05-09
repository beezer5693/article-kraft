import AuthOptionsDivider from "@/components/auth/AuthOptionsDivider";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";
import GoogleAuth from "@/components/auth/GoogleAuth";
import SignUpForm from "@/components/auth/SignUpForm";
import ToggleAuthForm from "@/components/auth/ToggleAuthForm";

export default async function SignUp() {
  return (
    <AuthPageContainer>
      <FormContainer>
        <FormHeader variant={"SIGN_UP"} />
        <SignUpForm />
        <ToggleAuthForm variant={"SIGN_UP"} />
        <AuthOptionsDivider />
        <GoogleAuth />
      </FormContainer>
    </AuthPageContainer>
  );
}
