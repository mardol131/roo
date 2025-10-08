"use client";

import {
  colorsAndGradients,
  ColorsAndGradientsType,
  textColor,
  TextColorType,
} from "@/app/_design/colors";
import Text from "@/app/_global/atoms/Text";
import Gastro from "@/app/_icons/Gastro";
import { useAppSelector } from "@/app/_redux/hooks";
import { serviceCardsData, ServiceType } from "@/app/_types/business/services";
import { ReactNode } from "react";

export type ServiceTypeCardProps = {
  onClick: (value: ServiceType) => void;
  value: ServiceType;
  isActive: boolean;
};

export function ServiceTypeCard({
  onClick,
  value,
  isActive,
}: ServiceTypeCardProps) {
  const { services } = useAppSelector((state) => state.newListing);

  const data = serviceCardsData[value];

  const color = isActive ? "text-white" : textColor[data.color];
  const bgColor = isActive ? colorsAndGradients[data.bgColor] : "bg-white";

  return (
    <div
      onClick={() => {
        onClick(value);
      }}
      className={`${bgColor} ${color} hover:scale-102 animate cursor-pointer px-8 py-12 max-w-100 rounded-large text-center flex flex-col gap-5 items-center shadow-lg`}
    >
      <div className="w-20 h-20">
        <Gastro className="" fill="currentColor" />
      </div>
      <Text text={data.heading} level="h3" className="font-semibold" />
      <Text
        text={data.text}
        level="paragraph2"
        className={isActive ? "text-white" : "text-black"}
      />
    </div>
  );
}
