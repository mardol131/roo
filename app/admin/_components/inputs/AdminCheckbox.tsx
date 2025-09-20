"use client";

import React, { useState } from "react";
import { IoMdCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

type Props = {};

export default function AdminCheckbox({}: Props) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <button
      onClick={() => {
        setIsSelected(!isSelected);
      }}
      className="cursor-pointer group flex items-center gap-3 border p-1 px-2 pr-3 text-sm font-semibold border-borderLight bg-compAdmin/5 rounded-small"
    >
      {!isSelected ? (
        <MdCheckBoxOutlineBlank
          className={"group-hover:text-tertiary text-tertiary/30 text-2xl"}
        />
      ) : (
        <IoMdCheckbox
          className={"group-hover:text-tertiary text-tertiary text-2xl"}
        />
      )}
      <p className="font-bold text-textNormal">Text</p>
    </button>
  );
}
