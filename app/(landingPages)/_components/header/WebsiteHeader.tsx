import Button, { ButtonProps } from "@/app/_global/atoms/Button";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

type Props = {
  button: ButtonProps;
};

export function WebsiteHeader({ button }: Props) {
  return (
    <div className="hidden z-50 w-full sticky top-0 md:flex justify-center py-4 px-4">
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
        </div>
        <Button {...button} />
      </div>
    </div>
  );
}
