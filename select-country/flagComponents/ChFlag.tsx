
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ChFlagProps = {
  className?: string;
};

const ChFlag = forwardRef<HTMLDivElement, ChFlagProps>(
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
    <path d="M353.103 132.69H291.31V70.897a8.829 8.829 0 0 0-8.828-8.828h-52.966a8.829 8.829 0 0 0-8.828 8.828v61.793h-61.793a8.829 8.829 0 0 0-8.828 8.828v52.966a8.829 8.829 0 0 0 8.828 8.828h61.793v61.793a8.829 8.829 0 0 0 8.828 8.828h52.966a8.829 8.829 0 0 0 8.828-8.828V203.31h61.793a8.829 8.829 0 0 0 8.828-8.828v-52.966c0-4.874-3.953-8.826-8.828-8.826z" fill="#F5F5F5"/>
  </g>
        </svg>
      </div>
    );
  }
);

ChFlag.displayName = "ChFlag";

export default ChFlag;
