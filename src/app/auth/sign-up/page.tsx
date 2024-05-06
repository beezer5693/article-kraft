import AuthOptionsDivider from "@/components/auth/AuthOptionsDivider";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";
import FormMessage from "@/components/auth/FormMessage";
import GoogleAuth from "@/components/auth/GoogleAuth";
import SignUpForm from "@/components/auth/SignUpForm";
import ToggleAuthForm from "@/components/auth/ToggleAuthForm";
import { ApiResponseParams } from "@/types/types";

const SignUp = ({ searchParams }: { searchParams: ApiResponseParams }) => {
  const { status, message } = searchParams;

  return (
    <AuthPageContainer>
      <FormContainer>
        <FormHeader variant={"SIGN_UP"} />
        {status && <FormMessage status={status} message={message} />}
        <SignUpForm />
        <ToggleAuthForm variant={"SIGN_UP"} />
        <AuthOptionsDivider />
        <GoogleAuth />
      </FormContainer>
    </AuthPageContainer>
  );
};

export default SignUp;
