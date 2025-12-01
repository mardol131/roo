import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-fit overflow-hidden">
      <div className="overflow-y-auto w-full">{children}</div>
    </div>
  );
}
