
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type JoFlagProps = {
  className?: string;
};

const JoFlag = forwardRef<HTMLDivElement, JoFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 112.092H0V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v102.989z" fill="#464655"/>
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V223.908h512v102.988a8.828 8.828 0 0 1-8.828 8.828z" fill="#73AF00"/>
    <path fill="#F5F5F5" d="M0 112.088h512V223.9H0z"/>
    <path d="M3.256 333.59l299.112-162.017c2.838-1.537 2.838-5.61 0-7.147L3.256 2.41C1.311 4.029 0 6.375 0 9.103v317.793c0 2.729 1.311 5.075 3.256 6.694z" fill="#FF4B55"/>
    <path d="M95.399 145.164l5.247 11.381 12.169-2.994a.917.917 0 0 1 1.038 1.302l-5.626 11.198 9.928 7.648a.916.916 0 0 1-.371 1.623l-12.263 2.583.211 12.531a.917.917 0 0 1-1.5.723l-9.665-7.977-9.665 7.977a.917.917 0 0 1-1.5-.723l.211-12.531-12.263-2.583a.917.917 0 0 1-.371-1.623l9.928-7.648-5.626-11.198a.917.917 0 0 1 1.038-1.302l12.169 2.994 5.247-11.381c.326-.71 1.336-.71 1.664 0z" fill="#F5F5F5"/>
  </g>
        </svg>
      </div>
    );
  }
);

JoFlag.displayName = "JoFlag";

export default JoFlag;
