"use client";

import { Google } from "../icons/google";
import { Button } from "../ui/button";

const GoogleAuth = () => {
    async function handleSignInGoogle() {
        try {
            console.log("Sign in with Google");
        } catch (error) {
            console.error("Error signing in with OAuth", error);
        }
    }

    return (
        <Button
            className="w-full gap-2 mb-7"
            variant={"outline"}
            type="submit"
            onClick={handleSignInGoogle}
        >
            <Google className="w-[.9rem] h-[.9rem] fill-foreground" />
            <span>Google</span>
        </Button>
    );
};

export default GoogleAuth;
