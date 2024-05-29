import Link from "next/link";

export default function BackToLoginButton() {
    return (
        <Link
            className="mx-auto mt-4 inline-flex items-center hover:underline text-sm font-medium hover:text-foreground/70"
            href={"/login"}
        >
            <span>Back to Login</span>
        </Link>
    );
}
