
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type CwFlagProps = {
  className?: string;
};

const CwFlag = forwardRef<HTMLDivElement, CwFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v317.793a8.83 8.83 0 0 1-8.829 8.828z" fill="#41479B"/>
    <path fill="#FFE15A" d="M0 229.793h512v44.138H0z"/>
    <path d="M118.945 82.867l-8.683 26.034-27.443.213c-2.632.02-3.723 3.379-1.606 4.942l22.077 16.302-8.278 26.165c-.793 2.509 2.063 4.585 4.204 3.054l22.327-15.958 22.327 15.958c2.141 1.53 4.998-.545 4.204-3.054l-8.278-26.165 22.077-16.302c2.118-1.564 1.026-4.921-1.606-4.942l-27.443-.213-8.683-26.034c-.832-2.497-4.363-2.497-5.196 0zM56.393 34.825l-5.025 15.069-15.884.124c-1.523.012-2.155 1.955-.929 2.86l12.778 9.436-4.791 15.145c-.459 1.452 1.194 2.654 2.433 1.768l12.922-9.237 12.922 9.237c1.239.886 2.893-.316 2.433-1.768l-4.791-15.145 12.778-9.436c1.225-.905.594-2.849-.929-2.86l-15.884-.124-5.025-15.069c-.482-1.445-2.526-1.445-3.008 0z" fill="#F5F5F5"/>
  </g>
        </svg>
      </div>
    );
  }
);

CwFlag.displayName = "CwFlag";

export default CwFlag;
