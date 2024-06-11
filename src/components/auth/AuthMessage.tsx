import { cn } from "@/lib/utils";
import { FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";

type AuthMessageProps = {
  error: boolean;
  message: string;
};

export default function AuthMessage({ error, message }: AuthMessageProps) {
  return (
    <div
      className={cn(
        "mb-6 w-full max-w-[320px] rounded-[8px] border border-destructive px-5 py-3 shadow-[inset_0px_0px_0px_4px_rgba(252,50,50,.3)]",
        {
          "border-green-700 shadow-[inset_0px_0px_0px_4px_rgba(50,252,50,.2)]":
            !error,
        },
      )}
    >
      <div
        className={cn("flex items-start gap-3 text-destructive", {
          "text-green-700": !error,
        })}
      >
        <span>
          {error ? (
            <FaCircleExclamation className="mt-[1.5px] h-5 w-5" />
          ) : (
            <FaCircleCheck className="mt-[1.5px] h-5 w-5" />
          )}
        </span>
        <div>
          <h4 className="block text-[17px] font-medium leading-6">
            {error ? "There was a problem" : "Request successful"}
          </h4>
          <span className="mt-1 block text-pretty text-sm text-foreground">
            {message}
          </span>
        </div>
      </div>
    </div>
  );
}
