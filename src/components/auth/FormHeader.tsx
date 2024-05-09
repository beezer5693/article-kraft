"use client";

import { FormVariant } from "@/lib/types";
import { getFormHeader } from "@/lib/form-helpers";

type FormHeaderProps = {
  variant: FormVariant;
};

export default function FormHeader({ variant }: FormHeaderProps) {
  const { formTitle, formDescription } = getFormHeader(variant);

  return (
    <div className="mb-8 w-full text-center">
      <h1 className="text-[1.85rem] mb-1 font-semibold tracking-tight">{formTitle}</h1>
      <p className="text-pretty text-sm">{formDescription}</p>
    </div>
  );
}
