"use client";

import Image from "next/image";
import Link from "next/link";
import image from "@/app/_images/test.jpg";
import { useState } from "react";

export function AdminListingSidebarTab() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className="flex flex-col gap-4 group"
    >
      <Link
        href={"/admin/inzeraty/546456sd"}
        className="flex justify-start gap-3 items-center"
      >
        <Image
          src={image}
          width={100}
          height={100}
          alt="listing"
          className="w-12 h-12 object-cover rounded-medium shadow-md"
        />
        <p className="group-hover:text-pink animate">Mlýn Davídkov</p>{" "}
      </Link>
      {isActive && (
        <div className="pl-10 flex flex-col gap-2">
          <p>- Stavení</p>
          <p>- Stodola</p>
          <p>- Pergola</p>
          <p>- Hrad</p>
        </div>
      )}
    </div>
  );
}
