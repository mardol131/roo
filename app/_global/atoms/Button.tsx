"use client";

import {
  colorsAndGradients,
  ColorsAndGradientsType,
  textColor,
  TextColorType,
} from "@/app/_design/colors";
import { rounding, RoundingType } from "@/app/_design/rounding";
import Link from "next/link";
import React from "react";

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
};

type ButtonSize = keyof typeof buttonSizeList;

const buttonSizeList = {
  "4xl": "px-7 py-5 text-4xl",
  "3xl": "px-5 py-3 text-3xl",
  "2xl": "px-5 py-3 text-2xl",
  xl: "px-5 py-3 text-xl",
  lg: "px-4 py-2 text-lg",
  md: "px-3 py-1 text-base",
  sm: "px-2 py-1 text-sm",
};

export default function Button(props: ButtonPropsType) {
  const buttonBgColor = props.bgColor && colorsAndGradients[props.bgColor];
  const buttonSize = props.size && buttonSizeList[props.size];
  const buttonRounding = props.rounding && rounding[props.rounding];
  const buttonTextColor = props.textColor && textColor[props.textColor];

  const buttonClassname =
    "font-semibold  hover:scale-105 animate cursor-pointer shadow-md";

  if (props.link) {
    return (
      <Link
        onClick={props.onClick}
        href={props.link}
        type={props.type || "button"}
        className={`${props.className} ${buttonSize} ${buttonBgColor} ${buttonRounding} ${buttonTextColor} ${buttonClassname}`}
      >
        {props.text}
      </Link>
    );
  } else {
    return (
      <button
        onClick={props.onClick}
        type={props.type || "button"}
        className={`${props.className} ${buttonSize} ${buttonBgColor} ${buttonRounding} ${buttonTextColor} ${buttonClassname}`}
      >
        {props.text}
      </button>
    );
  }
}
