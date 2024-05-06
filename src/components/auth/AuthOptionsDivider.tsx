import React from "react";

export default function AuthOptionsDivider() {
  return (
    <div className="flex items-center gap-2 mt-3 mb-4 w-full">
      <span className="h-[1px] w-full border-t border-border/50 dark:border-border/70"></span>
      <span className="text-sm flex-shrink-0 text-foreground/80">or</span>
      <span className="h-[1px] w-full border-t border-border/50 dark:border-border/70"></span>
    </div>
  );
}
