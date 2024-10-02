
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type RwFlagProps = {
  className?: string;
};

const RwFlag = forwardRef<HTMLDivElement, RwFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 168H0V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828V168zM0 168h512v158.897a8.829 8.829 0 0 1-8.828 8.828H8.828A8.829 8.829 0 0 1 0 326.897V168z" fill="#4173CD"/>
    <path fill="#FFE15A" d="M0 168h512v83.862H0z"/>
    <path d="M8.828 335.724h494.345a8.829 8.829 0 0 0 8.828-8.828v-75.034H0v75.034a8.828 8.828 0 0 0 8.828 8.828z" fill="#73AF00"/>
    <g transform="translate(361 17)" fill="#FFE15A">
      <path d="M97.211 73.12l36.134-5.982-36.134-5.982 31.094-19.354-35.672 8.301 21.321-29.78-29.78 21.321 8.301-35.672-19.354 31.094L67.138.931l-5.982 36.134L41.802 5.971l8.301 35.672-29.78-21.321 21.321 29.78-35.672-8.301 31.094 19.354L.931 67.138l36.134 5.982L5.971 92.474l35.672-8.301-21.321 29.78 29.78-21.321-8.301 35.672L61.155 97.21l5.983 36.135 5.982-36.134 19.354 31.094-8.301-35.672 29.78 21.321-21.321-29.78 35.672 8.301L97.211 73.12zM67.138 89.207c-12.189 0-22.069-9.88-22.069-22.069 0-12.189 9.88-22.069 22.069-22.069 12.189 0 22.069 9.88 22.069 22.069 0 12.189-9.88 22.069-22.069 22.069z"/>
      <circle cx="67.138" cy="67.138" r="16.552"/>
    </g>
  </g>
        </svg>
      </div>
    );
  }
);

RwFlag.displayName = "RwFlag";

export default RwFlag;
