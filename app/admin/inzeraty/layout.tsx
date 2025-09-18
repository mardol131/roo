import React from "react";
import { AdminListingSidebar } from "./_components/AdminListingSidebar";

type Props = {};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full overflow-hidden">
      <AdminListingSidebar />
      <div className="overflow-y-scroll w-full">{children}</div>
    </div>
  );
}
