
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type NaFlagProps = {
  className?: string;
};

const NaFlag = forwardRef<HTMLDivElement, NaFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M0 256.276V9.103A8.829 8.829 0 0 1 8.828.275h379.586L0 256.276z" fill="#41479B"/>
    <path d="M512 79.724v247.172a8.829 8.829 0 0 1-8.828 8.828H123.586L512 79.724z" fill="#73AF00"/>
    <path d="M512 84.702V9.103a8.829 8.829 0 0 0-8.828-8.828H383.139L0 251.298v75.598a8.829 8.829 0 0 0 8.828 8.828h120.033L512 84.702z" fill="#F5F5F5"/>
    <path d="M512 53.047V9.103a8.829 8.829 0 0 0-8.828-8.828h-71.718L0 282.953v43.944a8.829 8.829 0 0 0 8.828 8.828h71.718L512 53.047z" fill="#FF4B55"/>
    <g transform="translate(39 38)" fill="#FFE15A">
      <path d="M51.207 19.894c8.691 0 16.557 3.521 22.254 9.214l3.125-21.686-17.235 13.561L51.206.621l-8.145 20.362L25.826 7.422l3.125 21.686c5.699-5.694 13.565-9.214 22.256-9.214zm-22.272 53.74c-5.693-5.697-9.214-13.565-9.214-22.254 0-8.691 3.521-16.557 9.214-22.254L7.249 26 20.81 43.235.448 51.38l20.362 8.145L7.249 76.76l21.686-3.126zm73.031-22.255l-20.362-8.145L95.165 26l-21.686 3.125c5.693 5.697 9.214 13.565 9.214 22.254 0 8.69-3.521 16.557-9.214 22.254l21.686 3.125-13.561-17.235 20.362-8.144zM51.207 82.865c-8.691 0-16.557-3.521-22.254-9.214l-3.125 21.686 17.235-13.561 8.145 20.362 8.145-20.362 17.235 13.561-3.125-21.686c-5.699 5.694-13.565 9.214-22.256 9.214z"/>
      <circle cx="51.207" cy="51.379" r="25.709"/>
    </g>
  </g>
        </svg>
      </div>
    );
  }
);

NaFlag.displayName = "NaFlag";

export default NaFlag;
