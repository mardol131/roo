"use client";

import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Link from "next/link";
import { AdminListingSidebarTab } from "./AdminListingSidebartab";
import { useState } from "react";

export function AdminListingSidebar() {
  const [listingsOpen, setListingsOpen] = useState(false);
  return (
    <div className="bg-white border-r border-borderLight p-5 flex flex-col gap-6 items-start text-textNormal overflow-y-auto h-full w-[350px]">
      <Link
        href={"/admin/inzeraty"}
        className="animate hover:text-pink text-lg font-semibold border-b w-full text-start pb-2 border-borderLight"
      >
        Souhrnný přehled
      </Link>
      <div className="w-full flex flex-col items-start gap-5">
        <button
          onClick={() => {
            setListingsOpen(!listingsOpen);
          }}
          className="flex hover:text-pink animate text-lg font-semibold cursor-pointer justify-between items-center w-full border-b border-borderLight pb-2"
        >
          Vaše inzeráty
          {listingsOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {listingsOpen && (
          <div className="pl-5 flex flex-col gap-3 font-semibold text-base">
            <AdminListingSidebarTab />
            <AdminListingSidebarTab />
            <AdminListingSidebarTab />
            <AdminListingSidebarTab />
            <AdminListingSidebarTab />
            <button className="animate mt-5 hover:scale-110 cursor-pointer bg-linear-30 from-violet to-pink shadow-lg py-2 px-3 text-lg rounded-small text-white font-semibold animate">
              Přidat nový inzerát
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
