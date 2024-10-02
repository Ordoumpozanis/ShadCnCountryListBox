
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ThFlagProps = {
  className?: string;
};

const ThFlag = forwardRef<HTMLDivElement, ThFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#000" fill="none">
    <path fill="#A51931" d="M1 1h512v57H1z"/>
    <path fill="#F4F5F8" d="M1 58h512v57H1z"/>
    <path fill="#2D2A4A" d="M1 115h512v104H1z"/>
    <path fill="#F4F5F8" d="M1 219h512v57H1z"/>
    <path fill="#A51931" d="M1 276h512v57H1z"/>
  </g>
        </svg>
      </div>
    );
  }
);

ThFlag.displayName = "ThFlag";

export default ThFlag;
