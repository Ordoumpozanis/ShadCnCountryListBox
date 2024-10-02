
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type SgFlagProps = {
  className?: string;
};

const SgFlag = forwardRef<HTMLDivElement, SgFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M512.001 168H0V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828V168z" fill="#FF4B55"/>
    <g fill="#F5F5F5">
      <path d="M0 168h512v158.897a8.829 8.829 0 0 1-8.828 8.828H8.828A8.829 8.829 0 0 1 0 326.897V168zm72.569-83.737c0-29.028 21.3-53.091 49.113-57.542 1.51-.242 1.578-2.319.088-2.663a60.413 60.413 0 0 0-21.793-1c-29.998 4.086-53.186 30.046-53.61 60.318-.483 34.566 27.383 62.712 61.785 62.712 4.683 0 9.23-.547 13.606-1.554 1.489-.342 1.414-2.424-.094-2.666-27.802-4.448-49.095-28.464-49.095-57.605z"/>
      <path d="M122.14 99.795l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.774-1.014-2.112 0zm40.827 0l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.773-1.014-2.112 0zM142.738 36.79l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.774-1.014-2.112 0zm-32.552 24.138l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.773-1.014-2.112 0zm64.828 0l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.774-1.014-2.112 0z"/>
    </g>
  </g>
        </svg>
      </div>
    );
  }
);

SgFlag.displayName = "SgFlag";

export default SgFlag;
