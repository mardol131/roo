import { rounding, RoundingType } from "@/app/_design/rounding";
import React from "react";

export type ButtonPropsType = {
  text: string;
  color: ButtonColors;
  size: ButtonSize;
  rounding: RoundingType;
  className?: string;
  type?: "submit" | "button" | "reset";
};

type ButtonSize = keyof typeof size;

const size = {
  xl: "px-5 py-3 text-xl",
  lg: "px-4 py-2 text-lg",
  md: "px-3 py-1 text-base",
  sm: "px-2 py-1 text-sm",
};

export type ButtonColors = keyof typeof colors;

const colors = {
  gradientThree:
    "bg-linear-30 from-secondary via-primary to-tertiary text-white",
  gradientTwo: "bg-linear-30 from-primary to-secondary text-white",
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  tertiary: "bg-tertiary text-white",
  white: "bg-white text-primary",
};

export default function Button(props: ButtonPropsType) {
  return (
    <button
      type={props.type || "button"}
      className={`${props.className} ${colors[props.color]} ${
        size[props.size]
      } ${
        rounding[props.rounding]
      } font-semibold  hover:scale-105 animate cursor-pointer shadow-md`}
    >
      {props.text}
    </button>
  );
}
