
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type MhFlagProps = {
  className?: string;
};

const MhFlag = forwardRef<HTMLDivElement, MhFlagProps>(
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
    <path d="M3.978 334.078L512 123.862V62.069L0 326.897c0 3.043 1.635 5.593 3.978 7.181z" fill="#F5F5F5"/>
    <path d="M508.658 2.351L0 318.069v8.828L512 62.069V9.103c0-2.767-1.351-5.133-3.342-6.752z" fill="#FF9B55"/>
    <path fill="#F5F5F5" d="M145.903 122.169l57.131-7.135-57.131-7.134 28.955-17.759-36.027 8.809 21.926-29.914-29.913 21.926 8.808-36.027-17.758 28.955-7.135-57.131-7.135 57.131-17.759-28.955 8.809 36.027L68.76 69.036 90.686 98.95l-36.027-8.809L83.614 107.9l-57.131 7.134 57.131 7.135-28.955 17.759 36.027-8.809-21.926 29.914 29.914-21.926-8.809 36.027 17.759-28.955 7.135 57.131 7.135-57.131 17.758 28.955-8.808-36.027 29.913 21.926-21.926-29.914 36.027 8.809z"/>
  </g>
        </svg>
      </div>
    );
  }
);

MhFlag.displayName = "MhFlag";

export default MhFlag;
