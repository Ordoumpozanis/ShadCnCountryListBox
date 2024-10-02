
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type CdFlagProps = {
  className?: string;
};

const CdFlag = forwardRef<HTMLDivElement, CdFlagProps>(
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
    <path d="M503.172.276h-25.305L0 247.448v17.655L508.367 2.155c-1.474-1.103-3.212-1.879-5.195-1.879zM8.828 335.724h25.305L512 88.552V70.897L3.633 333.845c1.474 1.103 3.212 1.879 5.195 1.879z" fill="#FFE15A"/>
    <path d="M508.367 2.155L0 265.103v61.793c0 2.893 1.483 5.339 3.633 6.948L512 70.897V9.103c0-2.893-1.483-5.338-3.633-6.948z" fill="#FF4B55"/>
    <path d="M92.619 34.978l12.718 38.135 40.199.311c2.248.018 3.18 2.886 1.372 4.222l-32.339 23.881 12.126 38.328c.678 2.143-1.762 3.916-3.591 2.609l-32.705-23.377-32.705 23.377c-1.828 1.308-4.269-.466-3.591-2.609l12.126-38.328L33.89 77.646c-1.809-1.335-.876-4.204 1.372-4.222l40.199-.311 12.718-38.135c.713-2.132 3.728-2.132 4.44 0z" fill="#FFE15A"/>
  </g>
        </svg>
      </div>
    );
  }
);

CdFlag.displayName = "CdFlag";

export default CdFlag;
