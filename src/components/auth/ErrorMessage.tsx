import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FormMessage } from "../ui/form";

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
            <HiOutlineExclamationCircle className="text-destructive h-3.5 w-3.5" />
            <FormMessage />
        </div>
    );
}
