"use client";

import Text from "@/app/_components/atoms/Text";
import Gastro from "@/app/_icons/Gastro";
import { ListingType } from "@/app/_types/business/services";
import { colorsAndGradients, textColor } from "@roo/shared/src/design/colors";
import { listingCardsData } from "./steps/ListingTypeStep";

export type ServiceTypeCardProps = {
  onClick: (value: ListingType) => void;
  value: ListingType;
  isActive: boolean;
  delayMs?: string;
};

export function ServiceTypeCard({
  onClick,
  value,
  isActive,
  delayMs,
}: ServiceTypeCardProps) {
  const data = listingCardsData[value];

  const color = isActive ? "text-white" : textColor[data.color];
  const bgColor = isActive ? colorsAndGradients[data.bgColor] : "bg-white";

  return (
    <div
      style={{ animationDelay: delayMs ? `${delayMs}ms` : "0" }}
      onClick={() => {
        onClick(value);
      }}
      className={`${bgColor} ${color} flex-1 animate-popup hover:scale-102 animate cursor-pointer px-8 py-12 max-w-100 rounded-large text-center flex flex-col gap-5 items-center shadow-lg`}
    >
      <div className="w-20 h-20">
        <Gastro className="" fill="currentColor" />
      </div>
      <Text
        text={data.heading}
        tag="h3"
        size="headingMd"
        className="font-semibold"
        color={isActive ? "white" : "black"}
      />
      <Text
        text={data.text}
        tag="p"
        className={isActive ? "text-white" : "text-black"}
      />
    </div>
  );
}
