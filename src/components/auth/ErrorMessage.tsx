import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";
import { HiExclamationCircle, HiOutlineExclamationCircle } from "react-icons/hi";
import { FormMessage } from "../ui/form";

type ErrorMessageProps = {
  form: UseFormReturn<any, any, undefined>;
  field: string;
};

export default function ErrorMessage({ form, field }: ErrorMessageProps) {
  return (
    <div
      className={cn("hidden items-center gap-1 mt-1", {
        flex: form.getFieldState<any>(field)?.error,
      })}
    >
      <HiExclamationCircle size={16} className="text-destructive" />
      <FormMessage />
    </div>
  );
}
