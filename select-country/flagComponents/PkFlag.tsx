
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type PkFlagProps = {
  className?: string;
};

const PkFlag = forwardRef<HTMLDivElement, PkFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H132.414V.276h370.759a8.829 8.829 0 0 1 8.828 8.828v317.793a8.83 8.83 0 0 1-8.829 8.827z" fill="#73AF00"/>
    <path d="M132.414 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.103A8.829 8.829 0 0 1 8.828.275h123.586v335.449zm279.639-121.536c-40.632 36.196-102.833 32.477-138.956-8.227-36.054-40.629-32.405-103.01 8.226-139.204l.178-.157c.96-.844.032-2.377-1.16-1.913-40.07 15.604-68.479 54.579-68.479 100.214 0 59.444 48.071 107.587 107.373 107.587 41.023 0 76.574-23.083 94.633-56.969.602-1.131-.81-2.231-1.766-1.377l-.049.046zM359.787 84.589l14.12 15.841 19.56-8.232c2.532-1.066 4.964 1.705 3.578 4.077L386.342 114.6l13.873 16.058c1.796 2.079-.088 5.248-2.772 4.663l-20.735-4.516-10.986 18.156c-1.422 2.35-5.018 1.538-5.292-1.196l-2.112-21.116-20.662-4.838c-2.675-.627-3.014-4.297-.498-5.402l19.43-8.533-1.784-21.145c-.231-2.737 3.156-4.192 4.983-2.142z" fill="#F5F5F5"/>
  </g>
        </svg>
      </div>
    );
  }
);

PkFlag.displayName = "PkFlag";

export default PkFlag;
