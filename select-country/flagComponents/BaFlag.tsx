
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type BaFlagProps = {
  className?: string;
};

const BaFlag = forwardRef<HTMLDivElement, BaFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.104A8.829 8.829 0 0 1 8.828.276h494.345a8.829 8.829 0 0 1 8.828 8.828v317.792a8.83 8.83 0 0 1-8.829 8.828z" fill="#41479B"/>
    <path fill="#FFE15A" d="M441.378.276v335.448L105.931.276z"/>
    <path d="M207.353 125.176l5.088 15.254 16.079.125c1.246.01 1.762 1.599.76 2.339l-12.936 9.553 4.851 15.331c.376 1.187-.977 2.17-1.991 1.446l-13.082-9.351-13.082 9.351c-1.013.724-2.366-.258-1.991-1.446l4.851-15.331-12.936-9.553c-1.002-.74-.486-2.329.76-2.339l16.079-.125 5.088-15.254c.396-1.181 2.067-1.181 2.462 0zm-36.782-36.781l5.088 15.254 16.079.125c1.246.01 1.762 1.6.76 2.339l-12.936 9.553 4.851 15.331c.376 1.187-.977 2.17-1.991 1.446l-13.082-9.351-13.082 9.351c-1.013.725-2.366-.258-1.991-1.446l4.851-15.331-12.936-9.553c-1.002-.74-.486-2.329.76-2.339l16.079-.125 5.088-15.254c.396-1.182 2.068-1.182 2.462 0zM133.79 51.613l5.088 15.254 16.079.125c1.246.01 1.762 1.599.76 2.339l-12.936 9.553 4.851 15.331c.376 1.187-.977 2.17-1.991 1.446l-13.082-9.351-13.082 9.351c-1.013.725-2.366-.258-1.991-1.446l4.851-15.331-12.936-9.553c-1.002-.74-.486-2.329.76-2.339l16.079-.125 5.088-15.254c.396-1.182 2.068-1.182 2.462 0zM97.008 14.832l5.088 15.254 16.079.125c1.246.01 1.762 1.599.76 2.339L106 42.102l4.851 15.331c.376 1.187-.977 2.17-1.991 1.446l-13.082-9.351-13.082 9.351c-1.013.724-2.366-.258-1.991-1.446l4.851-15.331L72.62 32.55c-1.002-.74-.486-2.329.76-2.339l16.079-.125 5.088-15.254c.395-1.182 2.066-1.182 2.461 0zm257.471 257.471l5.088 15.254 16.079.125c1.246.01 1.762 1.599.76 2.339l-12.936 9.553 4.851 15.331c.376 1.187-.977 2.171-1.99 1.446L353.249 307l-13.082 9.351c-1.013.725-2.366-.258-1.991-1.446l4.851-15.331-12.936-9.553c-1.002-.74-.486-2.329.76-2.339l16.079-.125 5.088-15.254c.395-1.182 2.067-1.182 2.461 0zm-36.781-36.782l5.088 15.254 16.079.125c1.246.01 1.762 1.599.76 2.339l-12.936 9.553 4.851 15.331c.376 1.187-.977 2.171-1.99 1.446l-13.082-9.351-13.082 9.351c-1.013.724-2.366-.258-1.991-1.446l4.851-15.331-12.936-9.553c-1.002-.74-.486-2.329.76-2.339l16.079-.125 5.088-15.254c.395-1.182 2.067-1.182 2.461 0zm-36.783-36.781l5.088 15.254 16.079.125c1.246.01 1.762 1.599.76 2.339l-12.936 9.553 4.851 15.331c.376 1.187-.977 2.171-1.991 1.445l-13.082-9.351-13.082 9.351c-1.013.724-2.366-.258-1.991-1.445l4.851-15.331-12.936-9.553c-1.002-.74-.486-2.329.76-2.339l16.079-.125 5.088-15.254c.397-1.182 2.068-1.182 2.462 0zm-36.781-36.782l5.088 15.254 16.079.125c1.246.01 1.762 1.599.76 2.339l-12.936 9.553 4.851 15.331c.376 1.187-.977 2.171-1.991 1.446l-13.082-9.351-13.082 9.351c-1.013.724-2.366-.258-1.991-1.446l4.851-15.331-12.936-9.553c-1.002-.74-.486-2.329.76-2.339l16.079-.125 5.088-15.254c.396-1.182 2.068-1.182 2.462 0zM41.944.276l6.83 5.044-4.851 15.331c-.375 1.187.977 2.17 1.991 1.447l13.081-9.351 13.082 9.351c1.013.724 2.366-.258 1.99-1.447L69.217 5.32 76.05.276H41.944zm370.483 324.187l-16.079-.125-5.087-15.254c-.394-1.182-2.066-1.182-2.46 0l-5.087 15.254-16.079.125c-1.246.01-1.762 1.6-.76 2.339l12.083 8.921h22.151l12.082-8.921c.998-.739.482-2.329-.764-2.339z" fill="#F5F5F5"/>
  </g>
        </svg>
      </div>
    );
  }
);

BaFlag.displayName = "BaFlag";

export default BaFlag;
