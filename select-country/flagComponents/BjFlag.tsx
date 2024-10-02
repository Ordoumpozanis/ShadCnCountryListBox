
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type BjFlagProps = {
  className?: string;
};

const BjFlag = forwardRef<HTMLDivElement, BjFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 168.003H0V9.107A8.829 8.829 0 0 1 8.828.279h494.345a8.829 8.829 0 0 1 8.828 8.828v158.896z" fill="#FFE15A"/>
    <path d="M0 168.003h512v158.896a8.829 8.829 0 0 1-8.828 8.828H8.828A8.829 8.829 0 0 1 0 326.899V168.003z" fill="#FF4B55"/>
    <path d="M170.667 335.721H8.828A8.829 8.829 0 0 1 0 326.893V9.101A8.829 8.829 0 0 1 8.828.273h161.839v335.448z" fill="#73AF00"/>
  </g>
        </svg>
      </div>
    );
  }
);

BjFlag.displayName = "BjFlag";

export default BjFlag;
