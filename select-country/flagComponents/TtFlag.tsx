
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type TtFlagProps = {
  className?: string;
};

const TtFlag = forwardRef<HTMLDivElement, TtFlagProps>(
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
    <path d="M8.828.276c-2.387 0-4.535.967-6.124 2.506l359.228 332.942h26.483L26.483.276H8.828zm141.241 0h-26.483l361.931 335.448h17.655c2.387 0 4.535-.967 6.124-2.506L150.069.276z" fill="#F5F5F5"/>
    <path fill="#464655" d="M26.483.276l361.931 335.448h97.103L123.586.276z"/>
  </g>
        </svg>
      </div>
    );
  }
);

TtFlag.displayName = "TtFlag";

export default TtFlag;
