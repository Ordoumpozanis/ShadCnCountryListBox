
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type GdFlagProps = {
  className?: string;
};

const GdFlag = forwardRef<HTMLDivElement, GdFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.104A8.829 8.829 0 0 1 8.828.276h494.345a8.829 8.829 0 0 1 8.828 8.828v317.792a8.83 8.83 0 0 1-8.829 8.828z" fill="#FF4B55"/>
    <path fill="#FFE15A" d="M459.033 53.242v229.517H52.965V53.242h406.068"/>
    <path d="M52.965 53.242L255.999 168 52.965 282.758zm406.068 0L255.999 168l203.034 114.758z" fill="#73AF00"/>
    <circle fill="#FF4B55" cx="255.999" cy="168" r="35.31"/>
    <path d="M258.231 142.129l5.523 16.558 17.454.136c2.26.018 3.197 2.901 1.379 4.244l-14.041 10.369 5.266 16.642c.682 2.155-1.771 3.937-3.611 2.623L256 182.55l-14.2 10.151c-1.838 1.314-4.291-.468-3.61-2.623l5.266-16.642-14.041-10.369c-1.818-1.343-.881-4.226 1.379-4.244l17.454-.136 5.523-16.558c.712-2.144 3.745-2.144 4.46 0zm-.913-130.136l3.263 9.783 10.313.079c1.335.01 1.889 1.715.814 2.507l-8.297 6.126 3.111 9.833c.403 1.273-1.047 2.326-2.133 1.549L256 35.876l-8.391 5.997c-1.086.777-2.536-.277-2.133-1.549l3.111-9.833-8.297-6.126c-1.074-.793-.521-2.497.814-2.507l10.313-.079 3.263-9.783c.423-1.27 2.215-1.27 2.638-.003zm116.138 0l3.263 9.783 10.313.079c1.335.01 1.889 1.715.814 2.507l-8.297 6.126 3.111 9.833c.403 1.273-1.047 2.326-2.133 1.549l-8.391-5.997-8.391 5.997c-1.086.777-2.536-.277-2.133-1.549l3.111-9.833-8.297-6.126c-1.074-.793-.521-2.497.814-2.507l10.313-.079 3.263-9.783c.426-1.267 2.217-1.267 2.64 0zm-232.276 0l3.263 9.783 10.313.079c1.335.01 1.889 1.715.814 2.507l-8.297 6.126 3.111 9.833c.403 1.273-1.047 2.326-2.133 1.549l-8.391-5.997-8.391 5.997c-1.086.777-2.536-.277-2.133-1.549l3.111-9.833-8.297-6.126c-1.074-.793-.521-2.497.814-2.507l10.313-.079 3.263-9.783c.426-1.267 2.218-1.267 2.64 0zm116.138 282l3.263 9.783 10.313.079c1.335.01 1.889 1.715.814 2.507l-8.297 6.126 3.111 9.833c.403 1.273-1.047 2.326-2.133 1.549L256 317.875l-8.391 5.997c-1.086.777-2.536-.277-2.133-1.549l3.111-9.833-8.297-6.126c-1.074-.793-.521-2.497.814-2.507l10.313-.079 3.263-9.783c.423-1.269 2.215-1.269 2.638-.002zm116.138 0l3.263 9.783 10.313.079c1.335.01 1.889 1.715.814 2.507l-8.297 6.126 3.111 9.833c.403 1.273-1.047 2.326-2.133 1.549l-8.391-5.997-8.391 5.997c-1.086.777-2.536-.277-2.133-1.549l3.111-9.833-8.297-6.126c-1.074-.793-.521-2.497.814-2.507l10.313-.079 3.263-9.783c.426-1.267 2.217-1.267 2.64 0zm-232.276 0l3.263 9.783 10.313.079c1.335.01 1.889 1.715.814 2.507l-8.297 6.126 3.111 9.833c.403 1.273-1.047 2.326-2.133 1.549l-8.391-5.997-8.391 5.997c-1.086.777-2.536-.277-2.133-1.549l3.111-9.833-8.297-6.126c-1.074-.793-.521-2.497.814-2.507l10.313-.079 3.263-9.783c.426-1.267 2.218-1.267 2.64 0zm-23.111-148.062H96V168c0 12.189 9.88 22.069 22.069 22.069 12.189 0 22.069-9.88 22.069-22.069 0-12.189-9.881-22.069-22.069-22.069z" fill="#FFE15A"/>
    <path fill="#FF4B55" d="M140.138 190.069l-12.132-2.352L118.069 168l19.717 9.939z"/>
  </g>
        </svg>
      </div>
    );
  }
);

GdFlag.displayName = "GdFlag";

export default GdFlag;
