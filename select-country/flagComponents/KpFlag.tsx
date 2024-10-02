
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type KpFlagProps = {
  className?: string;
};

const KpFlag = forwardRef<HTMLDivElement, KpFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v317.793a8.83 8.83 0 0 1-8.829 8.828z" fill="#41479B"/>
    <path d="M0 44.414h512v17.655H0zm0 229.517h512v17.655H0z" fill="#F5F5F5"/>
    <path fill="#FF4B55" d="M0 62.069h512v211.862H0z"/>
    <circle fill="#F5F5F5" cx="141.241" cy="168" r="70.621"/>
    <path d="M143.122 103.705l14.167 42.478 44.777.348c1.905.014 2.695 2.445 1.162 3.577l-36.021 26.6 13.506 42.692c.575 1.816-1.493 3.318-3.043 2.211l-36.428-26.039-36.429 26.038c-1.549 1.108-3.617-.395-3.043-2.211l13.506-42.692-36.021-26.6c-1.533-1.131-.743-3.562 1.162-3.577l44.777-.348 14.167-42.478c.603-1.806 3.158-1.806 3.761.001z" fill="#FF4B55"/>
  </g>
        </svg>
      </div>
    );
  }
);

KpFlag.displayName = "KpFlag";

export default KpFlag;
