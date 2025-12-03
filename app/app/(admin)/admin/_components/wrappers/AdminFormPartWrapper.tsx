import Text from "@/app/_components/atoms/text/Text";
import React, { PropsWithChildren } from "react";

export type AdminFormPartWrapperProps = PropsWithChildren & {
  disabled?: boolean;
  className?: string;
  title?: string;
  subtitle?: string;
};

export default function AdminFormPartWrapper({
  children,
  disabled,
  className,
  title,
  subtitle,
}: AdminFormPartWrapperProps) {
  return (
    <div
      aria-disabled={disabled}
      className={`${className} ${
        disabled && "opacity-50"
      } bg-white shadow-lg/5 border w-full relative max-w-200 border-borderLight rounded-medium p-4 gap-3 md:grid flex flex-col grid-cols-2`}
    >
      {title && (
        <Text
          text={title}
          tag="h4"
          color="black"
          className="text-center pt-2 first:pb-2 col-span-2"
          size="headingSm"
          fontWeight="semibold"
        />
      )}
      {subtitle && (
        <Text
          text={subtitle}
          tag="p"
          color="black"
          className="text-center col-span-2"
          size="bodyLg"
        />
      )}
      {children}
    </div>
  );
}
