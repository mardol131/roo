"use client";

import React, { ReactNode } from "react";
import SectionWrapper from "../wrappers/SectionWrapper";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { RooLink } from "../atoms/RooLink";
import { usePathname } from "next/navigation";

type Props = {};

export default function Footer({}: Props) {
  const path = usePathname();
  if (path.startsWith("/admin")) {
    return <></>;
  }

  return (
    <div className="border-t border-borderLight px-10 pb-10 md:pb-0 flex justify-center">
      <div className="max-w-contentWrapper md:grid grid-cols-[2fr_5fr_2fr] flex flex-col justify-center gap-3 items-center w-full">
        <div className="flex md:flex-row flex-col text-sm items-center md:gap-5 gap-2 justify-center text-center md:text-start">
          <Image
            src={logo}
            width={200}
            height={200}
            alt="logo"
            className="w-20"
          />
          <p className="max-w-50">
            ROO Events, The Roosters s.r.o, 2025 <br />© All Rights Reserved{" "}
          </p>
        </div>
        <div className="font-semibold flex flex-col md:flex-row items-center md:gap-10 gap-3 text-sm justify-self-center">
          <RooLink href={"/"} text="GDRP" />
          <RooLink href={"/"} text="Obchodní podmínky" />
          <RooLink href={"/"} text="Pro média" />
          <RooLink href={"/"} text="Pro dodavatele" />
          <RooLink href={"/"} text="Mapa webu" />
          <RooLink href={"/"} text="Kontakty" />
        </div>
        <div className="flex text-xl gap-2 text-primary justify-self-end">
          <Link href={"/"}>
            <FaFacebook />
          </Link>
          <Link href={"/"}>
            <FaInstagram />
          </Link>{" "}
          <Link href={"/"}>
            <FaTiktok />
          </Link>{" "}
          <Link href={"/"}>
            <FaYoutube />
          </Link>{" "}
          <Link href={"/"}>
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
}
