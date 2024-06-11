import { FormVariant } from "@/lib/types";
import Link from "next/link";

type ToggleAuthFormProps = {
  variant: FormVariant;
};

export default function ToggleAuthForm({ variant }: ToggleAuthFormProps) {
  return (
    <div className="relative">
      {variant === FormVariant.SIGN_UP ? (
        <p className="text-center text-sm text-foreground">
          Already have an account?{" "}
          <Link
            className="inline-flex items-center font-medium hover:underline"
            href={"/login"}
          >
            <span>Log in</span>
          </Link>
        </p>
      ) : (
        <p className="text-center text-sm text-foreground">
          Don&apos;t have an account?{" "}
          <Link
            className="inline-flex items-center font-medium hover:underline"
            href={"/signup"}
          >
            <span>Sign up</span>
          </Link>
        </p>
      )}
    </div>
  );
}
