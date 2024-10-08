
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type SeFlagProps = {
  className?: string;
};

const SeFlag = forwardRef<HTMLDivElement, SeFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v317.793a8.83 8.83 0 0 1-8.829 8.828z" fill="#4173CD"/>
    <path fill="#FFE15A" d="M512 141.517H211.862V.276h-52.965v141.241H0v52.966h158.897v141.241h52.965V194.483H512z"/>
  </g>
        </svg>
      </div>
    );
  }
);

SeFlag.displayName = "SeFlag";

export default SeFlag;
