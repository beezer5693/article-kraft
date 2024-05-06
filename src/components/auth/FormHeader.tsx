"use client";

import { useFormHeader } from "@/hooks/useForm";
import { FormVariant } from "@/types/types";
import React from "react";

type FormHeaderProps = {
  variant: FormVariant;
};

export default function FormHeader({ variant }: FormHeaderProps) {
  const { formTitle, formDescription } = useFormHeader(variant);

  return (
    <div className="mb-8 w-full text-center">
      <h1 className="text-[1.7rem] mb-1 font-semibold tracking-tight">{formTitle}</h1>
      <p className="text-sm text-foreground text-pretty">{formDescription}</p>
    </div>
  );
}
