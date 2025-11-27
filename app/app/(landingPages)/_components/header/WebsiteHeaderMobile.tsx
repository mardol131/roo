"use client";

import Button, { ButtonProps } from "@/app/_components/atoms/Button";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { TiThMenu } from "react-icons/ti";
import { useRef, useState } from "react";
import { useClickOutside } from "@/app/_hooks/useClickOutside";
import { LuMenu } from "react-icons/lu";
import { headerLinkList } from "./headerLinkList";
import { useTranslations } from "next-intl";

type Props = {
  button?: ButtonProps;
};

export function WebsiteHeaderMobile({ button }: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function closeDropdownHandler() {
    setShowDropdown(false);
  }
  useClickOutside(dropdownRef, closeDropdownHandler);

  const t = useTranslations("landingPagesHeader.links");

  const buttonProps: ButtonProps = {
    text: button?.text || "Přidej se k nám",
    size: button?.size || "xl",
    rounding: button?.rounding || "full",
    bgColor: button?.bgColor || "primarySecondary",
    textColor: button?.textColor || "white",
    link: button?.link || "pridej-se",
  };

  return (
    <div
      ref={dropdownRef}
      className="z-50 lg:hidden w-full sticky top-0 flex justify-center px-4 -mb-10"
    >
      <div className="bg-white w-full border border-borderLight flex flex-col justify-between items-center rounded-b-xl p-4 shadow-xl">
        <div className="w-full justify-between flex items-center">
          <Link href={"/stranky/co-je-roo"}>
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
            <LuMenu className="text-primary text-3xl" />
          </button>
        </div>
        {showDropdown && (
          <div className="flex flex-col items-center pb-10 justify-center gap-10 text-lg font-semibold">
            {headerLinkList.map((link, i) => {
              return (
                <Link
                  key={i}
                  href={link.link}
                  className="hover:text-primary animate"
                >
                  {t(link.value)}
                </Link>
              );
            })}
            <Button {...buttonProps} />
          </div>
        )}
      </div>
    </div>
  );
}
