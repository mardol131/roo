import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  ref: React.RefObject<HTMLDivElement | null>;
};

export default function HeaderSettingsWrapper({ ref, children }: Props) {
  return (
    <div
      ref={ref}
      className="absolute top-full w-full flex justify-center max-w-contentWrapper"
    >
      {children}
    </div>
  );
}
