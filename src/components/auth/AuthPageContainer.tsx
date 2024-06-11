import { PropsWithChildren } from "react";

export default function AuthPageContainer({ children }: PropsWithChildren) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <main className="container relative flex w-full flex-1 flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
}
