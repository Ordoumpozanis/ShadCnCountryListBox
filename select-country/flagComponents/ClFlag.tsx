
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ClFlagProps = {
  className?: string;
};

const ClFlag = forwardRef<HTMLDivElement, ClFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 168H0V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828V168z" fill="#F5F5F5"/>
    <path d="M17.655 168v-8.828H0v167.725a8.829 8.829 0 0 0 8.828 8.828h494.345a8.829 8.829 0 0 0 8.828-8.828V168H17.655z" fill="#FF4B55"/>
    <path d="M158.897 168H8.828A8.829 8.829 0 0 1 0 159.172V9.103A8.829 8.829 0 0 1 8.828.275h150.069a8.829 8.829 0 0 1 8.828 8.828v150.069a8.83 8.83 0 0 1-8.828 8.828z" fill="#41479B"/>
    <path d="M87.262 46.487l8.416 25.234 26.6.206c3.444.026 4.872 4.422 2.101 6.467l-21.398 15.801 8.023 25.362c1.038 3.284-2.7 5.999-5.502 3.997l-21.64-15.467-21.641 15.468c-2.802 2.003-6.54-.714-5.502-3.997l8.023-25.362-21.398-15.801c-2.771-2.046-1.343-6.441 2.101-6.467l26.6-.206 8.416-25.234c1.09-3.268 5.712-3.268 6.801-.001z" fill="#F5F5F5"/>
  </g>
        </svg>
      </div>
    );
  }
);

ClFlag.displayName = "ClFlag";

export default ClFlag;
