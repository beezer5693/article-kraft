import { PropsWithChildren } from "react";

export default function FormContainer({ children }: PropsWithChildren) {
  return (
    <div className="flex w-full max-w-[350px] flex-col items-center bg-background">
      {children}
    </div>
  );
}
