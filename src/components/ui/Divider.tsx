import React from "react";

export default function Divider() {
  return (
    <div className="relative -mb-[18px] mt-7 h-[44px] w-full bg-[linear-gradient(to_bottom,rgba(0,0,0,.2),rgba(0,0,0,.03)3px,transparent)] dark:bg-[linear-gradient(to_bottom,rgba(235,235,235,.25),rgba(255,255,255,.03)3px,transparent)]">
      <div className="absolute left-0 right-0 top-0 h-[44px] w-full bg-[linear-gradient(to_right,rgba(255,255,255,1),rgba(255,255,255,0.1),rgba(255,255,255,1))] dark:bg-[linear-gradient(to_right,rgba(9,9,11,1),rgba(150,150,150,0.1),rgba(9,9,11,1))]"></div>
    </div>
  );
}
