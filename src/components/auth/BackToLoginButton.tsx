import Link from "next/link";

export default function BackToLoginButton() {
    return (
        <Link
            className="mx-auto hover:underline relative group inline-flex items-center text-sm"
            href={"/login"}
        >
            <span>Back to login</span>
        </Link>
    );
}
