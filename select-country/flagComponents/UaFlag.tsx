
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type UaFlagProps = {
  className?: string;
};

const UaFlag = forwardRef<HTMLDivElement, UaFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M0 168h512v158.897a8.829 8.829 0 0 1-8.828 8.828H8.828A8.829 8.829 0 0 1 0 326.897V168z" fill="#FFE15A"/>
    <path d="M512.001 168H0V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828V168z" fill="#4173CD"/>
  </g>
        </svg>
      </div>
    );
  }
);

UaFlag.displayName = "UaFlag";

export default UaFlag;
