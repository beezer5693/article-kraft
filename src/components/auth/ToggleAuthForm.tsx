import { FormVariant } from "@/lib/types";
import Link from "next/link";

type ToggleAuthFormProps = {
  variant: FormVariant;
};

export default function ToggleAuthForm({ variant }: ToggleAuthFormProps) {
  return (
    <div className="relative mt-7 rounded-sm">
      {variant === FormVariant.SIGN_UP ? (
        <Link
          className="text-center text-sm text-primary hover:underline"
          href={"/login"}
        >
          <span>Already have an account? Log in</span>
        </Link>
      ) : (
        <Link
          className="text-center text-sm text-primary hover:underline"
          href={"/signup"}
        >
          <span>Don&apos;t have an account? Sign up</span>
        </Link>
      )}
    </div>
  );
}
