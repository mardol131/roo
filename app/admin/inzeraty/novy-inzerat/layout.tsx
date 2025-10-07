import StoreProvider from "@/app/_redux/StoreProvider";
import React from "react";

type Props = {};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <StoreProvider>{children}</StoreProvider>;
}
