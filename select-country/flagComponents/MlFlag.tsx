
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type MlFlagProps = {
  className?: string;
};

const MlFlag = forwardRef<HTMLDivElement, MlFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M341.333.276h161.839A8.829 8.829 0 0 1 512 9.104v317.793a8.829 8.829 0 0 1-8.828 8.828H341.333V.276z" fill="#FF4B55"/>
    <path fill="#FFE15A" d="M170.67.276h170.67v335.448H170.67z"/>
    <path d="M8.828.276h161.839v335.448H8.828A8.829 8.829 0 0 1 0 326.896V9.103A8.828 8.828 0 0 1 8.828.276z" fill="#73AF00"/>
  </g>
        </svg>
      </div>
    );
  }
);

MlFlag.displayName = "MlFlag";

export default MlFlag;
