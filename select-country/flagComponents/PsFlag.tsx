
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type PsFlagProps = {
  className?: string;
};

const PsFlag = forwardRef<HTMLDivElement, PsFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 112.092H0V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v102.989z" fill="#464655"/>
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V223.908h512v102.988a8.828 8.828 0 0 1-8.828 8.828z" fill="#73AF00"/>
    <path fill="#F5F5F5" d="M0 112.088h512V223.9H0z"/>
    <path d="M3.256 333.59l202.841-161.015c2.946-2.338 2.946-6.812 0-9.151L3.256 2.41C1.311 4.029 0 6.375 0 9.103v317.793c0 2.729 1.311 5.075 3.256 6.694z" fill="#FF4B55"/>
  </g>
        </svg>
      </div>
    );
  }
);

PsFlag.displayName = "PsFlag";

export default PsFlag;
