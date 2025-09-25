"use client";

import React from "react";
import HeaderDesktop from "./HeaderDesktop";
import { usePathname } from "next/navigation";

type Props = {};

export default function Header({}: Props) {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) {
    return <></>;
  } else {
    return <HeaderDesktop />;
  }
}
