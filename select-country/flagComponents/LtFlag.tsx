
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type LtFlagProps = {
  className?: string;
};

const LtFlag = forwardRef<HTMLDivElement, LtFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M0 223.908h512v102.988a8.829 8.829 0 0 1-8.828 8.828H8.828A8.829 8.829 0 0 1 0 326.896V223.908z" fill="#FF4B55"/>
    <path d="M8.828.276h494.345a8.829 8.829 0 0 1 8.828 8.828v102.988H0V9.103A8.828 8.828 0 0 1 8.828.276z" fill="#FFE15A"/>
    <path fill="#73AF00" d="M0 112.088h512V223.9H0z"/>
  </g>
        </svg>
      </div>
    );
  }
);

LtFlag.displayName = "LtFlag";

export default LtFlag;
