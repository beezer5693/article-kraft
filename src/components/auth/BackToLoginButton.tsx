import Link from "next/link";
import React from "react";
import { IoMdArrowDropleft } from "react-icons/io";

const BackToLoginButton = () => {
    return (
        <Link
            className="mx-auto mt-4 inline-flex items-center hover:underline text-sm text-link hover:text-orange-600"
            href={"/auth/sign-in"}
        >
            <IoMdArrowDropleft className="h-3 w-3 mt-0.5" />
            <span>Back to Sign in</span>
        </Link>
    );
};

export default BackToLoginButton;
