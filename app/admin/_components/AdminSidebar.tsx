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
      className="cursor-pointer flex flex-col text-xl items-center justify-center gap-3 text-slate-500 font-semibold hover:bg-compAdmin/80 aspect-square w-full rounded-medium animate"
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
    <div className="bg-white relative h-screen w-full flex justify-center">
      <div className="w-full p-1">
        <div className="flex flex-col gap-3 sticky top-0 text-center justify-between">
          <div className="flex flex-col gap-3">
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
            <button onClick={login}>Login</button>
            <button onClick={create}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}
