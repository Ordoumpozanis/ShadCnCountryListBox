
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type CuFlagProps = {
  className?: string;
};

const CuFlag = forwardRef<HTMLDivElement, CuFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 67.366H0V9.104A8.829 8.829 0 0 1 8.828.276h494.345a8.829 8.829 0 0 1 8.828 8.828v58.262zm-8.829 268.358H8.828A8.829 8.829 0 0 1 0 326.896v-58.262h512v58.262a8.828 8.828 0 0 1-8.828 8.828z" fill="#41479B"/>
    <path fill="#F5F5F5" d="M0 67.366h511.999v67.09H0z"/>
    <path fill="#41479B" d="M0 134.455h511.999v67.089H0z"/>
    <path fill="#F5F5F5" d="M0 201.545h511.999v67.089H0z"/>
    <path d="M3.31 333.627l255.402-161.754c2.841-1.8 2.841-5.945 0-7.745L3.31 2.373C1.335 3.992 0 6.351 0 9.104v317.792c0 2.753 1.336 5.112 3.31 6.731z" fill="#FF4B55"/>
    <path d="M88.526 125.441l9.064 27.176 28.647.222c2.219.018 3.139 2.849 1.354 4.168l-23.045 17.018 8.641 27.313c.67 2.116-1.74 3.866-3.545 2.575l-23.306-16.658-23.306 16.659c-1.805 1.291-4.215-.46-3.545-2.575l8.641-27.312-23.046-17.018c-1.785-1.319-.865-4.151 1.354-4.168l28.647-.222 9.064-27.176c.701-2.107 3.679-2.107 4.381-.002z" fill="#F5F5F5"/>
  </g>
        </svg>
      </div>
    );
  }
);

CuFlag.displayName = "CuFlag";

export default CuFlag;
