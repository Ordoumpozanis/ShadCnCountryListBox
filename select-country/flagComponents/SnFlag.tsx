
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type SnFlagProps = {
  className?: string;
};

const SnFlag = forwardRef<HTMLDivElement, SnFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M170.667 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.103A8.829 8.829 0 0 1 8.828.275h161.839v335.449z" fill="#73AF00"/>
    <path fill="#FFE15A" d="M170.67.276h170.67v335.448H170.67z"/>
    <path d="M503.172 335.724H341.333V.276h161.839A8.829 8.829 0 0 1 512 9.104v317.793a8.828 8.828 0 0 1-8.828 8.827z" fill="#FF4B55"/>
    <path d="M258.04 117.78l11.693 35.062 36.959.287c2.067.017 2.924 2.654 1.261 3.881l-29.732 21.955 11.148 35.239c.623 1.971-1.62 3.601-3.302 2.399L256 195.109l-30.069 21.492c-1.682 1.202-3.925-.428-3.302-2.399l11.148-35.239-29.732-21.955c-1.663-1.228-.806-3.865 1.261-3.881l36.959-.287 11.693-35.062c.655-1.959 3.429-1.959 4.082.002z" fill="#73AF00"/>
  </g>
        </svg>
      </div>
    );
  }
);

SnFlag.displayName = "SnFlag";

export default SnFlag;
