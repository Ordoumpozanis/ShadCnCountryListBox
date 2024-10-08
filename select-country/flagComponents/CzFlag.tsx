
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type CzFlagProps = {
  className?: string;
};

const CzFlag = forwardRef<HTMLDivElement, CzFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M3.256 333.59L256 168 3.256 2.41C1.311 4.029 0 6.375 0 9.103v317.793c0 2.729 1.311 5.075 3.256 6.694z" fill="#41479B"/>
    <path d="M3.256 333.59c1.53 1.274 3.425 2.134 5.571 2.134h494.345a8.829 8.829 0 0 0 8.828-8.828V168H256L3.256 333.59z" fill="#FF4B55"/>
    <path d="M3.256 2.41C4.786 1.136 6.681.276 8.827.276h494.345A8.829 8.829 0 0 1 512 9.104V168H256L3.256 2.41z" fill="#F5F5F5"/>
  </g>
        </svg>
      </div>
    );
  }
);

CzFlag.displayName = "CzFlag";

export default CzFlag;
