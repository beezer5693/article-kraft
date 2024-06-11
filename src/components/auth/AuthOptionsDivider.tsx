import React from "react";

export default function AuthOptionsDivider() {
  return (
    <div className="mb-4 mt-5 flex w-full items-center gap-2">
      <span className="h-[1px] w-full border-t border-border/50"></span>
      <span className="flex-shrink-0 text-xs text-foreground/70">or</span>
      <span className="h-[1px] w-full border-t border-border/50"></span>
    </div>
  );
}
