import Image from "next/image";
import React, { PropsWithChildren } from "react";
import Text from "@/app/_global/atoms/Text";
import {
  AdminFormCheckbox,
  AdminFormInput,
} from "@/app/(admin)/admin/new-service/_components/AdminFormInput";
import Button from "@/app/_global/atoms/Button";
import logoWhite from "@/public/logoWhite.png";
import Link from "next/link";

export default function layout({ children }: PropsWithChildren) {
  return (
    <div className="relative grid grid-cols-2 w-full h-screen bg-linear-140 from-qart to-70% to-primary   p-20">
      <div className="flex flex-col items-start justify-between">
        <div className="col-span-2 flex items-center gap-10">
          <Image
            src={logoWhite}
            width={500}
            height={500}
            alt="logo"
            className="max-h-15 h-full w-auto"
          />
          <ul className="text-white font-semibold flex gap-10 italic">
            <li>
              <Link href={"/"}>
                <Text
                  text="Katalog"
                  color="white"
                  level="label3"
                  className="hover:scale-105 animate"
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <Text
                  text="FAQ"
                  color="white"
                  level="label3"
                  className="hover:scale-105 animate"
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <Text
                  text="Jak to funguje"
                  color="white"
                  level="label3"
                  className="hover:scale-105 animate"
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <Text
                  text="Hlavní stránka"
                  color="white"
                  level="label3"
                  className="hover:scale-105 animate"
                />
              </Link>
            </li>
          </ul>
        </div>
        <Text
          className="italic"
          level="h3"
          color="white"
          text="Your event starts here"
        />
      </div>
      <div className="col-start-2 flex items-start justify-end h-full z-10">
        {children}
      </div>
    </div>
  );
}
