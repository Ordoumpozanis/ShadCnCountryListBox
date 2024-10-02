
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type IlFlagProps = {
  className?: string;
};

const IlFlag = forwardRef<HTMLDivElement, IlFlagProps>(
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
    <path fill="#F5F5F5" d="M0 62.069h512v211.862H0z"/>
    <path d="M301.869 168l22.933-39.721h-45.865L256 88.552l-22.936 39.727h-45.865L210.132 168l-22.933 39.721h45.865L256 247.448l22.936-39.727h45.865L301.869 168zm.433-26.73l-7.933 13.74-7.933-13.74h15.866zM286.869 168l-15.433 26.73h-30.873L225.131 168l15.433-26.73h30.873L286.869 168zM256 114.534l7.936 13.746h-15.872L256 114.534zm-46.302 26.736h15.865l-7.933 13.74-7.932-13.74zm0 53.46l7.933-13.74 7.933 13.74h-15.866zM256 221.466l-7.936-13.746h15.872L256 221.466zm38.369-40.476l7.933 13.74h-15.865l7.932-13.74z" fill="#41479B"/>
  </g>
        </svg>
      </div>
    );
  }
);

IlFlag.displayName = "IlFlag";

export default IlFlag;
