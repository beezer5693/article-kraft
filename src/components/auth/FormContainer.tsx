import { PropsWithChildren } from "react";

export default function FormContainer({ children }: PropsWithChildren) {
  return (
    <div className="flex w-full max-w-[450px] flex-col items-center rounded-[8px] border border-border/50 bg-background p-14 shadow-2xl">
      {children}
    </div>
  );
}
