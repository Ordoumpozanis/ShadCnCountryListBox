
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type GwFlagProps = {
  className?: string;
};

const GwFlag = forwardRef<HTMLDivElement, GwFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 168H0V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828V168z" fill="#FFE15A"/>
    <path d="M0 168h512v158.897a8.829 8.829 0 0 1-8.828 8.828H8.828A8.829 8.829 0 0 1 0 326.897V168z" fill="#73AF00"/>
    <path d="M167.724.275v335.449H8.828A8.829 8.829 0 0 1 0 326.896V9.103A8.829 8.829 0 0 1 8.828.275h158.896z" fill="#FF4B55"/>
    <path d="M82.197 123.959l-9.731 29.18-30.759.238c-1.686.013-2.386 2.165-1.028 3.167l24.744 18.272-9.278 29.326c-.509 1.608 1.322 2.937 2.694 1.958l25.024-17.886 25.024 17.887c1.372.981 3.202-.35 2.694-1.957l-9.278-29.326 24.744-18.272c1.356-1.002.658-3.154-1.028-3.167l-30.759-.238-9.731-29.18c-.536-1.601-2.798-1.601-3.332-.002z" fill="#464655"/>
  </g>
        </svg>
      </div>
    );
  }
);

GwFlag.displayName = "GwFlag";

export default GwFlag;
