import { cn } from "@/lib/utils";
import { ApiResponseParams } from "@/types/types";
import { HiOutlineCheckCircle, HiOutlineExclamationCircle } from "react-icons/hi";

export default function FormMessage({ status, message }: ApiResponseParams) {
  return (
    <div
      className={cn("p-3.5 flex items-center gap-3 font-medium rounded-lg w-full mb-5", {
        "bg-green-600/20 text-green-700/90 dark:text-green-500/90": status === "success",
        "text-red-600 dark:text-red-500 bg-destructive/20": status === "error",
      })}
    >
      <span>
        {status === "error" ? (
          <HiOutlineExclamationCircle size={24} />
        ) : (
          <HiOutlineCheckCircle size={24} />
        )}
      </span>
      <span className="text-sm">{message}</span>
    </div>
  );
}
