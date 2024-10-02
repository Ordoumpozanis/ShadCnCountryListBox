
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type GrFlagProps = {
  className?: string;
};

const GrFlag = forwardRef<HTMLDivElement, GrFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M0 37.55h512v37.272H0zm0 74.538h512v37.272H0zm0 74.549h512v37.272H0z" fill="#F5F5F5"/>
    <path fill="#41479B" d="M0 223.912h512v37.272H0z"/>
    <path fill="#F5F5F5" d="M0 261.175h512v37.272H0z"/>
    <path d="M8.828 335.724h494.345a8.829 8.829 0 0 0 8.828-8.828v-28.445H0v28.445a8.828 8.828 0 0 0 8.828 8.828zM512 37.548V9.103a8.829 8.829 0 0 0-8.828-8.828H8.828A8.83 8.83 0 0 0 0 9.103v177.533h512v-37.272H176.552v-37.272H512V74.82H176.552V37.548H512z" fill="#41479B"/>
    <path fill="#F5F5F5" d="M176.552 74.82h-69.64V.276H69.64V74.82H0v37.272h69.64v74.544h37.272v-74.544h69.64z"/>
  </g>
        </svg>
      </div>
    );
  }
);

GrFlag.displayName = "GrFlag";

export default GrFlag;
