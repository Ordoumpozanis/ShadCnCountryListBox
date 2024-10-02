
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ByFlagProps = {
  className?: string;
};

const ByFlag = forwardRef<HTMLDivElement, ByFlagProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(className ? className : "w-full", "flex justify-center items-center")} ref={ref} {...props}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 512 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
    <path d="M503.172 335.724H8.828A8.829 8.829 0 0 1 0 326.896v-79.448h512v79.448a8.828 8.828 0 0 1-8.828 8.828z" fill="#73AF00"/>
    <path d="M503.172.276H8.828A8.829 8.829 0 0 0 0 9.104v238.344h512V9.104a8.829 8.829 0 0 0-8.828-8.828z" fill="#FF4B55"/>
    <path d="M70.621 335.724H8.828A8.829 8.829 0 0 1 0 326.896V9.104A8.829 8.829 0 0 1 8.828.276h61.793v335.448z" fill="#F5F5F5"/>
    <path d="M8.833 321.063h3.122v-8.75H8.833v8.75zm24.918 0h3.123v-8.75h-3.123v8.75zm24.934 0h3.108v-8.75h-3.108v8.75zm-37.377-23.46h3.091v-7.292h-3.091v7.292zm24.933 0h3.108v-7.292h-3.108v7.292zM8.833 278.581h3.122v-8.75H8.833v8.75zm24.918 0h3.123v-8.75h-3.123v8.75zm24.934 0h3.108v-8.75h-3.108v8.75zm-43.591 11.73h3.091v-7.357h3.123v-7.292h3.091v7.292h3.139v7.357h3.091v7.292h-3.091v7.354h-3.139v7.354h-3.091v-7.354h-3.123v-7.354h-3.091v-7.292zm24.919 0h3.122v-7.357h3.107v-7.292h3.108v7.292h3.107v7.357h3.122v7.292h-3.122v7.354H49.35v7.354h-3.108v-7.354h-3.107v-7.354h-3.122v-7.292zm6.228-29.294v7.292h-3.137v7.354h-3.091v7.292h-3.139v7.357h-3.123v-7.357h-3.123v-7.292h-3.091v-7.354h-3.139v-7.292h-3.091v7.292h-3.123v7.354h-3.091v7.292h-3.139v7.357H8.833v7.292h3.122v7.354h3.139v7.354h3.091v7.292h3.123v7.293h3.123v-7.293h3.107v-7.292h3.091v-7.354h3.123v-7.354h3.123v7.354h3.139v7.354h3.122v7.292h3.107v7.293h3.108v-7.293h3.107v-7.292h3.122v-7.354h3.123v-7.354h3.091v-7.292h-3.108v-7.357H55.58v-7.292h-3.122v-7.354h-3.107v-7.292h-3.11zm7.72-7.29h1.554v-2.916h1.569v2.916h1.569v2.915h-1.569v2.98h-1.569v-2.98h-1.554v-2.915zm0-10.21v4.313h-1.537v4.438h-1.569v5.834h1.569v4.374h1.537v4.374h4.693v-4.374h1.554v-4.374h1.537v-5.834h-1.537v-4.438h-1.554v-4.313h-4.693zm-42.006 10.145h1.569v-2.915h1.569v2.915h1.521v2.98h-1.521v2.916h-1.569v-2.916h-1.569v-2.98zm0-10.209v4.376h-1.554v4.374H8.833v5.897h1.568v4.374h1.554v4.374h4.66v-4.374h1.569V258.1h1.523v-5.897h-1.523v-4.374h-1.569v-4.376h-4.66zm17.135 10.209h1.537v-2.915h1.586v2.915h1.537v2.98h-1.537v2.916h-1.586v-2.916H29.09v-2.98zm7.784 0h1.569v-2.915h1.569v2.915h1.537v2.98h-1.537v2.916h-1.569v-2.916h-1.569v-2.98zm0-10.209v4.376h-3.123v-4.376h-4.66v4.376h-1.554v4.374h-1.569v5.897h1.569v4.374h1.554v4.374h4.66v-4.374h3.123v4.374h4.676v-4.374h1.585V258.1h1.523v-5.897h-1.523v-4.374H41.55v-4.376h-4.676zm-28.041-2.98h3.122v-8.749H8.833v8.749zm24.918 0h3.123v-8.749h-3.123v8.749zm24.934 0h3.108v-8.749h-3.108v8.749zM8.833 203.887h3.122v-5.832H8.833v5.832zm49.852 0h3.108v-5.832h-3.108v5.832zm-24.934-20.48h3.123v-7.292h-3.123v7.292zM8.833 163.626v8.811h3.122v-8.811H8.833zm17.134 0v8.811h3.123v-8.811h-3.123zm15.583 0v8.811h3.107v-8.811H41.55zm17.135 0v8.811h3.108v-8.811h-3.108zm-20.242-5.135v2.916h-1.569v2.219h-3.123v-2.219h-1.537v-2.916h-3.123v4.374h1.537v2.219h1.586v5.833h-1.586v2.219h-1.537v4.374h3.123v-2.915h1.537v-2.157h3.123v2.157h1.569v2.915h3.107v-4.374h-1.537v-2.219h-1.569v-5.833h1.569v-2.219h1.537v-4.374h-3.107zm-4.692 1.456h3.123v-7.292h-3.123v7.292zM8.833 138.008h3.122v-5.832H8.833v5.832zm49.852 0h3.108v-5.832h-3.108v5.832zM8.833 104.34h3.122v-8.812H8.833v8.812zm24.918 0h3.123v-8.812h-3.123v8.812zm24.934 0h3.108v-8.812h-3.108v8.812zm-37.377 63.787v-3.044h3.091v-5.073h3.139v-5.897h4.676v-6.91h1.537v-3.361h3.123v3.297h1.569v6.975h4.691v5.896h3.107v5.073h3.108v5.833h-3.108v5.199h-3.107v5.832h-4.691v6.912h-1.569v3.297h-3.123v-3.297h-1.537v-6.912h-4.676v-5.834h-3.139v-5.199h-3.091v-2.787zm24.933-81.413v7.354h-3.137v7.292h-3.091v7.357h-3.139v7.291h-3.123v-7.292h-3.123v-7.357h-3.091v-7.292h-3.139v-7.354h-3.091v7.354h-3.123v7.292h-3.123v7.357h-3.107v7.291H8.833v7.354h3.122v7.354h3.107v7.292h3.123v7.293h3.123v-7.293h3.091v-7.292h3.139v-7.354h-3.139v-8.814h3.139v5.897h3.091v11.731h1.586v7.228l-4.676.063v5.834H24.4v4.374h-3.091v7.354h-3.123v-7.354h-3.123V145.3h-3.107v-4.376H8.833v13.188h3.122v5.897h3.107v5.073h3.123v5.835h-3.123v5.199h-3.107v5.834H8.833v13.188h3.122v-4.439h3.107v-4.374h3.123v-7.292h3.123v7.292h3.091v4.374h3.139v5.897l4.676.063v7.228h-1.586v11.731h-3.091v5.897h-3.139v-8.877h3.139v-7.292h-3.139v-7.292h-3.091v-7.357h-3.123v7.357h-3.123v7.292h-3.107v7.292H8.833v7.354h3.122v7.292h3.139v7.357h3.091v7.354h3.123v7.292h3.091v-7.292h3.139v-7.354h3.091v-7.357h3.123v-7.292h3.123v7.292h3.139v7.357h3.122v7.354h3.107v7.292h3.108v-7.292h3.107v-7.354h3.122v-7.357h3.106v-7.292h3.107v-7.354h-3.108v-7.292h-3.106v-7.292h-3.122v-7.357H49.35v7.357h-3.108v7.292h-3.137v7.292h3.137v8.877h-3.137v-5.897h-3.091v-11.731h-1.569v-7.292h4.691v-5.897h3.107v-4.374h3.108v-7.292h3.107v7.292h3.122v4.374h3.123v4.439h3.091v-13.188h-3.092v-5.834h-3.123v-5.199h-3.122v-5.832h3.122v-5.073h3.123v-5.897h3.092v-13.188h-3.092v4.376h-3.123v4.374h-3.122v7.354H49.35v-7.354h-3.108v-4.374h-3.107v-5.834h-4.691v-7.292h1.569v-11.731h3.091v-5.897h3.137v8.813h-3.137v7.354h3.137v7.292h3.108v7.293h3.107v-7.293h3.122v-7.292h3.106v-7.354h3.11v-7.354h-3.108v-7.292H55.58v-7.357h-3.122v-7.292h-3.107v-7.354h-3.11v.002zm-34.286-7.292h1.539v-2.916h1.6v2.916h1.521v2.916h-1.521v2.98h-1.6v-2.98h-1.539v-2.916zm0-5.897h-1.554v4.438H8.833v5.834h1.568v4.438h1.554v4.376h4.66v-4.376h1.569v-4.438h1.523v-5.834h-1.523v-4.438h-1.569v-4.311h-4.66v4.311zm17.135 5.897h1.537v-2.916h1.586v2.916h1.537v2.916h-1.537v2.98h-1.586v-2.98H29.09v-2.916zm7.784 0h1.569v-2.916h1.569v2.916h1.537v2.916h-1.537v2.98h-1.569v-2.98h-1.569v-2.916zm-7.784-5.897h-1.554v4.438h-1.569v5.834h1.569v4.438h1.554v4.376h4.66v-4.376h3.123v4.376h4.676v-4.376h1.585v-4.438h1.523v-5.834h-1.523v-4.438h-1.585v-4.311h-4.676v4.311H33.75v-4.311h-4.66v4.311zm24.871 5.834h1.554v-2.854h1.569v2.854h1.569v2.98h-1.569v2.915h-1.569v-2.915h-1.554v-2.98zm0-10.208v4.374h-1.537v4.438h-1.569v5.834h1.569v4.374h1.537v4.376h4.693v-4.376h1.554v-4.374h1.537v-5.834h-1.537v-4.438h-1.554v-4.374h-4.693zM8.833 66.234h3.122v-8.75H8.833v8.75zm24.918 0h3.123v-8.75h-3.123v8.75zm24.934 0h3.108v-8.75h-3.108v8.75zm-37.377-20.48h3.091v-7.357h-3.091v7.357zm24.933 0h3.108v-7.357h-3.108v7.357zM8.833 23.752h3.122v-8.75H8.833v8.75zm24.918 0h3.123v-8.75h-3.123v8.75zm24.934 0h3.108v-8.75h-3.108v8.75zM15.094 38.398h3.091v-7.292h3.123v-7.354h3.091v7.354h3.139v7.292h3.091v7.357h-3.091v7.292h-3.139v7.354h-3.091v-7.354h-3.123v-7.292h-3.091v-7.357zm24.919 0h3.122v-7.292h3.107v-7.354h3.108v7.354h3.107v7.292h3.122v7.357h-3.122v7.292H49.35v7.354h-3.108v-7.354h-3.107v-7.292h-3.122v-7.357zm6.228-29.294v7.357h-3.107v7.292h-3.122v7.354h-3.139v7.292H33.75v-7.292h-3.123v-7.354h-3.091v-7.292H24.43V9.104h-3.123v7.357h-3.123v7.292h-3.091v7.354h-3.139v7.292H8.833v7.357h3.122v7.292h3.139v7.354h3.091v7.354h3.123v7.292h3.091v-7.292h3.139v-7.354h3.091v-7.354h3.123v-7.292h3.123v7.292h3.139v7.354h3.091v7.354h3.137v7.292h3.108v-7.292h3.107v-7.354h3.122v-7.354h3.106v-7.292h3.108v-7.357h-3.092v-7.292h-3.123v-7.354h-3.122v-7.292h-3.107V9.104h-3.108z" fill="#FF4B55"/>
  </g>
        </svg>
      </div>
    );
  }
);

ByFlag.displayName = "ByFlag";

export default ByFlag;
