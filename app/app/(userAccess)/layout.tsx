import Text from "@/app/_components/atoms/Text";
import logoWhite from "@/public/logoWhite.png";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

const menuList: { text: string; href: string }[] = [
  { text: "Katalog", href: "/" },
];

export default function layout({ children }: PropsWithChildren) {
  return (
    <div className="relative w-full bg-linear-140 from-tertiaryDark to-70% to-primary p-20">
      <div className="grid grid-cols-2 h-full">
        <div className="flex flex-col items-start justify-between">
          <div className="col-span-2 flex items-center gap-10">
            <Image
              src={logoWhite}
              width={500}
              height={500}
              alt="logo"
              className="max-h-15 h-full w-auto"
            />
          </div>
          <Text
            className="italic"
            level="label5"
            color="white"
            text="Your event starts here"
          />
        </div>
        <div className="col-start-2 flex items-center justify-end h-full z-10">
          <div className="p-10 max-w-150 w-full bg-white rounded-large shadow-2xl flex flex-col items-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
