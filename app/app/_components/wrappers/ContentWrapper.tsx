"use client";

import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ContentWrapper({ children }: Props) {
  const pathname = usePathname();

  let offsetClass = "pt-64";

  if (pathname.startsWith("/inzerat") || pathname.startsWith("/kategorie"))
    offsetClass = "pt-54";

  return <div className={offsetClass}>{children}</div>;
}
