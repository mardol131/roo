import React from "react";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass, FaPerson, FaUser } from "react-icons/fa6";

type Props = {};

export default function HeaderDesktop({}: Props) {
  return (
    <div className="px-[74px] flex flex-col items-center w-full border-b border-zinc-200 pb-5">
      <div className="w-full max-w-[1400px] grid grid-cols-[1fr_3fr_1fr] items-center">
        <Image src={logo} width={100} height={100} alt="logo" />
        <div className="rounded-full bg-linear-30 from-orange via-pink to-violet grid grid-cols-3 text-white font-semibold">
          <button className="py-2">Venues</button>
          <button className="border-x-2 border-white">Venues</button>
          <button className="py-2">Venues</button>
        </div>
        <div className="text-center flex justify-end gap-11">
          <Link href={"/"} className="text-pink">
            Staň se <br />
            <span className="uppercase">dodavatelem</span>
          </Link>
          <div className="bg-orange rounded-full w-10 h-10 flex items-center justify-center text-white">
            <FaUser />
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] w-full rounded-full bg-linear-30 from-orange via-pink to-violet p-0.5">
        <div className="bg-white rounded-full grid grid-cols-[3fr_3fr_3fr_1fr] p-0.5 pl-10 gap-3">
          <input
            type="text"
            placeholder="What kind of event do you plan?"
            className="border-r-2 border-pink"
          />
          <input
            type="text"
            placeholder="Where?"
            className="border-r-2 border-pink"
          />
          <input type="text" placeholder="Number of guests" />
          <button className="w-13 h-13 flex items-center justify-center bg-linear-30 from-orange via-pink to-violet rounded-full text-white text-xl justify-self-end">
            <FaMagnifyingGlass />
          </button>
        </div>
      </div>
    </div>
  );
}
