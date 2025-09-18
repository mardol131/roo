import Image from "next/image";
import Link from "next/link";
import {
  FaHandHolding,
  FaHandHoldingHand,
  FaHouse,
  FaRegStar,
  FaStar,
  FaUser,
  FaXmark,
} from "react-icons/fa6";
import logo from "@/public/logo.png";
import { FaThList } from "react-icons/fa";

export function AdminSidebar() {
  return (
    <div className="bg-linear-70 from-pink to-violet relative h-full w-full flex justify-center">
      <div className="w-full px-1">
        <div className="flex flex-col gap-3 sticky top-0 text-center h-screen justify-between py-10">
          <div className="flex flex-col gap-5">
            <Link href={"/"}>
              <Image src={logo} height={200} width={200} alt="logo" />
            </Link>
            <Link
              href={"/admin"}
              className="cursor-pointer flex flex-col items-center p-2 justify-center gap-3 text-white font-semibold hover:bg-white aspect-square w-full hover:text-textNormal rounded-medium animate"
            >
              <FaHouse className="text-2xl" />
              <p className="text-sm font-bold">Domů</p>
            </Link>
            <Link
              href={"/admin/inzeraty"}
              className="cursor-pointer flex flex-col items-center p-2 justify-center gap-3 text-white font-semibold hover:bg-white aspect-square w-full hover:text-textNormal rounded-medium animate"
            >
              <FaThList className="text-2xl" />
              <p className="text-sm font-bold">Inzeráty</p>
            </Link>
            <Link
              href={"/admin/sluzby"}
              className="cursor-pointer flex flex-col items-center p-2 justify-center gap-3 text-white font-semibold hover:bg-white aspect-square w-full hover:text-textNormal rounded-medium animate"
            >
              <FaHandHoldingHand className="text-2xl" />
              <p className="text-sm font-bold">Objednat služby</p>
            </Link>
            <Link
              href={"/admin/ucet"}
              className="cursor-pointer flex flex-col items-center p-2 justify-center gap-3 text-white font-semibold hover:bg-white aspect-square w-full hover:text-textNormal rounded-medium animate"
            >
              <FaUser className="text-2xl" />
              <p className="text-sm font-bold">Účet</p>
            </Link>{" "}
          </div>
          <div className="flex flex-col gap-10">
            <button className="cursor-pointer flex flex-col items-center justify-center gap-3 text-white font-semibold hover:bg-white w-full hover:text-textNormal rounded-small animate">
              Odhlásit se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
