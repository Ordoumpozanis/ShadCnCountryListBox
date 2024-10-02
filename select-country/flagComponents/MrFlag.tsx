
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type MrFlagProps = {
  className?: string;
};

const MrFlag = forwardRef<HTMLDivElement, MrFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v317.793a8.83 8.83 0 0 1-8.829 8.828z" fill="#73AF00"/>
    <g fill="#FFE15A">
      <path d="M351.049 136.98c-.236-1.508-2.423-1.433-2.595.084-5.266 46.402-44.626 82.453-92.452 82.453-47.811 0-87.185-36.051-92.452-82.451-.172-1.517-2.359-1.593-2.595-.084a92.275 92.275 0 0 0-1.132 14.315c-.001 53.068 43.069 96.151 96.179 96.151 53.128 0 96.18-43.083 96.18-96.151a92.805 92.805 0 0 0-1.133-14.317z"/>
      <path d="M254.81 97.267l-6.955 20.854-21.983.17c-1.205.009-1.705 1.547-.735 2.263l17.685 13.059-6.631 20.96c-.363 1.149.945 2.1 1.926 1.399L256 143.189l17.885 12.783c.981.701 2.289-.249 1.926-1.399l-6.631-20.96 17.685-13.059c.97-.716.47-2.254-.735-2.263l-21.983-.17-6.955-20.854c-.383-1.143-2.001-1.143-2.382 0z"/>
    </g>
  </g>
        </svg>
      </div>
    );
  }
);

MrFlag.displayName = "MrFlag";

export default MrFlag;
