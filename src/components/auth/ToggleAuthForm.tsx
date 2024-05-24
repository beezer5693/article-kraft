import React from "react";
import { FormVariant } from "@/lib/types";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

type ToggleAuthFormProps = {
    variant: FormVariant;
};

const ToggleAuthForm = ({ variant }: ToggleAuthFormProps) => {
    return (
        <div className="relative">
            {variant === "SIGN_UP" ? (
                <p className="text-foreground text-center text-sm">
                    Already have an account?{" "}
                    <Link
                        className="hover:underline hover:text-[#c45500] text-link inline-flex items-center"
                        href={"/login"}
                    >
                        <span>Sign in</span>
                        <IoMdArrowDropright className="h-3 w-3 mt-0.5" />
                    </Link>
                </p>
            ) : (
                <p className="text-foreground text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link
                        className="hover:underline hover:text-[#c45500] text-link inline-flex items-center"
                        href={"/signup"}
                    >
                        <span>Sign up</span>
                        <IoMdArrowDropright className="h-3 w-3 mt-0.5" />
                    </Link>
                </p>
            )}
        </div>
    );
};

export default ToggleAuthForm;
