
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type AeFlagProps = {
  className?: string;
};

const AeFlag = forwardRef<HTMLDivElement, AeFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 112.092H158.897V.276h344.276a8.829 8.829 0 0 1 8.828 8.828v102.988z" fill="#73AF00"/>
    <path d="M503.172 335.724H158.897V223.908H512v102.988a8.828 8.828 0 0 1-8.828 8.828z" fill="#464655"/>
    <path fill="#F5F5F5" d="M158.897 112.088H512V223.9H158.897z"/>
    <path d="M158.897 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.103A8.829 8.829 0 0 1 8.828.275h150.069v335.449z" fill="#FF4B55"/>
  </g>
        </svg>
      </div>
    );
  }
);

AeFlag.displayName = "AeFlag";

export default AeFlag;
