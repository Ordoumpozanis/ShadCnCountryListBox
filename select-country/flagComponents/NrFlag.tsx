
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type NrFlagProps = {
  className?: string;
};

const NrFlag = forwardRef<HTMLDivElement, NrFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.104A8.829 8.829 0 0 1 8.828.276h494.345a8.829 8.829 0 0 1 8.828 8.828v317.792a8.83 8.83 0 0 1-8.829 8.828z" fill="#41479B"/>
    <path fill="#FFE15A" d="M0 150.345h511.999v35.31H0z"/>
    <path fill="#F5F5F5" d="M119.172 220.965l5.141 20.54 14.721-15.218-5.817 20.358 20.357-5.818-15.216 14.723 20.538 5.139-20.538 5.141 15.216 14.721-20.357-5.817 5.817 20.358-14.721-15.217-5.141 20.539-5.141-20.539-14.721 15.217 5.818-20.358-20.358 5.817 15.217-14.721-20.539-5.141 20.539-5.139-15.217-14.723 20.358 5.818-5.818-20.358 14.721 15.218z"/>
  </g>
        </svg>
      </div>
    );
  }
);

NrFlag.displayName = "NrFlag";

export default NrFlag;
