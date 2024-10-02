
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type NpFlagProps = {
  className?: string;
};

const NpFlag = forwardRef<HTMLDivElement, NpFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.103A8.829 8.829 0 0 1 8.828.275h494.345a8.829 8.829 0 0 1 8.828 8.828v317.793a8.83 8.83 0 0 1-8.829 8.828z" fill="#F5F5F5"/>
    <path d="M11.476 22.876l182.888 133.649H53.442l17.156 19.137 133.217 148.587H11.476V22.876zM3.081 2.528C1.228 4.147 0 6.451 0 9.103v317.793a8.829 8.829 0 0 0 8.828 8.828h220.69L79.144 168h150.374L3.081 2.528z" fill="#41479B"/>
    <path fill="#FF4B55" d="M11.476 22.876l182.888 133.648H53.442L70.6 175.66l133.216 148.588H11.476V22.876"/>
    <path d="M67.345 208.398l7.066 14.583 13.411-9.096a.856.856 0 0 1 1.334.77l-1.171 16.162 16.162-1.171a.856.856 0 0 1 .77 1.334l-9.096 13.411 14.583 7.066a.856.856 0 0 1 0 1.54l-14.583 7.066 9.096 13.411a.856.856 0 0 1-.77 1.334l-16.162-1.171 1.171 16.162a.856.856 0 0 1-1.334.77l-13.411-9.096-7.066 14.583a.856.856 0 0 1-1.54 0l-7.066-14.583-13.411 9.096a.856.856 0 0 1-1.334-.77l1.171-16.162-16.162 1.171a.856.856 0 0 1-.77-1.334l9.096-13.411L22.743 253a.856.856 0 0 1 0-1.54l14.583-7.066-9.096-13.411a.856.856 0 0 1 .77-1.334l16.162 1.171-1.171-16.162a.856.856 0 0 1 1.334-.77l13.411 9.096 7.066-14.583a.857.857 0 0 1 1.543-.003zm18.349-84.337l-6.135-4.191 5.401-5.661-7.697-1.405 2.632-7.367-7.603 1.847-.593-7.8-6.194 4.779-3.713-6.884-3.714 6.886-6.194-4.779-.593 7.8-7.603-1.847 2.632 7.367-7.697 1.405 5.401 5.661-6.135 4.191c-7.741-3.614-14.547-8.895-19.903-15.427 3.598 20.961 21.815 36.929 43.804 36.929s40.205-15.968 43.804-36.929c-5.353 6.531-12.16 11.811-19.9 15.425z" fill="#F5F5F5"/>
  </g>
        </svg>
      </div>
    );
  }
);

NpFlag.displayName = "NpFlag";

export default NpFlag;
