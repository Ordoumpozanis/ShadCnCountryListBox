
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type GmFlagProps = {
  className?: string;
};

const GmFlag = forwardRef<HTMLDivElement, GmFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M0 220.966h512v105.931a8.829 8.829 0 0 1-8.828 8.828H8.828A8.829 8.829 0 0 1 0 326.897V220.966z" fill="#73AF00"/>
    <path d="M8.828.276h494.345a8.829 8.829 0 0 1 8.828 8.828v105.931H0V9.103A8.828 8.828 0 0 1 8.828.276z" fill="#FF4B55"/>
    <path fill="#41479B" d="M0 115.034h512v105.931H0z"/>
    <path d="M0 115.034h512v17.655H0zm0 88.276h512v17.655H0z" fill="#F5F5F5"/>
  </g>
        </svg>
      </div>
    );
  }
);

GmFlag.displayName = "GmFlag";

export default GmFlag;
