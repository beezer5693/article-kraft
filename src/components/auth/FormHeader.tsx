import { FormVariant } from "@/lib/types";
import { getFormHeader } from "@/lib/formHelpers";

type FormHeaderProps = {
    variant: FormVariant;
};

export default function FormHeader({ variant }: FormHeaderProps) {
    const { formTitle, formDescription } = getFormHeader(variant);

    return (
        <div className="mb-10 w-full text-center">
            <h1 className="text-[1.85rem] tracking-[-0.02em]">{formTitle}</h1>
            <p className="text-balance px-3 mx-auto text-sm">{formDescription}</p>
        </div>
    );
}
