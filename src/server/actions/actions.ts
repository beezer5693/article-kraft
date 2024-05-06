"use server";

import {
  ForgotPasswordFormSchema,
  LoginFormSchema,
  ResetPasswordFormSchema,
  SignupFormSchema,
} from "@/lib/auth-form-validator";
import { createClient } from "@/utils/supabase/server";
import { Provider } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signup(values: SignupFormSchema) {
  const supabase = createClient();

  const { email, password } = values;

  const { error } = await supabase.auth.signUp({
    email: email.trim(),
    password: password.trim(),
  });

  if (error) {
    return redirect(`/auth/sign-up?status=error&message=${error.message}`);
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function login(values: LoginFormSchema) {
  const supabase = createClient();

  const { email, password } = values;

  const { error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password: password.trim(),
  });

  if (error) {
    return redirect(`/auth/login?status=error&message=${error.message}`);
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signInWithOAuthProvider(provider: Provider) {
  const supabase = createClient();

  const origin = headers().get("origin");

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  if (data.url) {
    redirect(data.url);
  }
}

export async function forgotPassword(values: ForgotPasswordFormSchema) {
  const supabase = createClient();

  const origin = headers().get("origin");

  const { email } = values;

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/reset-password`,
  });

  if (error) {
    return redirect(`/auth/forgot-password?status=error&message=${error.message}`);
  }

  revalidatePath("/auth/forgot-password", "layout");
  redirect(
    "/auth/forgot-password?status=success&message=A password reset link has been sent to your email. Please check your inbox."
  );
}

export async function resetPassword(values: ResetPasswordFormSchema, code: string) {
  const supabase = createClient();

  const exchangeError = await exchangeCodeForSession(code);

  if (exchangeError) {
    return redirect(
      `/auth/reset-password?status=error&message=Uh oh! Something went wrong. Please try again.`
    );
  }

  const { password } = values;

  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    return redirect(`/auth/reset-password?status=error&message=${error.message}`);
  }

  await signOut();

  revalidatePath("/auth/login", "layout");
  redirect(
    "/auth/login?status=success&message=Your password has been successfully reset. Please log in to continue."
  );
}

export async function exchangeCodeForSession(code: string) {
  const supabase = createClient();

  const basePath = headers().get("referer");

  try {
    await supabase.auth.exchangeCodeForSession(code);
  } catch (error: any) {
    return error;
  }
}

export async function signOut() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}
