import Button, { ButtonProps } from "@/app/_global/atoms/Button";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { headerLinkList } from "./headerLinkList";

type Props = {
  button?: ButtonProps;
};

export function WebsiteHeader({ button }: Props) {
  const buttonProps: ButtonProps = button?.text
    ? button
    : {
        text: "Přidej se k nám",
        size: "xl",
        rounding: "full",
        bgColor: "primarySecondary",
        textColor: "white",
      };

  return (
    <div className="hidden z-50 w-full sticky top-0 md:flex justify-center pt-4 px-4 -mb-10">
      <div className="bg-white border border-borderLight max-w-contentWrapper w-full flex justify-between items-center rounded-full px-5 shadow-lg">
        <Link href={"/home"}>
          <Image
            src={logo}
            width={200}
            height={200}
            alt="logo"
            className="w-19"
          />
        </Link>
        <div className="flex items-center justify-center gap-10 text-lg font-semibold">
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
