import { FormVariant } from "@/lib/types";
import Link from "next/link";
import React from "react";

type ToggleAuthFormProps = {
  variant: FormVariant;
};

export default function ToggleAuthForm({ variant }: ToggleAuthFormProps) {
  return (
    <div className="mt-4">
      {variant === "SIGN_UP" ? (
        <p className="text-foreground text-center text-sm">
          Already have an account?{" "}
          <Link className="hover:underline text-primary font-medium" href={"/auth/login"}>
            Log in
          </Link>
        </p>
      ) : (
        <p className="text-foreground text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link className="hover:underline text-primary font-medium" href={"/auth/sign-up"}>
            Sign up
          </Link>
        </p>
      )}
    </div>
  );
}
