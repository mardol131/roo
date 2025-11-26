"use client";

import Text from "@/app/_components/atoms/Text";
import logo from "@/public/logo.png";
import { isDeviceWidth } from "@roo/shared/src/functions/isDeviceWidth";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { BsPostcard, BsPostcardFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { FaHandHoldingHand, FaHouse, FaUser } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { LuMenu } from "react-icons/lu";
import { TiThMenu } from "react-icons/ti";

type AdminSidebarButtonProps = {
  icon: IconType;
  href?: string;
  onClick?: () => void;
  label?: string;
};

export function AdminSidebarButton(props: AdminSidebarButtonProps) {
  const content = (
    <props.icon
      onClick={props.onClick}
      className="group-hover:text-white animate"
    />
  );

  if (props.href) {
    return (
      <Link
        href={props.href}
        className="cursor-pointer group md:aspect-square flex text-xl items-center justify-center gap-3 text-primary font-semibold hover:bg-primary hover:text-white bg-trans hover:shadow-md shadow-black/20 rounded-full animate"
      >
        {content}
      </Link>
    );
  }
  return content;
}

export function AdminMobileSidebarButton(props: AdminSidebarButtonProps) {
  const content = (
    <div className="flex hover:shadow-lg group flex-col gap-1 items-center justify-center rounded-lg hover:text-white text-primary hover:bg-primary animate w-full md:aspect-square">
      <props.icon
        onClick={props.onClick}
        className="text-sm md:text-lg group-hover:text-white animate"
      />
      {props.label && (
        <Text
          text={props.label}
          tag="p"
          size="bodySm"
          color="black"
          fontWeight="semibold"
          className="group-hover:text-white animate"
        />
      )}
    </div>
  );

  if (props.href) {
    return (
      <Link className="w-full" href={props.href}>
        {content}
      </Link>
    );
  }
  return content;
}

function login() {
  const res = fetch("http://localhost:3001/api/users/login", {
    method: "post",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "dolezalmartin131@gmail.com",
      password: "C9jArhOwKM8cUa",
    }),
    credentials: "include",
  });
}

function create() {
  const res = fetch("http://localhost:3001/api/categories", {
    method: "post",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Test",
      description: "Hello there",
    }),
  });
}

export function AdminMenu() {
  const isDesktop = isDeviceWidth("md");

  const menuList: AdminSidebarButtonProps[] = [
    { href: "/admin", icon: FaHouse, label: "Domů" },
    { href: "/admin/inzeraty", icon: BsPostcardFill, label: "Inzeráty" },
    { href: "/admin/sluzby", icon: FaHandHoldingHand, label: "Služby" },
    { href: "/admin/ucet", icon: FaUser, label: "Účet" },
  ];

  const mobileMenuList: AdminSidebarButtonProps[] = [
    { href: "/admin", icon: FaHouse, label: "Domů" },
    { href: "/admin/inzeraty", icon: BsPostcardFill, label: "Inzeráty" },
    { href: "/admin/ucet", icon: FaUser, label: "Účet" },
    { icon: TiThMenu, label: "Menu" },
  ];

  return (
    <>
      {" "}
      <div className="max-md:hidden relative shrink-0 h-full w-full flex justify-center">
        <div className="w-full h-full md:py-10">
          <div className="flex flex-col gap-3 sticky top-0 text-center justify-between max-md:items-center max-md:justify-center h-full border-borderLight rounded-r-3xl p-2">
            <div className="flex flex-col items-center justify-start gap-5">
              <Link href={"/"}>
                <Image src={logo} height={200} width={200} alt="logo" />
              </Link>
              {menuList.map((button) => {
                return (
                  <AdminMobileSidebarButton
                    key={button.href}
                    href={button.href}
                    icon={button.icon}
                    label={button.label}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden relative border border-borderLight bg-white shadow-md rounded-md my-2 shrink-0 row-start-2 w-full flex justify-center">
        <div className="w-full h-full">
          <div className="flex flex-col gap-3 sticky top-0 text-center justify-between items-center h-full border-borderLight rounded-r-3xl p-2">
            <div className="flex text-xl px-5 md:flex-col min-h-10 items-center justify-between w-full gap-3">
              {mobileMenuList.map((button, i) => {
                return (
                  <AdminMobileSidebarButton
                    key={button.href || i}
                    href={button.href}
                    icon={button.icon}
                    label={button.label}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
