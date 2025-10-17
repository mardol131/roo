"use client";

import {
  colorsAndGradients,
  ColorsAndGradientsType,
  textColor,
  TextColorType,
} from "@/app/_design/colors";
import { rounding, RoundingType } from "@/app/_design/rounding";
import { LucideIconsType } from "@/app/_icons/_iconsList";
import Link from "next/link";
import React from "react";
import * as LucideIcons from "lucide-react";

export type ButtonPropsType = {
  text?: string;
  textColor?: TextColorType;
  bgColor?: ColorsAndGradientsType;
  size?: ButtonSize;
  rounding?: RoundingType;
  className?: string;
  type?: "submit" | "button" | "reset";
  link?: string;
  onClick?: () => void;
  stretch?: boolean;
  iconLeft?: LucideIconsType;
  iconRight?: LucideIconsType;
};

export type ButtonSize = keyof typeof buttonSizeList;

const buttonSizeList = {
  "4xl": "px-7 py-5 md:text-4xl text-2xl",
  "3xl": "px-5 py-3 md:text-3xl text-1xl",
  "2xl": "px-5 py-3 md:text-2xl text-xl",
  xl: "px-5 py-3 md:text-xl text-lg",
  lg: "px-4 py-2 text-lg",
  md: "px-3 py-1 text-base",
  sm: "px-2 py-1 text-sm",
};

export default function Button(props: ButtonPropsType) {
  const buttonBgColor = props.bgColor && colorsAndGradients[props.bgColor];
  const buttonSize = props.size && buttonSizeList[props.size];
  const buttonRounding = props.rounding && rounding[props.rounding];
  const buttonTextColor = props.textColor && textColor[props.textColor];
  const IconLeft = props.iconLeft && LucideIcons[props.iconLeft];
  const IconRight = props.iconRight && LucideIcons[props.iconRight];

  const buttonClassname = `font-semibold hover:scale-105 ${
    props.bgColor === "white" && "border border-borderLight"
  } animate cursor-pointer shadow-md flex items-center gap-2 ${
    props.stretch && "w-full"
  } ${buttonSize} ${buttonBgColor} ${buttonRounding} ${buttonTextColor}`;

  const buttoncContent = (
    <button
      onClick={props.onClick}
      type={props.type || "button"}
      className={buttonClassname}
    >
      {IconLeft && <IconLeft />}
      {props.text}
      {IconRight && <IconRight />}
    </button>
  );

  if (props.link) {
    return <Link href={props.link}>{buttoncContent}</Link>;
  } else {
    return buttoncContent;
  }
}

export function GenerateButtons({
  buttons,
  className,
}: {
  buttons: ButtonPropsType[];
  className?: string;
}) {
  return (
    <div className={`flex gap-3 flex-wrap ${className}`}>
      {buttons && buttons.map((button, i) => <Button key={i} {...button} />)}
    </div>
  );
}
