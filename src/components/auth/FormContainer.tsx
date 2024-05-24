import { PropsWithChildren } from "react";

const FormContainer = ({ children }: PropsWithChildren) => {
    return (
        <div className="w-full shadow-lg max-w-[340px] shadow-border/30 rounded-[8px] p-5 border border-border bg-background flex flex-col items-center">
            {children}
        </div>
    );
};

export default FormContainer;
