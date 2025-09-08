"use client";

import React from "react";
import Image from "next/image";
import { Anniversary } from "@/app/_icons/anniversary";
import OpeningParty from "@/app/_icons/OpeningParty";
import babyShower from "@/app/_icons/baby-shower.svg";
import { GiPartyPopper } from "react-icons/gi";

type Props = {};

export type IconTextType = {
  text: string;
  color: string;
};

const colorsGradient = [
  "#f2800f",
  "#f06922",
  "#ee5237",
  "#eb3b4a",
  "#e9245e",
  "#e60d72",
  "#ca1275",
  "#ac1879",
  "#8f1d7c",
  "#722280",
  "#552783",
];

export function IconText({ text, color }: IconTextType) {
  return (
    <div className="flex flex-col items-center gap-4 text-center w-full">
      <div style={{ backgroundColor: color }} className="rounded-full p-[2px]">
        <div
          className={`rounded-full flex items-center justify-center h-15 w-15 bg-white !`}
        >
          <GiPartyPopper className="text-3xl" style={{ color: color }} />
        </div>
      </div>
      <p className="break-words">{text}</p>
    </div>
  );
}

export default function EventTypesWithIcons({}: Props) {
  const icons = [];

  for (let i = 0; i < 11; i++) {
    icons.push(
      <IconText
        key={i}
        text="Opening párty"
        color={colorsGradient[i]}
      ></IconText>
    );
  }

  return (
    <div className="flex justify-between w-full bg-linear-30 py-20">
      {icons.map((icon) => {
        return icon;
      })}
    </div>
  );
}
