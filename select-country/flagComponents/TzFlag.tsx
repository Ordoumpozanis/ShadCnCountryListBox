
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type TzFlagProps = {
  className?: string;
};

const TzFlag = forwardRef<HTMLDivElement, TzFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M0 256.276V9.103A8.829 8.829 0 0 1 8.828.275h379.586L0 256.276z" fill="#73AF00"/>
    <path d="M512 79.724v247.172a8.829 8.829 0 0 1-8.828 8.828H123.586L512 79.724z" fill="#4173CD"/>
    <path d="M512 84.702V9.103a8.829 8.829 0 0 0-8.828-8.828H383.139L0 251.298v75.598a8.829 8.829 0 0 0 8.828 8.828h120.033L512 84.702z" fill="#FFE15A"/>
    <path d="M512 53.047V9.103a8.829 8.829 0 0 0-8.828-8.828h-71.718L0 282.953v43.944a8.829 8.829 0 0 0 8.828 8.828h71.718L512 53.047z" fill="#464655"/>
  </g>
        </svg>
      </div>
    );
  }
);

TzFlag.displayName = "TzFlag";

export default TzFlag;
