
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type LcFlagProps = {
  className?: string;
};

const LcFlag = forwardRef<HTMLDivElement, LcFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <?xml version="1.0" encoding="UTF-8"?>

<path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v317.793a8.83 8.83 0 0 1-8.829 8.828z" fill="#6Cf"/>
<polygon fill="#FFF" points="156,274 256,260 356,274 256,27"/>
<polygon points="169.5,274 256,260 342.5,274 256,60"/>
<polygon fill="#FCD116" points="156,274 356,274 256,150"/>
        </svg>
      </div>
    );
  }
);

LcFlag.displayName = "LcFlag";

export default LcFlag;
