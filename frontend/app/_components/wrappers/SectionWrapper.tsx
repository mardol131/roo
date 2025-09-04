import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SectionWrapper({ children }: Props) {
  return (
    <div className="w-full flex justify-center px-[74px]">
      <div className="max-w-contentWrapper w-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
