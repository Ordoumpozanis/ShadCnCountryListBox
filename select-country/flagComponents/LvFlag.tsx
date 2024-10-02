
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type LvFlagProps = {
  className?: string;
};

const LvFlag = forwardRef<HTMLDivElement, LvFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v317.793a8.83 8.83 0 0 1-8.829 8.828z" fill="#C8414B"/>
    <path fill="#F5F5F5" d="M0 137.103h512v61.793H0z"/>
  </g>
        </svg>
      </div>
    );
  }
);

LvFlag.displayName = "LvFlag";

export default LvFlag;
