
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type EgFlagProps = {
  className?: string;
};

const EgFlag = forwardRef<HTMLDivElement, EgFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 112.092H0V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v102.989z" fill="#FF4B55"/>
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V223.908h512v102.988a8.828 8.828 0 0 1-8.828 8.828z" fill="#464655"/>
    <path fill="#F5F5F5" d="M0 112.088h512V223.9H0z"/>
    <path d="M284.186 150.57c0-4.377-4.289-7.469-8.441-6.084l-7.804 2.601-1.895-11.444a14.047 14.047 0 0 0-13.906-11.78h-7.299l-7.634 9.396h10.109l-2.829 13.972-8.233-2.744c-4.153-1.385-8.441 1.707-8.441 6.084v47.475l11.363-11.363-5.354 16.061h-6.008v9.396h56.373v-9.396h-6.008l-5.354-16.061 11.363 11.363V150.57h-.002zm-32.883 52.172h-7.574l5.208-13.909 2.366 3.021v10.888zm9.394 0v-10.888l2.366-3.021 5.208 13.909h-7.574zM256 185.713s-14.534-9.836-13.946-28.186c0 0 8.956-1.468 13.946-9.396 4.991 7.927 13.947 9.396 13.947 9.396.587 18.351-13.947 28.186-13.947 28.186z" fill="#F0C727"/>
  </g>
        </svg>
      </div>
    );
  }
);

EgFlag.displayName = "EgFlag";

export default EgFlag;
