import React from "react";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass, FaPerson, FaUser } from "react-icons/fa6";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

type Props = {};

export default function HeaderDesktop({}: Props) {
  return (
    <div className="px-[74px] flex flex-col items-center w-full border-b border-zinc-100 pb-5">
      <div className="w-full max-w-contentWrapper grid grid-cols-[1fr_3fr_1fr] items-center">
        <Image src={logo} width={100} height={100} alt="logo" />
        <div className="rounded-full bg-linear-30 from-orange via-pink to-violet grid grid-cols-3 text-white font-semibold shadow-lg">
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
      <div className="max-w-[800px] w-full rounded-full bg-linear-30 from-orange via-pink to-violet p-0.5 shadow-lg">
        <div className="bg-white rounded-full p-0.5 flex gap-3">
          <div className="grid grid-cols-4">
            <div className="flex items-stretch gap-6 border-r-2 border-pink px-4">
              <input
                type="text"
                placeholder="Typ akce"
                className="self-center outline-0 focus:border-b-2 border-orange/15"
              />
            </div>
            <div className="flex items-stretch gap-3 border-r-2 border-pink px-4">
              <FaMapMarkerAlt className="text-pink text-xl self-center" />
              <input
                type="text"
                placeholder="Kde?"
                className="w-full self-center outline-0 focus:border-b-2 border-pink/15"
              />
            </div>
            <div className="flex items-stretch gap-6 border-r-2 border-pink px-4">
              <FaCalendar className="text-pink text-xl self-center" />
              <input
                type="text"
                placeholder="Kdy?"
                className="w-full self-center outline-0 focus:border-b-2 border-pink/15"
              />
            </div>
            <div className="flex items-stretch gap-6 px-4">
              <FaUser className="text-pink text-xl self-center" />
              <input
                type="text"
                placeholder="Pro kolik osob?"
                className="max-w-full w-full self-center outline-0 focus:border-b-2 border-violet/15"
              />
            </div>
          </div>
          <button className="shrink-0 w-13 h-13 flex items-center justify-center bg-linear-30 from-orange via-pink to-violet rounded-full text-white text-xl justify-self-end">
            <FaMagnifyingGlass />
          </button>
        </div>
      </div>
    </div>
  );
}
