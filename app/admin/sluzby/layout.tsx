import React from "react";
import AdminPageSidebarWrapper from "../_components/AdminPageSidebarWrapper";

type Props = {};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full overflow-hidden">
      <AdminPageSidebarWrapper>
        <div></div>
      </AdminPageSidebarWrapper>
      <div className="overflow-y-scroll w-full">{children}</div>
    </div>
  );
}
