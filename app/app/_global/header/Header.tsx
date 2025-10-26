"use client";

import React from "react";
import HeaderDesktop from "./HeaderDesktop";
import { useParams, usePathname } from "next/navigation";

type Props = {};

export default function Header({}: Props) {
  const pathname = usePathname();
  const params = useParams();
  console.log(params);
  if (
    "pageSlug" in params ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/prihlasit-se") ||
    pathname.startsWith("/registrovat-se") ||
    pathname.startsWith("/test") ||
    pathname.startsWith("/stranky")
  ) {
    return <></>;
  } else {
    return <HeaderDesktop />;
  }
}
