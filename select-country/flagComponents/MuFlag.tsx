
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type MuFlagProps = {
  className?: string;
};

const MuFlag = forwardRef<HTMLDivElement, MuFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 84.138H0V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v75.035z" fill="#FF4B55"/>
    <path fill="#41479B" d="M0 84.138h512V168H0z"/>
    <path fill="#FFE15A" d="M0 168h512v83.862H0z"/>
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896v-75.034h512v75.034a8.828 8.828 0 0 1-8.828 8.828z" fill="#73AF00"/>
  </g>
        </svg>
      </div>
    );
  }
);

MuFlag.displayName = "MuFlag";

export default MuFlag;
