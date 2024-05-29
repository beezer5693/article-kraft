import { cn } from "@/lib/utils";
import { HiOutlineCheckCircle, HiOutlineExclamationCircle } from "react-icons/hi";

type AuthMessageProps = {
    error: boolean;
    message: string;
};

export default function AuthMessage({ error, message }: AuthMessageProps) {
    return (
        <div
            className={cn(
                "w-full max-w-[320px] shadow-[inset_0px_0px_0px_4px_rgba(252,50,50,.1)] border border-destructive px-5 py-3 rounded-[8px] mb-6",
                {
                    "shadow-[inset_0px_0px_0px_4px_rgba(50,252,50,.1)] border-green-700": !error,
                }
            )}
        >
            <div
                className={cn("flex items-start gap-2 text-destructive", {
                    "text-green-700": !error,
                })}
            >
                <span className="text-2xl">
                    {error ? <HiOutlineExclamationCircle /> : <HiOutlineCheckCircle />}
                </span>
                <div>
                    <h4 className="text-[17px] leading-6 block font-medium">
                        {error ? "There was a problem" : "Request successful"}
                    </h4>
                    <span className="text-sm text-foreground mt-1 block text-pretty">
                        {message}
                    </span>
                </div>
            </div>
        </div>
    );
}
