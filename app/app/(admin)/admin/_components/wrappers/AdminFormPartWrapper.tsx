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
      } bg-white shadow-lg/5 animate-popup border w-full border-borderLight rounded-medium p-4 gap-3 flex flex-col`}
    >
      {children}
    </div>
  );
}
