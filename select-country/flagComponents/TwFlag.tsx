
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type TwFlagProps = {
  className?: string;
};

const TwFlag = forwardRef<HTMLDivElement, TwFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v317.793a8.83 8.83 0 0 1-8.829 8.828z" fill="#FF4B55"/>
    <path d="M8.828.276h238.345a8.829 8.829 0 0 1 8.828 8.828v150.069a8.829 8.829 0 0 1-8.828 8.828H8.828A8.83 8.83 0 0 1 0 159.172V9.103A8.828 8.828 0 0 1 8.828.276z" fill="#41479B"/>
    <g transform="translate(69 25)" fill="#F5F5F5">
      <path d="M27.403 59.138c0-8.722 3.534-16.618 9.248-22.335L10.177 29.23c-1.537-.439-2.638 1.469-1.49 2.58l19.811 19.155-26.734 6.684c-1.55.387-1.55 2.591 0 2.979l26.734 6.684L8.687 86.467c-1.149 1.111-.047 3.019 1.49 2.58l26.474-7.573c-5.714-5.718-9.248-13.614-9.248-22.336zm9.262-22.349c5.717-5.714 13.613-9.248 22.335-9.248 8.722 0 16.618 3.534 22.335 9.248l7.573-26.474c.439-1.537-1.469-2.638-2.58-1.49l-19.155 19.81-6.684-26.734c-.387-1.55-2.591-1.55-2.979 0l-6.684 26.734-19.155-19.81c-1.111-1.149-3.019-.047-2.58 1.49l7.574 26.474zm44.67 44.698C75.618 87.201 67.722 90.735 59 90.735c-8.722 0-16.618-3.534-22.335-9.248l-7.573 26.474c-.439 1.537 1.469 2.638 2.58 1.49l19.155-19.81 6.684 26.734c.387 1.55 2.591 1.55 2.979 0l6.684-26.734 19.155 19.81c1.111 1.149 3.019.047 2.58-1.49l-7.574-26.474zm34.901-23.839l-26.734-6.684 19.81-19.155c1.149-1.111.047-3.019-1.49-2.58l-26.474 7.573c5.714 5.717 9.248 13.613 9.248 22.335 0 8.722-3.534 16.618-9.248 22.335l26.474 7.573c1.537.439 2.638-1.469 1.49-2.58L89.502 67.31l26.734-6.684c1.551-.386 1.551-2.589 0-2.978z"/>
      <circle cx="59" cy="59.138" r="25.159"/>
    </g>
  </g>
        </svg>
      </div>
    );
  }
);

TwFlag.displayName = "TwFlag";

export default TwFlag;
