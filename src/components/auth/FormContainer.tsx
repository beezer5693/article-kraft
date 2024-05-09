import React, { PropsWithChildren } from "react";

export default function FormContainer({ children }: PropsWithChildren) {
  return <div className="w-full max-w-xs flex flex-col items-center">{children}</div>;
}
