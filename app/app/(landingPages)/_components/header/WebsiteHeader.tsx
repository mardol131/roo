import Button, { ButtonProps } from "@/app/_global/atoms/Button";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { headerLinkList } from "./headerLinkList";

type Props = {
  button?: ButtonProps;
};

export function WebsiteHeader({ button }: Props) {
  const buttonProps: ButtonProps = {
    text: button?.text || "Přidej se k nám",
    size: button?.size || "xl",
    rounding: button?.rounding || "full",
    bgColor: button?.bgColor || "primarySecondary",
    textColor: button?.textColor || "white",
    link: button?.link || "pridej-se",
  };

  return (
    <div className="hidden z-50 w-full sticky top-0 lg:flex justify-center pt-4 px-4 -mb-10">
      <div className="bg-white border border-borderLight max-w-contentWrapper w-full flex justify-between items-center rounded-full p-3 shadow-lg">
        <Link href={"/home"}>
          <Image
            src={logo}
            width={200}
            height={200}
            alt="logo"
            className="w-19 ml-4"
          />
        </Link>
        <div className="flex items-center justify-center gap-7 max-lg:gap-5 text-lg font-semibold">
          {headerLinkList.map((link, i) => {
            return (
              <Link
                key={i}
                href={link.link}
                className="hover:text-primary animate"
              >
                {link.text}
              </Link>
            );
          })}
          <Button {...buttonProps} />
        </div>
      </div>
    </div>
  );
}
