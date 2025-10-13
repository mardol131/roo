import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AdminPageSidebarWrapper({ children }: Props) {
  return (
    <div className="bg-gray-50 border-r border-borderLight p-2 flex flex-col items-start justify-start overflow-y-auto h-full min-w-60">
      {children}
    </div>
  );
}
