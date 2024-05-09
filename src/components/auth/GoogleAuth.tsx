"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

export default function GoogleAuth() {
  async function handleSignInGoogle() {
    try {
      console.log("Sign in with Google");
    } catch (error) {
      console.error("Error signing in with OAuth", error);
    }
  }

  return (
    <Button className="w-full gap-2" variant={"outline"} type="submit" onClick={handleSignInGoogle}>
      <FcGoogle size={17} />
      <span>Continue with Google</span>
    </Button>
  );
}
