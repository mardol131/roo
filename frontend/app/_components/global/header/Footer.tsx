import React, { ReactNode } from "react";
import SectionWrapper from "../../wrappers/SectionWrapper";
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

type Props = {};

export default function Footer({}: Props) {
  return (
    <SectionWrapper classnameOne="py-5 mt-20 border-t border-borderLight">
      <div className="grid grid-cols-[2fr_5fr_2fr] items-center w-full">
        <div className="flex text-sm items-center gap-5">
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
        <div className="font-semibold flex gap-10 text-sm justify-self-center">
          <RooLink href={"/"} text="GDRP" />
          <RooLink href={"/"} text="Obchodní podmínky" />
          <RooLink href={"/"} text="Pro média" />
          <RooLink href={"/"} text="Pro dodavatele" />
          <RooLink href={"/"} text="Mapa webu" />
          <RooLink href={"/"} text="Kontakty" />
        </div>
        <div className="flex text-xl gap-2 text-pink justify-self-end">
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
    </SectionWrapper>
  );
}
