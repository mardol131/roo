"use client";

import { FaChevronDown, FaChevronUp, FaPlus } from "react-icons/fa6";
import Link from "next/link";
import { AdminListingSidebarTab } from "./AdminListingSidebartab";
import { ReactNode, useState } from "react";
import { FaBoxes } from "react-icons/fa";
import { IoImage, IoImages } from "react-icons/io5";

export function AdminListingSidebar() {
  const [listingsOpen, setListingsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-3 w-full">
      <SidebarButton
        href={"/admin/inzeraty"}
        text="Souhrn"
        icon={<FaBoxes />}
      />
      <div className="w-full flex flex-col items-start gap-5">
        <SidebarButton
          onClick={() => {
            setListingsOpen(!listingsOpen);
          }}
          text="Vaše inzeráty"
          icon={<IoImages />}
        />

        {listingsOpen && (
          <>
            <div className="ml-10 flex flex-col gap-1 font-semibold text-base">
              <AdminListingSidebarTab />
              <AdminListingSidebarTab />
              <AdminListingSidebarTab />
              <AdminListingSidebarTab />
              <AdminListingSidebarTab />
              <button className="text-textMedium text-lg hover:bg-compAdmin/20 self-center flex items-center justify-center w-10 h-10 animate rounded-small">
                <FaPlus />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

type SidebarButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
};

export function SidebarButton(props: SidebarButtonProps) {
  const className =
    "animate cursor-pointer font-semibold flex items-center gap-4 hover:bg-compAdmin/20 text-base w-full text-start text-textMedium p-2 rounded-md";

  if (props.href) {
    return (
      <Link href={props.href} className={className}>
        {props.icon && (
          <div className="text-xl text-textNormal">{props.icon}</div>
        )}
        <p>{props.text}</p>
      </Link>
    );
  }
  return (
    <button onClick={props.onClick} className={className}>
      {props.icon && (
        <div className="text-xl text-textNormal">{props.icon}</div>
      )}
      <p>{props.text}</p>
    </button>
  );
}
