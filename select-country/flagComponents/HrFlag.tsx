
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type HrFlagProps = {
  className?: string;
};

const HrFlag = forwardRef<HTMLDivElement, HrFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M0 223.908h512v102.988a8.829 8.829 0 0 1-8.828 8.828H8.828A8.829 8.829 0 0 1 0 326.896V223.908z" fill="#41479B"/>
    <path d="M8.828.276h494.345a8.829 8.829 0 0 1 8.828 8.828v102.988H0V9.104A8.829 8.829 0 0 1 8.828.276z" fill="#FF4B55"/>
    <path fill="#F5F5F5" d="M0 112.088h511.999V223.9H0z"/>
    <path d="M194.206 115.035h24.717v28.248h-24.717zm49.435 0h24.717v28.248h-24.717zm-24.717 28.248h24.717v28.248h-24.717zm74.151-28.248h24.717v28.248h-24.717zm-24.717 28.248h24.717v28.248h-24.717z" fill="#FF4B55"/>
    <path d="M218.924 115.035h24.717v28.248h-24.717zm49.434 0h24.717v28.248h-24.717zm-74.152 28.248h24.717v28.248h-24.717zm49.435 0h24.717v28.248h-24.717zm49.434 0h24.717v28.248h-24.717z" fill="#F5F5F5"/>
    <path d="M243.641 171.531h24.717v28.248h-24.717zm-24.717 28.248h24.717v28.248h-24.717zm49.434 0h24.717v28.248h-24.717z" fill="#FF4B55"/>
    <path d="M218.924 171.531h24.717v28.248h-24.717zm49.434 0h24.717v28.248h-24.717zm-24.717 28.248h24.717v28.248h-24.717z" fill="#F5F5F5"/>
    <g fill="#FF4B55">
      <path d="M317.792 115.035v79.448c0 34.127-27.666 61.793-61.793 61.793-34.127 0-61.793-27.666-61.793-61.793v-79.448h123.586zm4.414-4.414H189.792v83.862c0 36.506 29.7 66.207 66.207 66.207 36.507 0 66.207-29.7 66.207-66.207v-83.862z"/>
      <path d="M218.924 199.779v-28.248h-24.717v22.952c0 1.789.118 3.546.267 5.297h24.45v-.001z"/>
    </g>
    <path d="M317.525 199.779h-24.45v28.248h14.774a61.348 61.348 0 0 0 9.676-28.248zM204.15 228.027h14.774v-28.248h-24.45a61.36 61.36 0 0 0 9.676 28.248z" fill="#F5F5F5"/>
    <path d="M293.075 199.779h24.45c.149-1.749.267-3.508.267-5.297V171.53h-24.717v28.249zm-74.151 44.054v-15.806H204.15c3.959 6.107 8.973 11.441 14.774 15.806zm88.925-15.806h-14.774v15.806c5.802-4.365 10.816-9.699 14.774-15.806z" fill="#FF4B55"/>
    <path d="M218.924 243.833c7.194 5.415 15.567 9.345 24.717 11.202v-27.008h-24.717v15.806zm49.434 11.202c9.15-1.857 17.523-5.788 24.717-11.202v-15.806h-24.717v27.008z" fill="#F5F5F5"/>
    <path d="M268.358 228.027h-24.717v27.008A62.043 62.043 0 0 0 256 256.276c4.233 0 8.365-.43 12.359-1.241v-27.008h-.001z" fill="#FF4B55"/>
    <path d="M211.27 68.292a180.927 180.927 0 0 0-16.489-1.779 189.969 189.969 0 0 0-12.398 11.15l11.823 28.545a161.456 161.456 0 0 1 24.247-7.866l-7.183-30.05zm59.733-4.687a184.939 184.939 0 0 0-15.002-6.765 185.474 185.474 0 0 0-15.002 6.765l2.41 30.803a161.163 161.163 0 0 1 25.186 0c.801-10.268 1.605-20.535 2.408-30.803zm58.613 14.058a190.81 190.81 0 0 0-12.398-11.15c-5.609.346-11.111.947-16.489 1.779l-7.183 30.049a161.57 161.57 0 0 1 24.247 7.866l11.823-28.544z" fill="#4173CD"/>
    <path d="M240.997 63.605a183.1 183.1 0 0 0-15.894-4.346 187.354 187.354 0 0 0-13.832 9.033c2.394 10.017 4.789 20.033 7.185 30.049a161.442 161.442 0 0 1 24.952-3.933l-2.411-30.803zm59.732 4.687a187.242 187.242 0 0 0-13.832-9.033 183.718 183.718 0 0 0-15.894 4.346l-2.41 30.803a161.322 161.322 0 0 1 24.952 3.933l7.184-30.049z" fill="#41479B"/>
    <path d="M241.96 75.926a179.702 179.702 0 0 0-27.817 4.385l-1.437-6.01a186.473 186.473 0 0 1 28.771-4.535l.483 6.16zm.965 12.321a167.663 167.663 0 0 0-25.907 4.084l-1.437-6.009a173.602 173.602 0 0 1 26.862-4.234l.482 6.159z" fill="#FF4B55"/>
    <path d="M285.326 90.321a167.55 167.55 0 0 0-6.482-1.022c-3.562-.492-6.215-3.516-5.906-6.915.308-3.398 3.713-5.863 7.59-5.327 2.325.32 4.645.685 6.959 1.097 3.859.682 6.357 4.082 5.604 7.406-.751 3.331-4.217 5.386-7.765 4.761z" fill="#FFE15A"/>
    <path d="M320.157 100.498a167.81 167.81 0 0 0-25.175-8.168l1.437-6.009a173.739 173.739 0 0 1 26.103 8.468l-2.365 5.709z" fill="#FF4B55"/>
    <path d="M317.952 81.96c-.873 2.407-3.817 3.552-6.599 2.647-2.781-.906-4.483-3.55-3.779-6.012.704-2.462 3.686-3.765 6.636-2.806 2.953.957 4.615 3.764 3.742 6.171zm-113.527-3.364c.703 2.464-1 5.109-3.779 6.012-2.781.9-5.725-.245-6.599-2.647-.874-2.408.79-5.214 3.742-6.17 2.949-.957 5.934.344 6.636 2.805zm50.165-4.047c.006 2.047-1.834 3.714-4.114 3.784-2.279.073-4.222-1.481-4.342-3.52-.119-2.04 1.719-3.806 4.111-3.883 2.392-.075 4.335 1.572 4.345 3.619zm11.275.264c-.121 2.044-2.065 3.593-4.342 3.52-2.279-.07-4.119-1.737-4.114-3.784.009-2.045 1.953-3.697 4.344-3.619 2.393.072 4.23 1.842 4.112 3.883zm-5.858 9.267c-.057 2.047-1.85 3.657-4.008 3.657-2.156-.001-3.949-1.609-4.008-3.657-.056-2.041 1.737-3.755 4.008-3.749 2.271-.005 4.064 1.707 4.008 3.749z" fill="#FFE15A"/>
  </g>
        </svg>
      </div>
    );
  }
);

HrFlag.displayName = "HrFlag";

export default HrFlag;
