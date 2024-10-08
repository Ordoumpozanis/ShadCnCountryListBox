
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type KhFlagProps = {
  className?: string;
};

const KhFlag = forwardRef<HTMLDivElement, KhFlagProps>(
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
    <path fill="#FF4B55" d="M0 79.724h511.999v176.551H0z"/>
    <path fill="#F5F5F5" d="M372.816 234.933v-12.517h-4.172v-8.344h-4.173v-8.343h-4.172v-8.344h-12.516v-25.032h-.001l4.173-4.172v-12.516h-4.172v-8.344h-4.172v-12.516h-4.171v-8.344h-4.172v-8.344h-4.172v-4.172h-8.345v4.172h-4.172v8.344h-4.172v8.344h-4.171v12.516h-4.172v8.344h-25.033v-12.516h-4.171v-12.516h-4.172v-12.516h-4.172v-8.344h-4.172v-8.344h-4.172v-4.172h-2.086v-4.172h-4.172v4.172h-2.087v4.172h-4.171v8.344h-4.172v8.344h-4.172v12.516h-4.172v12.516h-4.172v12.516h-25.032v-8.344h-4.172v-12.516h-4.172v-8.344h-4.172v-8.344h-4.172v-4.172h-8.344v4.172h-4.172v8.344h-4.172v8.344h-4.172v12.516h-4.172v8.344h-4.172v12.516l4.17 4.172h.002v25.032h-12.515v8.344h-4.172v8.343h-4.173v8.344h-4.172v12.517h-4.172v12.515h241.975v-12.515z"/>
  </g>
        </svg>
      </div>
    );
  }
);

KhFlag.displayName = "KhFlag";

export default KhFlag;
