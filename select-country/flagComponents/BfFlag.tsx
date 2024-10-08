
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type BfFlagProps = {
  className?: string;
};

const BfFlag = forwardRef<HTMLDivElement, BfFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 168H0V9.104A8.829 8.829 0 0 1 8.828.276h494.345a8.829 8.829 0 0 1 8.828 8.828V168z" fill="#FF4B55"/>
    <path d="M0 168h512v158.896a8.829 8.829 0 0 1-8.828 8.828H8.828A8.829 8.829 0 0 1 0 326.896V168z" fill="#73AF00"/>
    <path d="M258.685 119.856l11.106 33.3 35.102.273c2.72.021 3.847 3.491 1.66 5.107l-28.238 20.853 10.589 33.469c.82 2.593-2.132 4.738-4.344 3.156l-28.559-20.413-28.558 20.413c-2.212 1.581-5.165-.564-4.344-3.156l10.589-33.469-28.238-20.853c-2.188-1.615-1.06-5.086 1.66-5.107l35.102-.273 11.106-33.3c.857-2.58 4.507-2.58 5.367 0z" fill="#FFE15A"/>
  </g>
        </svg>
      </div>
    );
  }
);

BfFlag.displayName = "BfFlag";

export default BfFlag;
