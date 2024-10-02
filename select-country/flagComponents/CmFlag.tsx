
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type CmFlagProps = {
  className?: string;
};

const CmFlag = forwardRef<HTMLDivElement, CmFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M170.667 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.104A8.829 8.829 0 0 1 8.828.276h161.839v335.448z" fill="#73AF00"/>
    <path fill="#FF4B55" d="M170.67.276h170.67v335.448H170.67z"/>
    <path d="M503.172 335.724H341.333V.276h161.839A8.829 8.829 0 0 1 512 9.104v317.792a8.828 8.828 0 0 1-8.828 8.828zm-245.339-200.08l7.584 22.741 23.971.185c1.857.014 2.627 2.385 1.133 3.488l-19.284 14.24 7.231 22.856c.561 1.771-1.455 3.235-2.967 2.155l-19.502-13.939-19.502 13.94c-1.511 1.08-3.527-.385-2.967-2.155l7.231-22.856-19.284-14.24c-1.494-1.103-.724-3.474 1.133-3.488l23.971-.185 7.584-22.741c.589-1.762 3.08-1.762 3.668-.001z" fill="#FFE15A"/>
  </g>
        </svg>
      </div>
    );
  }
);

CmFlag.displayName = "CmFlag";

export default CmFlag;
