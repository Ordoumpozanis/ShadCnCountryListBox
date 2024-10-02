
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type SoFlagProps = {
  className?: string;
};

const SoFlag = forwardRef<HTMLDivElement, SoFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v317.793a8.83 8.83 0 0 1-8.829 8.828z" fill="#82AFFF"/>
    <path d="M253.466 105.442l-14.81 44.409-46.813.363c-2.567.02-3.63 3.295-1.566 4.82l37.658 27.809-14.121 44.632c-.775 2.447 2.012 4.471 4.099 2.978L256 203.233l38.086 27.222c2.088 1.492 4.874-.532 4.099-2.978l-14.121-44.633 37.658-27.809c2.065-1.525 1.001-4.8-1.566-4.82l-46.813-.363-14.81-44.409c-.812-2.435-4.254-2.435-5.067-.001z" fill="#F5F5F5"/>
  </g>
        </svg>
      </div>
    );
  }
);

SoFlag.displayName = "SoFlag";

export default SoFlag;
