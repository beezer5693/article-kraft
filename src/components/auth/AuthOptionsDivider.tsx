import React from "react";

const AuthOptionsDivider = () => {
    return (
        <div className="flex items-center gap-2 mt-5 mb-4 w-full">
            <span className="h-[1px] w-full border-t border-border/50"></span>
            <span className="text-xs flex-shrink-0 text-foreground/70">or continue with</span>
            <span className="h-[1px] w-full border-t border-border/50"></span>
        </div>
    );
};

export default AuthOptionsDivider;
