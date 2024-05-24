"use client";

import { Google } from "../icons/google";
import { Button } from "../ui/button";

const GoogleAuth = () => {
    const handleSignInGoogle = async () => {
        try {
            console.log("Sign in with Google");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Button
            className="w-full gap-2 mb-7"
            variant={"outline"}
            type="submit"
            onClick={handleSignInGoogle}
        >
            <Google className="w-[.9rem] h-[.9rem] fill-foreground" />
            <span>Continue with Google</span>
        </Button>
    );
};

export default GoogleAuth;
