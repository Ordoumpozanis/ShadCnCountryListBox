
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type TdFlagProps = {
  className?: string;
};

const TdFlag = forwardRef<HTMLDivElement, TdFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M170.667 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.104A8.829 8.829 0 0 1 8.828.276h161.839v335.448z" fill="#41479B"/>
    <path fill="#FFE15A" d="M170.67.276h170.67v335.448H170.67z"/>
    <path d="M503.172 335.724H341.333V.276h161.839A8.829 8.829 0 0 1 512 9.104v317.792a8.828 8.828 0 0 1-8.828 8.828z" fill="#FF4B55"/>
  </g>
        </svg>
      </div>
    );
  }
);

TdFlag.displayName = "TdFlag";

export default TdFlag;
