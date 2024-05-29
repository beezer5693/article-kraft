import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";
import { FaExclamation } from "react-icons/fa6";
import { FormMessage } from "../ui/Form";

type ErrorMessageProps = {
    form: UseFormReturn<any, any, undefined>;
    field: string;
};

export default function ErrorMessage({ form, field }: ErrorMessageProps) {
    return (
        <div
            className={cn("hidden items-center gap-1 mt-1.5", {
                flex: form.getFieldState<any>(field)?.error,
            })}
        >
            <FaExclamation className="text-destructive h-3 w-3" />
            <FormMessage />
        </div>
    );
}
