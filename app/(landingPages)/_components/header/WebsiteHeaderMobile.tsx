"use client";

import Button, { ButtonProps } from "@/app/_global/atoms/Button";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { TiThMenu } from "react-icons/ti";
import { useRef, useState } from "react";
import { useClickOutside } from "@/app/_hooks/useClickOutside";
import { LuMenu } from "react-icons/lu";

type Props = {
  button: ButtonProps;
};

export function WebsiteHeaderMobile({ button }: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function closeDropdownHandler() {
    setShowDropdown(false);
  }
  useClickOutside(dropdownRef, closeDropdownHandler);

  return (
    <div
      ref={dropdownRef}
      className="z-50 md:hidden w-full fixed flex justify-center px-4"
    >
      <div className="bg-white w-full border border-borderLight flex flex-col justify-between items-center rounded-b-xl px-7 shadow-lg">
        <div className="w-full justify-between flex items-center">
          <Link href={"/home"}>
            <Image
              src={logo}
              width={200}
              height={200}
              alt="logo"
              className="w-16"
            />
          </Link>
          <button
            onClick={() => {
              setShowDropdown(!showDropdown);
            }}
          >
            <LuMenu className="text-black text-3xl" />
          </button>
        </div>
        {showDropdown && (
          <div className="flex flex-col items-center pb-10 justify-center gap-10 text-lg font-semibold">
            <Link href={"#Roo"} className="hover:text-primary animate">
              Co je ROO?
            </Link>
            <Link href={"#Roo"} className="hover:text-primary animate">
              Blog
            </Link>
            <Link href={"#Roo"} className="hover:text-primary animate">
              O nás
            </Link>
            <Link href={"#Roo"} className="hover:text-primary animate">
              Kontakt
            </Link>

            <Button {...button} />
          </div>
        )}
      </div>
    </div>
  );
}
