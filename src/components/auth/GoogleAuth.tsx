"use client";

import { Google } from "../icons/Google";
import { Button } from "../ui/Button";

export default function GoogleAuth() {
  const handleSignInGoogle = async () => {
    try {
      console.log("Sign in with Google");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      className="mb-7 w-full gap-2"
      variant={"outline"}
      type="submit"
      onClick={handleSignInGoogle}
    >
      <Google className="h-[.9rem] w-[.9rem] fill-foreground" />
      <span>Continue with Google</span>
    </Button>
  );
}
