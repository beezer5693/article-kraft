import { FormVariant } from "@/lib/types";
import Link from "next/link";

type ToggleAuthFormProps = {
    variant: FormVariant;
};

export default function ToggleAuthForm({ variant }: ToggleAuthFormProps) {
    return (
        <div className="relative">
            {variant === "SIGN_UP" ? (
                <p className="text-foreground text-center text-sm">
                    Already have an account?{" "}
                    <Link
                        className="hover:underline hover:text-foreground/70 font-medium inline-flex items-center"
                        href={"/login"}
                    >
                        <span>Log in</span>
                    </Link>
                </p>
            ) : (
                <p className="text-foreground text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link
                        className="hover:underline hover:text-foreground/70 font-medium inline-flex items-center"
                        href={"/signup"}
                    >
                        <span>Sign up</span>
                    </Link>
                </p>
            )}
        </div>
    );
}
