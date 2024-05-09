import React, { PropsWithChildren } from "react";

export default function AuthPageContainer({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <main className="flex-1 container relative w-full flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
}