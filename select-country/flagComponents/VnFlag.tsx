
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type VnFlagProps = {
  className?: string;
};

const VnFlag = forwardRef<HTMLDivElement, VnFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v317.793a8.83 8.83 0 0 1-8.829 8.828z" fill="#FF4B55"/>
    <path d="M260.119 67.969l23.609 70.79 74.621.578c4.172.032 5.902 5.357 2.546 7.836l-60.029 44.329 22.509 71.147c1.259 3.978-3.271 7.27-6.666 4.843L256 224.099l-60.71 43.393c-3.394 2.426-7.924-.865-6.666-4.843l22.509-71.147-60.029-44.329c-3.357-2.478-1.626-7.804 2.546-7.836l74.621-.578 23.609-70.79c1.321-3.958 6.919-3.958 8.239 0z" fill="#FFE15A"/>
  </g>
        </svg>
      </div>
    );
  }
);

VnFlag.displayName = "VnFlag";

export default VnFlag;
