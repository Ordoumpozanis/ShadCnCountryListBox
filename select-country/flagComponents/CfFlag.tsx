
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type CfFlagProps = {
  className?: string;
};

const CfFlag = forwardRef<HTMLDivElement, CfFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896v-75.034h512v75.034a8.828 8.828 0 0 1-8.828 8.828z" fill="#FFE15A"/>
    <path fill="#73AF00" d="M0 168h511.999v83.862H0z"/>
    <path fill="#F5F5F5" d="M0 84.138h511.999V168H0z"/>
    <path d="M512.001 84.138H0V9.104A8.829 8.829 0 0 1 8.828.276h494.345a8.829 8.829 0 0 1 8.828 8.828v75.034z" fill="#41479B"/>
    <path fill="#FF4B55" d="M214.068.276h83.862v335.448h-83.862z"/>
    <path d="M76.5 11.574l7.366 22.087 23.282.181c1.804.014 2.551 2.316 1.1 3.388l-18.73 13.83 7.022 22.198c.544 1.719-1.414 3.143-2.881 2.093L74.718 61.813 55.777 75.351c-1.468 1.049-3.425-.374-2.881-2.093l7.022-22.198-18.727-13.83c-1.451-1.071-.703-3.373 1.1-3.388l23.282-.181 7.366-22.087c.57-1.711 2.99-1.711 3.561 0z" fill="#FFE15A"/>
  </g>
        </svg>
      </div>
    );
  }
);

CfFlag.displayName = "CfFlag";

export default CfFlag;
