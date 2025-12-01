import React from "react";

type Props = {};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full overflow-hidden">
      <div className="overflow-y-scroll w-full">{children}</div>
    </div>
  );
}
