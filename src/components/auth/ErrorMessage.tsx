import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";
import { FaExclamation } from "react-icons/fa";
import { FormMessage } from "../ui/form";

type ErrorMessageProps = {
    form: UseFormReturn<any, any, undefined>;
    field: string;
};

const ErrorMessage = ({ form, field }: ErrorMessageProps) => {
    return (
        <div
            className={cn("hidden items-center gap-0.5 mt-1", {
                flex: form.getFieldState<any>(field)?.error,
            })}
        >
            <FaExclamation className="text-destructive h-2.5 w-2.5" />
            <FormMessage />
        </div>
    );
};

export default ErrorMessage;
