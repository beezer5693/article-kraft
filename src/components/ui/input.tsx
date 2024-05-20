import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-8 w-full text-foreground rounded-md border-x border-b border-t border-t-[#949494] text-sm border-input focus:border-[#007185] bg-transparent focus:bg-transparent px-2 py-1 transition-colors shadow-[inset_0px_1px_0px_rgba(0,0,0,0.07),0_1px_0px_rgba(255,255,255,0.5)] focus:shadow-[0px_0px_0px_3px_rgba(200,243,250,1)] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground/65 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-transparent disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
