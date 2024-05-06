import Link from "next/link";
import React from "react";

export default function BackToLoginButton() {
  return (
    <Link
      className="mx-auto mt-4 hover:underline font-medium text-sm text-primary dark:text-primary-lighter"
      href={"/auth/login"}
    >
      Back to Log in
    </Link>
  );
}
