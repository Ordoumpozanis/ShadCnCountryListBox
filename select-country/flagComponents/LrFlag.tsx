
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type LrFlagProps = {
  className?: string;
};

const LrFlag = forwardRef<HTMLDivElement, LrFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 30.771H0V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v21.668z" fill="#FF4B55"/>
    <path fill="#F5F5F5" d="M0 30.775h512V61.27H0z"/>
    <path fill="#FF4B55" d="M0 61.263h512v30.495H0z"/>
    <path fill="#F5F5F5" d="M0 91.763h512v30.495H0z"/>
    <path d="M512 152.753H8.828A8.829 8.829 0 0 1 0 143.925v-21.667h512v30.495z" fill="#FF4B55"/>
    <path fill="#F5F5F5" d="M512 183.247H0v-41.73h8.826l.002 11.236H512z"/>
    <path fill="#FF4B55" d="M0 183.25h512v30.495H0z"/>
    <path fill="#F5F5F5" d="M0 213.738h512v30.495H0z"/>
    <path fill="#FF4B55" d="M0 244.237h512v30.495H0z"/>
    <path fill="#F5F5F5" d="M0 274.737h512v30.495H0z"/>
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896v-21.667h512v21.667a8.828 8.828 0 0 1-8.828 8.828z" fill="#FF4B55"/>
    <path d="M141.241 152.753H8.828A8.829 8.829 0 0 1 0 143.925V9.103A8.829 8.829 0 0 1 8.828.275h132.414a8.829 8.829 0 0 1 8.828 8.828v134.822a8.83 8.83 0 0 1-8.829 8.828z" fill="#41479B"/>
    <path d="M72.512 39.737l-8.428 25.27-26.638.206c-2.554.02-3.614 3.279-1.559 4.797l21.429 15.825-8.035 25.398c-.77 2.435 2.003 4.45 4.081 2.965l21.674-15.49 21.672 15.49c2.078 1.485 4.851-.53 4.081-2.965l-8.035-25.398 21.429-15.825c2.055-1.517.995-4.778-1.559-4.797l-26.638-.206-8.428-25.27c-.81-2.424-4.237-2.424-5.046 0z" fill="#F5F5F5"/>
  </g>
        </svg>
      </div>
    );
  }
);

LrFlag.displayName = "LrFlag";

export default LrFlag;
