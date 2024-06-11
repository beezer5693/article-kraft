import { PropsWithChildren } from "react";

export default function FormContainer({ children }: PropsWithChildren) {
  return (
    <div className="flex w-full max-w-[320px] flex-col items-center rounded-[8px] bg-background">
      {children}
    </div>
  );
}
