import React from "react";
import { FaThList } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="grid grid-cols-[110px_1fr]">
      <div className="bg-blue-900 relative h-full w-full flex justify-center">
        <div className="w-full px-3">
          <div className="flex flex-col gap-3 sticky top-0 text-center h-screen justify-between py-10">
            <div className="">
              {" "}
              <div className="cursor-pointer flex flex-col items-center p-2 justify-center gap-3 text-white font-semibold hover:bg-white aspect-square w-full hover:text-textNormal rounded-medium animate">
                <FaThList className="text-2xl" />
                <p className="text-sm font-bold">Inzerce</p>
              </div>
              <div className="cursor-pointer flex flex-col items-center p-2 justify-center gap-3 text-white font-semibold hover:bg-white aspect-square w-full hover:text-textNormal rounded-medium animate">
                <FaUser className="text-2xl" />
                <p className="text-sm font-bold">Účet</p>
              </div>{" "}
            </div>
            <button className="cursor-pointer flex flex-col items-center justify-center gap-3 text-white font-semibold hover:bg-white w-full hover:text-textNormal rounded-small animate">
              Odhlásit se
            </button>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
