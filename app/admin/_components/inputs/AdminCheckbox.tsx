"use client";

import React, { useState } from "react";
import { IoMdCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

type Props = {};

export default function AdminCheckbox({}: Props) {
  const [isSelected, setIsSelected] = useState(false);

  const styling = "text-violet text-2xl";

  return (
    <div
      onClick={() => {
        setIsSelected(!isSelected);
      }}
      className="flex items-center gap-3 border p-1 px-2 pr-3 text-sm font-semibold border-borderLight bg-violet/10 rounded-small"
    >
      {!isSelected ? (
        <MdCheckBoxOutlineBlank className={styling} />
      ) : (
        <IoMdCheckbox className={styling} />
      )}
      <p>Text</p>
    </div>
  );
}
