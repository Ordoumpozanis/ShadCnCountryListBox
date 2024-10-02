
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type CoFlagProps = {
  className?: string;
};

const CoFlag = forwardRef<HTMLDivElement, CoFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 251.862H0v75.034a8.829 8.829 0 0 0 8.828 8.828h494.345a8.829 8.829 0 0 0 8.828-8.828v-75.034z" fill="#FF4B55"/>
    <path d="M512.001 168H0V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828V168z" fill="#FFE15A"/>
    <path fill="#41479B" d="M0 168h512v83.862H0z"/>
  </g>
        </svg>
      </div>
    );
  }
);

CoFlag.displayName = "CoFlag";

export default CoFlag;
