"use client";

import { useState } from "react";
import { FaShop } from "react-icons/fa6";

export type RooServiceProps = {
  name: string;
};

export function RooService(props: RooServiceProps) {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="rounded-medium p-5 bg-linear-60 from-pink text-white to-violet aspect-square flex flex-col items-center justify-center gap-5">
      <h4 className="font-semibold ">{props.name}</h4>
      <FaShop className="text-3xl" />
      <button className="font-semibold text-black p-2 bg-white rounded-small">
        Chcí vědět více
      </button>
    </div>
  );
}
