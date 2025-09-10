"use client";

import React, { ReactNode } from "react";
import Engagement from "@/app/_icons/Engegament";
import BabyShower from "@/app/_icons/BabyShower";
import CompanyParty from "@/app/_icons/CompanyParty";
import Anniversary from "@/app/_icons/Anniversary";
import Birthday from "@/app/_icons/Birthday";
import OpeningParty from "@/app/_icons/OpeningParty";
import Party from "@/app/_icons/Party";
import Ball from "@/app/_icons/Ball";
import TeamBuilding from "@/app/_icons/TeamBuilding";
import KidParty from "@/app/_icons/KidParty";
import Wedding from "@/app/_icons/Wedding";
import HeaderSettingsWrapper from "../../wrappers/HeaderSettingsWrapper";

type Props = {};

type IconStylesType = {
  color: string;
  hoverBg: string;
  border: string;
  hoverBorder: string;
  textColor: string;
};

const IconStyles: IconStylesType[] = [
  {
    color: "#f2800f",
    hoverBg: "group-hover:bg-[#f2800f]",
    border: "border-[#f2800f]",
    hoverBorder: "group-hover:border-[#f2800f]",
    textColor: "text-[#f2800f]",
  },
  {
    color: "#f06922",
    hoverBg: "group-hover:bg-[#f06922]",
    border: "border-[#f06922]",
    hoverBorder: "group-hover:border-[#f06922]",
    textColor: "text-[#f06922]",
  },
  {
    color: "#ee5237",
    hoverBg: "group-hover:bg-[#ee5237]",
    border: "border-[#ee5237]",
    hoverBorder: "group-hover:border-[#ee5237]",
    textColor: "text-[#ee5237]",
  },
  {
    color: "#eb3b4a",
    hoverBg: "group-hover:bg-[#eb3b4a]",
    border: "border-[#eb3b4a]",
    hoverBorder: "group-hover:border-[#eb3b4a]",
    textColor: "text-[#eb3b4a]",
  },
  {
    color: "#e9245e",
    hoverBg: "group-hover:bg-[#e9245e]",
    border: "border-[#e9245e]",
    hoverBorder: "group-hover:border-[#ee5237]",
    textColor: "text-[#e9245e]",
  },
  {
    color: "#e60d72",
    hoverBg: "group-hover:bg-[#e60d72]",
    border: "border-[#e60d72]",
    hoverBorder: "group-hover:border-[#e60d72]",
    textColor: "text-[#e60d72]",
  },
  {
    color: "#ca1275",
    hoverBg: "group-hover:bg-[#ca1275]",
    border: "border-[#ca1275]",
    hoverBorder: "group-hover:border-[#ca1275]",
    textColor: "text-[#ca1275]",
  },
  {
    color: "#ac1879",
    hoverBg: "group-hover:bg-[#ac1879]",
    border: "border-[#ac1879]",
    hoverBorder: "group-hover:border-[#ac1879]",
    textColor: "text-[#ac1879]",
  },
  {
    color: "#8f1d7c",
    hoverBg: "group-hover:bg-[#8f1d7c]",
    border: "border-[#8f1d7c]",
    hoverBorder: "group-hover:border-[#8f1d7c]",
    textColor: "text-[#8f1d7c]",
  },
  {
    color: "#722280",
    hoverBg: "group-hover:bg-[#722280]",
    border: "border-[#722280]",
    hoverBorder: "group-hover:border-[#722280]",
    textColor: "text-[#722280]",
  },
  {
    color: "#552783",
    hoverBg: "group-hover:bg-[#552783]",
    border: "border-[#552783]",
    hoverBorder: "group-hover:border-[#552783]",
    textColor: "text-[#552783]",
  },
];
const Icons = [
  { text: "Zásnuby", icon: Engagement },
  { text: "baby shower", icon: BabyShower },
  { text: "Výročí", icon: Anniversary },
  { text: "Firemní párty", icon: CompanyParty },
  { text: "Narozeniny", icon: Birthday },
  { text: "Otevíračka", icon: OpeningParty },
  { text: "Párty", icon: Party },
  { text: "Večírek", icon: Ball },
  { text: "Teambuilding", icon: TeamBuilding },
  { text: "Dětská oslava", icon: KidParty },
  { text: "Svatba", icon: Wedding },
];

export type IconTextType = {
  text: string;
  children: ReactNode;
  iconStyles: IconStylesType;
};

export function IconText({ text, iconStyles, children }: IconTextType) {
  return (
    <div className="group flex flex-col items-center gap-2 text-center w-full cursor-pointer">
      <div
        className={`${iconStyles.border} ${iconStyles.hoverBg} ${iconStyles.hoverBorder} ${iconStyles.textColor} hover:border-none transition-all shadow-lg  ease-in-out border-2 rounded-full flex items-center justify-center h-20 w-20 bg-white group-hover:text-white`}
      >
        {children}
      </div>
      <p
        style={{ color: iconStyles.color }}
        className="break-words font-semibold capitalize text-sm"
      >
        {text}
      </p>
    </div>
  );
}

export default function EventTypeSettings({}: Props) {
  return (
    <HeaderSettingsWrapper>
      <div className="bg-white p-10 rounded-xl border border-borderLight shadow-lg flex justify-between w-full gap-5 bg-linear-30 py-10 max-w-[1200px]">
        {Icons.map((icon, index) => {
          return (
            <IconText
              key={index}
              text={icon.text}
              iconStyles={IconStyles[index]}
            >
              {icon.icon({ width: 40, height: 40 })}
            </IconText>
          );
        })}
      </div>
    </HeaderSettingsWrapper>
  );
}
