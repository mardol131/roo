import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function HeaderSettingsWrapper({ children }: Props) {
  return <div className="absolute  w-full flex justify-center">{children}</div>;
}
