"use client";

import { signInWithOAuthProvider } from "@/server/actions/actions";
import React from "react";
import { Button } from "../ui/button";
import { FaGoogle } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function GoogleAuth() {
  async function handleSignInGoogle() {
    try {
      await signInWithOAuthProvider("google");
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
