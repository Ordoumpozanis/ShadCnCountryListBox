
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type TgFlagProps = {
  className?: string;
};

const TgFlag = forwardRef<HTMLDivElement, TgFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 67.366H0V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v58.263zM0 134.455h512v67.09H0z" fill="#73AF00"/>
    <path fill="#FFE15A" d="M0 67.366h512v67.09H0z"/>
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896v-58.262h512v58.262a8.828 8.828 0 0 1-8.828 8.828z" fill="#73AF00"/>
    <path fill="#FFE15A" d="M0 201.545h512v67.09H0z"/>
    <path d="M194.207 201.545H8.828A8.829 8.829 0 0 1 0 192.717V9.103A8.829 8.829 0 0 1 8.828.275h185.379a8.829 8.829 0 0 1 8.828 8.828v183.614a8.83 8.83 0 0 1-8.828 8.828z" fill="#FF4B55"/>
    <path d="M99.335 47.637L86.577 85.889l-40.322.312c-2.21.018-3.127 2.838-1.348 4.151l32.438 23.954-12.163 38.446c-.666 2.108 1.734 3.851 3.531 2.566l32.806-23.448 32.806 23.448c1.799 1.286 4.199-.458 3.531-2.566l-12.163-38.445 32.438-23.954c1.779-1.313.862-4.135-1.348-4.151l-40.322-.312L103.7 47.638c-.7-2.099-3.666-2.099-4.365-.001z" fill="#F5F5F5"/>
  </g>
        </svg>
      </div>
    );
  }
);

TgFlag.displayName = "TgFlag";

export default TgFlag;
