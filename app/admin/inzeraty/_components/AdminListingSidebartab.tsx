"use client";

import Image from "next/image";
import Link from "next/link";
import image from "@/app/_images/test.jpg";
import { useState } from "react";
import { IoImage } from "react-icons/io5";

export function AdminListingSidebarTab() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className="animate cursor-pointer font-semibold flex items-center gap-4 hover:bg-compAdmin/20 text-base w-full text-start text-textMedium p-2 rounded-md"
    >
      <Link
        href={"/admin/inzeraty/546456sd"}
        className="flex justify-start gap-3 items-center"
      >
        <IoImage />
        <p className="text-textMedium animate text-base">Mlýn Davídkov</p>
      </Link>
      {isActive && (
        <div className="pl-10 flex flex-col gap-2 text-sm">
          <p>Stavení</p>
          <p>Stodola</p>
          <p>Pergola</p>
          <p>Hrad</p>
        </div>
      )}
    </div>
  );
}
