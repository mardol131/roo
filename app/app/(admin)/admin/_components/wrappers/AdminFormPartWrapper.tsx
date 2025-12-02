import React, { PropsWithChildren } from "react";

export type AdminFormPartWrapperProps = PropsWithChildren & {
  disabled?: boolean;
  className?: string;
};

export default function AdminFormPartWrapper({
  children,
  disabled,
  className,
}: AdminFormPartWrapperProps) {
  return (
    <div
      aria-disabled={disabled}
      className={`${className} ${
        disabled && "opacity-50"
      } bg-white shadow-lg/5 border w-full relative max-w-200 border-borderLight rounded-medium p-4 gap-3 md:grid flex flex-col grid-cols-2`}
    >
      {children}
    </div>
  );
}
