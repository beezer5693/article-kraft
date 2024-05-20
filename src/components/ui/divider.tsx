import React from "react";

export default function Divider() {
  return (
    <div className="h-[44px] -mb-[18px] relative w-full bg-[linear-gradient(to_bottom,rgba(0,0,0,.14),rgba(0,0,0,.03)3px,transparent)]">
      <div className="absolute h-[44px] w-full left-0 right-0 top-0 bg-[linear-gradient(to_right,rgba(255,255,255,1),rgba(255,255,255,0),rgba(255,255,255,1))]"></div>
    </div>
  );
}
