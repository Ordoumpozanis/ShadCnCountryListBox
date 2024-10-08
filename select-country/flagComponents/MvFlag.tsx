
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type MvFlagProps = {
  className?: string;
};

const MvFlag = forwardRef<HTMLDivElement, MvFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v317.793a8.83 8.83 0 0 1-8.829 8.828z" fill="#FF4B55"/>
    <path fill="#73AF00" d="M441.379 70.897v194.207H70.621V70.897h370.758"/>
    <path d="M238.378 168.026c0-33.425 22.767-61.417 53.587-69.525 1.026-.27.952-1.754-.1-1.889a66.738 66.738 0 0 0-8.533-.566c-39.785 0-71.992 32.202-71.992 71.98 0 39.606 32.207 71.896 71.992 71.896 2.898 0 5.745-.209 8.544-.569 1.052-.136 1.125-1.619.1-1.889-30.826-8.121-53.598-36.154-53.598-69.438z" fill="#F5F5F5"/>
  </g>
        </svg>
      </div>
    );
  }
);

MvFlag.displayName = "MvFlag";

export default MvFlag;
