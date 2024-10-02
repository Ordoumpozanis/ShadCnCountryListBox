
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type AwFlagProps = {
  className?: string;
};

const AwFlag = forwardRef<HTMLDivElement, AwFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.104A8.829 8.829 0 0 1 8.828.276h494.345a8.829 8.829 0 0 1 8.828 8.828v317.792a8.83 8.83 0 0 1-8.829 8.828z" fill="#4173CD"/>
    <path d="M0 229.793h511.999v17.655H0zm0 35.31h511.999v17.655H0z" fill="#FFE15A"/>
    <path fill="#FF4B55" d="M65.232 87.942L32.384 76.725l32.848-11.216 11.217-32.844 11.216 32.844 32.848 11.216-32.848 11.217-11.216 32.845z"/>
    <path d="M76.449 38.567l9.714 28.445 28.445 9.714-28.445 9.714-9.714 28.445-9.714-28.445-28.445-9.714 28.445-9.714 9.714-28.445zm0-11.808l-3.612 10.574-9.108 26.673-26.672 9.108-10.574 3.612 10.574 3.61 26.672 9.108 9.108 26.672 3.612 10.574 3.612-10.574 9.108-26.672 26.672-9.108 10.574-3.61-10.574-3.61-26.672-9.108-9.108-26.672-3.612-10.577z" fill="#F5F5F5"/>
  </g>
        </svg>
      </div>
    );
  }
);

AwFlag.displayName = "AwFlag";

export default AwFlag;
