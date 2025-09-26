import React from "react";

export type ButtonPropsType = {
  text: string;
  color: ButtonColors;
  size: "sm" | "md" | "lg" | "xl";
  rounding: "sm" | "md" | "lg" | "full";
};

export type ButtonColors =
  | "gradientThree"
  | "gradientTwo"
  | "primary"
  | "secondary"
  | "tertiary";

const colors = {
  gradientThree: "bg-linear-30 from-secondary via-primary to-tertiary",
  gradientTwo: "bg-linear-30 from-primary to-secondary",
  primary: "bg-primary",
  secondary: "bg-secondary",
  tertiary: "bg-tertiary",
};

const size = {
  xl: "px-5 py-3 text-lg",
  lg: "px-4 py-2 text-lg",
  md: "px-3 py-1 text-base",
  sm: "px-2 py-1 text-sm",
};

const rounding = {
  sm: "rounded-small",
  md: "rounded-medium",
  lg: "rounded-large",
  full: "rounded-full",
};

export default function Button(props: ButtonPropsType) {
  return (
    <button
      className={`${colors[props.color]} ${size[props.size]} ${
        rounding[props.rounding]
      } font-semibold text-white hover:scale-105 animate cursor-pointer shadow-md`}
    >
      {props.text}
    </button>
  );
}
