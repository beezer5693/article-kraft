"use client";

import { FormVariant } from "@/lib/types";
import { getFormHeader } from "@/lib/form-helpers";

type FormHeaderProps = {
    variant: FormVariant;
};

const FormHeader = ({ variant }: FormHeaderProps) => {
    const { formTitle, formDescription } = getFormHeader(variant);

    return (
        <div className="mb-7 w-full">
            <h1 className="text-[1.85rem] leading-none mb-2 tracking-[-0.02em]">{formTitle}</h1>
            <p className="text-pretty mx-auto text-sm pr-5">{formDescription}</p>
        </div>
    );
};

export default FormHeader;
