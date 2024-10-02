
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type JpFlagProps = {
  className?: string;
};

const JpFlag = forwardRef<HTMLDivElement, JpFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v317.793a8.83 8.83 0 0 1-8.829 8.828z" fill="#F5F5F5"/>
    <circle fill="#FF4B55" cx="256" cy="168" r="97.103"/>
  </g>
        </svg>
      </div>
    );
  }
);

JpFlag.displayName = "JpFlag";

export default JpFlag;
