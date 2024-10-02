
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type PrFlagProps = {
  className?: string;
};

const PrFlag = forwardRef<HTMLDivElement, PrFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 67.366H0V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v58.263z" fill="#FF4B55"/>
    <path fill="#F5F5F5" d="M0 67.366h512v67.09H0z"/>
    <path d="M0 134.455h512v67.09H0zm503.172 201.269H8.828A8.829 8.829 0 0 1 0 326.896v-58.262h512v58.262a8.828 8.828 0 0 1-8.828 8.828z" fill="#FF4B55"/>
    <path fill="#F5F5F5" d="M0 201.545h512v67.09H0z"/>
    <path d="M3.256 333.59l244.341-160.086c3.966-2.599 3.966-8.412 0-11.009L3.256 2.41C1.311 4.029 0 6.375 0 9.103v317.793c0 2.729 1.311 5.075 3.256 6.694z" fill="#41479B"/>
    <path d="M90.183 127.026l9.213 27.623 29.118.226c3.769.029 5.333 4.84 2.301 7.08l-23.424 17.298 8.783 27.763c1.138 3.594-2.955 6.568-6.023 4.375l-23.69-16.932-23.69 16.932c-3.066 2.193-7.159-.781-6.023-4.375l8.783-27.763-23.424-17.298c-3.032-2.24-1.47-7.05 2.301-7.08l29.118-.226 9.213-27.623c1.193-3.577 6.251-3.577 7.444 0z" fill="#F5F5F5"/>
  </g>
        </svg>
      </div>
    );
  }
);

PrFlag.displayName = "PrFlag";

export default PrFlag;
