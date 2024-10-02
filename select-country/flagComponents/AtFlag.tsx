
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type AtFlagProps = {
  className?: string;
};

const AtFlag = forwardRef<HTMLDivElement, AtFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 112.092H0V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v102.989zm-8.829 223.632H8.828A8.829 8.829 0 0 1 0 326.896V223.908h512v102.988a8.828 8.828 0 0 1-8.828 8.828z" fill="#FF4B55"/>
    <path fill="#F5F5F5" d="M0 112.088h512V223.9H0z"/>
  </g>
        </svg>
      </div>
    );
  }
);

AtFlag.displayName = "AtFlag";

export default AtFlag;
