"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaHandHolding,
  FaHandHoldingHand,
  FaHouse,
  FaRegStar,
  FaStar,
  FaUser,
  FaXmark,
} from "react-icons/fa6";
import logo from "@/public/logo.png";
import { FaThList } from "react-icons/fa";
import { ReactNode } from "react";

type AdminSidebarButtonProps = {
  icon: ReactNode;
  href: string;
};

export function AdminSidebarButton(props: AdminSidebarButtonProps) {
  return (
    <Link
      href={props.href}
      className="cursor-pointer w-full aspect-square flex text-xl items-center justify-center gap-3 text-primary font-semibold hover:bg-primary/80 hover:text-white bg-trans hover:shadow-md shadow-black/20 rounded-full animate"
    >
      {props.icon}
    </Link>
  );
}

function login() {
  console.log("login");
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

export function AdminSidebar() {
  return (
    <div className="relative h-screen w-full flex justify-center">
      <div className="w-full h-screen py-10">
        <div className="flex flex-col gap-3 sticky top-0 text-center justify-between  h-full border-borderLight rounded-r-3xl p-2">
          <div className="flex flex-col items-center justify-start gap-3">
            <Link href={"/"}>
              <Image src={logo} height={200} width={200} alt="logo" />
            </Link>
            <AdminSidebarButton href="/admin" icon={<FaHouse />} />
            <AdminSidebarButton href="/admin/inzeraty" icon={<FaThList />} />
            <AdminSidebarButton
              href="/admin/sluzby"
              icon={<FaHandHoldingHand />}
            />
            <AdminSidebarButton href="/admin/ucet" icon={<FaUser />} />
          </div>
        </div>
      </div>
    </div>
  );
}
