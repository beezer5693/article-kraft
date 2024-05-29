import { PropsWithChildren } from "react";

export default function FormContainer({ children }: PropsWithChildren) {
    return (
        <div className="w-full max-w-[320px] rounded-[8px] bg-background flex flex-col items-center">
            {children}
        </div>
    );
}
