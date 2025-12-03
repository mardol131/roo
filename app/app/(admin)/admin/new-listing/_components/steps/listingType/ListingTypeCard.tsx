"use client";

import Text from "@/app/_components/atoms/text/Text";
import Gastro from "@/app/_icons/Gastro";
import { ListingType } from "@/app/_types/business/services";
import {
  colorsAndGradients,
  ColorsAndGradientsType,
  textColor,
  TextColorType,
} from "@roo/shared/src/design/colors";

export type ServiceTypeCardProps = {
  onClick: (value: ListingType) => void;
  value: ListingType;
  isActive: boolean;
  delayMs?: string;
  heading: string;
  text: string;
  color: TextColorType;
  bgColor: ColorsAndGradientsType;
};

export function ListingTypeCard({
  onClick,
  value,
  isActive,
  delayMs,
  heading,
  text,
  color: textColorString,
  bgColor: backgroundColor,
}: ServiceTypeCardProps) {
  const color = isActive ? "text-white" : textColor[textColorString];
  const bgColor = isActive ? colorsAndGradients[backgroundColor] : "bg-white";

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
        text={heading}
        tag="h3"
        size="headingMd"
        fontWeight="semibold"
        color={isActive ? "white" : "black"}
      />
      <Text
        text={text}
        tag="p"
        color={isActive ? "white" : "black"}
        size="bodyXl"
      />
    </div>
  );
}
