import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function HeaderSettingsWrapper({ children }: Props) {
  return (
    <div className="absolute mt-20 w-full h-60 flex justify-center px-[74px]">
      <div className=" max-w-contentWrapper w-full flex justify-center items-start">
        {children}
      </div>
    </div>
  );
}
