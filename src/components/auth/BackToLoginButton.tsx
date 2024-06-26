import Link from "next/link";

export default function BackToLoginButton() {
  return (
    <Link
      className="group relative mx-auto mt-7 inline-flex items-center text-sm hover:underline"
      href={"/login"}
    >
      <span>Back to login</span>
    </Link>
  );
}
