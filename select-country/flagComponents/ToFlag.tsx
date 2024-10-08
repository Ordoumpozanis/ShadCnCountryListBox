
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ToFlagProps = {
  className?: string;
};

const ToFlag = forwardRef<HTMLDivElement, ToFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.104A8.829 8.829 0 0 1 8.828.276h494.345a8.829 8.829 0 0 1 8.828 8.828v317.792a8.83 8.83 0 0 1-8.829 8.828z" fill="#FF4B55"/>
    <path d="M194.206 168H8.828A8.829 8.829 0 0 1 0 159.172V9.104A8.829 8.829 0 0 1 8.828.276h185.379a8.829 8.829 0 0 1 8.828 8.828v150.069a8.829 8.829 0 0 1-8.829 8.827z" fill="#F5F5F5"/>
    <path fill="#FF4B55" d="M167.724 62.069h-44.138V17.931H79.448v44.138H35.31v44.138h44.138v44.138h44.138v-44.138h44.138z"/>
  </g>
        </svg>
      </div>
    );
  }
);

ToFlag.displayName = "ToFlag";

export default ToFlag;
