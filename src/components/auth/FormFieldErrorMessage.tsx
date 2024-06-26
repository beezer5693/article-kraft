import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";
import { FaExclamation } from "react-icons/fa6";
import { FormMessage } from "../ui/Form";

type FormFieldErrorMessageProps = {
  form: UseFormReturn<any, any, undefined>;
  field: string;
};

export default function FormFieldErrorMessage({
  form,
  field,
}: FormFieldErrorMessageProps) {
  return (
    <div
      className={cn("mt-1.5 hidden items-center gap-1", {
        flex: form.getFieldState<any>(field)?.error,
      })}
    >
      <FaExclamation className="h-3 w-3 text-destructive" />
      <FormMessage />
    </div>
  );
}
