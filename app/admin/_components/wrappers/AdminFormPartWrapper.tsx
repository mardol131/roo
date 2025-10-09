import React, { PropsWithChildren } from "react";

export type AdminFormPartWrapperProps = PropsWithChildren & {
  disabled?: boolean;
};

export default function AdminFormPartWrapper({
  children,
  disabled,
}: AdminFormPartWrapperProps) {
  return (
    <div
      aria-disabled={disabled}
      className={`${
        disabled && "opacity-50"
      } bg-white shadow-lg/5 animate-popup border max-w-200 w-full border-borderLight rounded-medium p-4 gap-3 flex flex-col`}
    >
      {children}
    </div>
  );
}
