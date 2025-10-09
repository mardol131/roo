import React, { PropsWithChildren } from "react";

export default function AdminFormPartWrapper({ children }: PropsWithChildren) {
  return (
    <div className="bg-white shadow-lg/5 animate-popup border max-w-200 w-full border-borderLight rounded-medium p-4 gap-3 flex flex-col">
      {children}
    </div>
  );
}
