
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type SyFlagProps = {
  className?: string;
};

const SyFlag = forwardRef<HTMLDivElement, SyFlagProps>(
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
    <path d="M150.03 135.314l7.36 22.068 23.262.18c3.011.023 4.26 3.866 1.837 5.656l-18.713 13.82 7.017 22.179c.908 2.871-2.361 5.247-4.811 3.496l-18.925-13.527-18.925 13.527c-2.451 1.751-5.719-.625-4.811-3.496l7.017-22.179-18.713-13.82c-2.423-1.789-1.174-5.633 1.837-5.656l23.262-.18 7.36-22.068c.952-2.857 4.993-2.857 5.946 0zm217.887 0l7.36 22.068 23.262.18c3.011.023 4.26 3.866 1.837 5.656l-18.713 13.82 7.017 22.179c.908 2.871-2.361 5.247-4.811 3.496l-18.925-13.527-18.925 13.527c-2.451 1.751-5.72-.625-4.811-3.496l7.017-22.179-18.713-13.82c-2.423-1.789-1.174-5.633 1.837-5.656l23.262-.18 7.36-22.068c.952-2.857 4.993-2.857 5.946 0z" fill="#73AF00"/>
  </g>
        </svg>
      </div>
    );
  }
);

SyFlag.displayName = "SyFlag";

export default SyFlag;
