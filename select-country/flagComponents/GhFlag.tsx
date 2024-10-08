
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type GhFlagProps = {
  className?: string;
};

const GhFlag = forwardRef<HTMLDivElement, GhFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 112.092H0V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v102.989z" fill="#FF4B55"/>
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V223.908h512v102.988a8.828 8.828 0 0 1-8.828 8.828z" fill="#73AF00"/>
    <path fill="#FFE15A" d="M0 112.088h512V223.9H0z"/>
    <path d="M259.722 125.909l9.213 27.623 29.118.226c3.769.029 5.333 4.84 2.301 7.08l-23.424 17.298 8.783 27.763c1.138 3.594-2.955 6.568-6.023 4.375L256 193.34l-23.69 16.932c-3.066 2.193-7.159-.781-6.023-4.375l8.783-27.763-23.424-17.298c-3.032-2.24-1.47-7.05 2.301-7.08l29.118-.226 9.213-27.623c1.193-3.574 6.251-3.574 7.444.002z" fill="#464655"/>
  </g>
        </svg>
      </div>
    );
  }
);

GhFlag.displayName = "GhFlag";

export default GhFlag;
