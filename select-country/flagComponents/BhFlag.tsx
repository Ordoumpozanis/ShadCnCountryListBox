
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type BhFlagProps = {
  className?: string;
};

const BhFlag = forwardRef<HTMLDivElement, BhFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M211.862 335.723H8.828A8.829 8.829 0 0 1 0 326.895V9.103A8.829 8.829 0 0 1 8.828.275h203.034v335.448z" fill="#F5F5F5"/>
    <path d="M141.241.275l70.621 20.966-70.621 20.965 70.621 20.965-70.621 20.965 70.621 20.965-70.621 20.965 70.621 20.965-70.621 20.965 70.621 20.965-70.621 20.965 70.621 20.965-70.621 20.965 70.621 20.965-70.621 20.965 70.621 20.965-70.621 20.965h361.93a8.829 8.829 0 0 0 8.828-8.828V9.103a8.829 8.829 0 0 0-8.828-8.828h-361.93z" fill="#FF4B55"/>
  </g>
        </svg>
      </div>
    );
  }
);

BhFlag.displayName = "BhFlag";

export default BhFlag;
