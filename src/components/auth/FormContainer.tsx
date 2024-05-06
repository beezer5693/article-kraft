import React, { PropsWithChildren } from "react";

export default function FormContainer({ children }: PropsWithChildren) {
  return <div className="w-full max-w-[300px] flex flex-col items-center">{children}</div>;
}
