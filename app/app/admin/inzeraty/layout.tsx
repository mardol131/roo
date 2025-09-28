import React from "react";
import AdminPageSidebarWrapper from "../_components/AdminPageSidebarWrapper";
import { AdminListingSidebar } from "./_components/AdminListingSidebar";

type Props = {};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-fit overflow-hidden">
      <div className="overflow-y-scroll w-full">{children}</div>
    </div>
  );
}
