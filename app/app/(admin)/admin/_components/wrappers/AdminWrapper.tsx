import React, { PropsWithChildren } from "react";

export default function AdminWrapper({ children }: PropsWithChildren) {
  return <div className="w-full h-full p-4">{children}</div>;
}
