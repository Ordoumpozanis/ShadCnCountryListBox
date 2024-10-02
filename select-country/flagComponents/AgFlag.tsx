
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type AgFlagProps = {
  className?: string;
};

const AgFlag = forwardRef<HTMLDivElement, AgFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172.276H8.828A8.829 8.829 0 0 0 0 9.104v317.792a8.829 8.829 0 0 0 8.828 8.828h494.345a8.829 8.829 0 0 0 8.828-8.828V9.104a8.83 8.83 0 0 0-8.829-8.828z" fill="#464655"/>
    <path fill="#FFE15A" d="M255.999 17.931l11.195 58.482 32.721-49.746-12.037 58.314 49.268-33.438-33.437 49.269 58.314-12.038-49.747 32.722 58.482 11.194-58.482 11.194 49.747 32.722-58.314-12.038 33.437 49.268-49.268-33.437 12.037 58.314-32.721-49.746-11.195 58.481-11.193-58.481-32.723 49.746 12.039-58.314-49.269 33.437 33.438-49.268-58.314 12.038 49.746-32.722-58.482-11.194 58.482-11.194-49.746-32.722 58.314 12.038-33.438-49.269 49.269 33.438-12.039-58.314 32.723 49.746z"/>
    <g fill="#FF4B55">
      <path d="M0 9.104v317.792a8.829 8.829 0 0 0 8.828 8.828H256L2.298 3.289C.91 4.848 0 6.852 0 9.104z"/>
      <path d="M255.999 335.724h247.172a8.829 8.829 0 0 0 8.828-8.828V9.104c0-2.252-.91-4.256-2.298-5.816L255.999 335.724z"/>
    </g>
    <path fill="#4173CD" d="M154.947 203.31h202.105l53.894-70.62H101.052z"/>
    <path fill="#F5F5F5" d="M154.947 203.31l101.052 132.414L357.052 203.31z"/>
  </g>
        </svg>
      </div>
    );
  }
);

AgFlag.displayName = "AgFlag";

export default AgFlag;
