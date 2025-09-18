"use client";

import { useState } from "react";
import { FaShop } from "react-icons/fa6";

export type RooServiceProps = {
  name: string;
};

export function RooService(props: RooServiceProps) {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="rounded-medium p-5 bg-linear-60 text-center from-pink h-full text-white to-violet grid grid-rows-3 items-center justify-items-center gap-5">
      <h5 className="font-semibold ">{props.name}</h5>
      <FaShop className="text-3xl" />
      <button className="font-semibold text-black p-2 bg-white rounded-small">
        Zobrazit
      </button>
    </div>
  );
}
