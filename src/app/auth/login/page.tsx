import AuthOptionsDivider from "@/components/auth/AuthOptionsDivider";
import AuthPageContainer from "@/components/auth/AuthPageContainer";
import FormContainer from "@/components/auth/FormContainer";
import FormHeader from "@/components/auth/FormHeader";
import FormMessage from "@/components/auth/FormMessage";
import GoogleAuth from "@/components/auth/GoogleAuth";
import LogInForm from "@/components/auth/LogInForm";
import ToggleAuthForm from "@/components/auth/ToggleAuthForm";
import { ApiResponseParams } from "@/types/types";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Login({ searchParams }: { searchParams: ApiResponseParams }) {
  const { status, message } = searchParams;

  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (!error && data.user) {
    redirect("/");
  }

  return (
    <AuthPageContainer>
      <FormContainer>
        <FormHeader variant={"LOG_IN"} />
        {status && <FormMessage status={status} message={message} />}
        <LogInForm />
        <ToggleAuthForm variant={"LOG_IN"} />
        <AuthOptionsDivider />
        <GoogleAuth />
      </FormContainer>
    </AuthPageContainer>
  );
}
