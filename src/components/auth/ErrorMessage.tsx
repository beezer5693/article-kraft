import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FormMessage } from "../ui/form";

type ErrorMessageProps = {
    form: UseFormReturn<any, any, undefined>;
    field: string;
};

const ErrorMessage = ({ form, field }: ErrorMessageProps) => {
    return (
        <div
            className={cn("hidden items-center gap-1 mt-1", {
                flex: form.getFieldState<any>(field)?.error,
            })}
        >
            <MdOutlineErrorOutline className="text-destructive h-3.5 w-3.5" />
            <FormMessage />
        </div>
    );
};

export default ErrorMessage;
