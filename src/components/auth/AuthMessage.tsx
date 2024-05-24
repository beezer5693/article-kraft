import { cn } from "@/lib/utils";
import { MdCheckCircleOutline, MdOutlineErrorOutline } from "react-icons/md";

type AuthMessageProps = {
    error: boolean;
    message: string;
};

const AuthMessage = ({ error, message }: AuthMessageProps) => {
    return (
        <div
            className={cn(
                "w-full max-w-[340px] shadow-[inset_0px_0px_0px_4px_rgba(252,244,244,1)] border border-destructive px-5 py-3 rounded-[8px] mb-4",
                {
                    "shadow-[inset_0px_0px_0px_4px_rgba(244,252,244,1)] border-green-700": !error,
                }
            )}
        >
            <div
                className={cn("flex items-start gap-3 text-destructive", {
                    "text-green-700": !error,
                })}
            >
                <span className="text-2xl">
                    {error ? <MdOutlineErrorOutline /> : <MdCheckCircleOutline />}
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
};

export default AuthMessage;
