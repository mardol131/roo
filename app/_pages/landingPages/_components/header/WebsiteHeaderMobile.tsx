import Button from "@/app/_global/atoms/Button";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { TiThMenu } from "react-icons/ti";

export function WebsiteHeaderMobile() {
  return (
    <div className="z-50 md:hidden w-full fixed flex justify-center p-4">
      <div className="bg-white w-full flex justify-between items-center rounded-full px-7 shadow-lg">
        <Link href={"/home"}>
          <Image
            src={logo}
            width={200}
            height={200}
            alt="logo"
            className="w-14"
          />
        </Link>
        <div className="hidden flex items-center justify-center gap-10 text-lg font-semibold">
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
          <Link href={"#pain"}>
            <Button
              text="Přidej se k nám"
              size="md"
              bgColor="primarySecondary"
              textColor="white"
              rounding="full"
            />
          </Link>
        </div>

        <TiThMenu className="text-primary text-2xl" />
      </div>
    </div>
  );
}
