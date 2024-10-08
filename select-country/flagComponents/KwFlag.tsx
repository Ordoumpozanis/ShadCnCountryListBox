
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type KwFlagProps = {
  className?: string;
};

const KwFlag = forwardRef<HTMLDivElement, KwFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 112.092H0V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v102.989z" fill="#73AF00"/>
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V223.908h512v102.988a8.828 8.828 0 0 1-8.828 8.828z" fill="#FF4B55"/>
    <path fill="#F5F5F5" d="M0 112.088h512V223.9H0z"/>
    <path d="M3.256 333.59l137.985-109.532-.003-112.12L3.256 2.41C1.311 4.029 0 6.375 0 9.103v317.793c0 2.729 1.311 5.075 3.256 6.694z" fill="#464655"/>
  </g>
        </svg>
      </div>
    );
  }
);

KwFlag.displayName = "KwFlag";

export default KwFlag;
