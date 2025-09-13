"use client";

import { act, useState } from "react";
import { FaCheckSquare } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";

export type RooCheckboxProps = {
  text: string;
  value: number;
};

export function Checkbox(props: RooCheckboxProps) {
  const [active, setActive] = useState(false);

  const types = {
    active: { border: "border-pink", bg: "bg-pink" },
    nonActive: { border: "border-gray-700", bg: "bg-white" },
  };

  return (
    <button
      onClick={() => {
        setActive(!active);
      }}
      className="grid grid-cols-[1fr_4fr_1fr] items-center justify-between cursor-pointer w-full"
    >
      <div className="h-4 w-4">
        {active ? (
          <MdCheckBox className="text-pink aspect-square" />
        ) : (
          <MdOutlineCheckBoxOutlineBlank />
        )}
      </div>
      <p className="text-sm font-semibold text-textNormal justify-self-start">
        {props.text}
      </p>
      <p className="text-sm font-semibold">{props.value}</p>
    </button>
  );
}
