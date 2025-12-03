"use client";
import { RoundingType } from "@roo/shared/src/design/rounding";
import { LucideIconsType } from "@/app/_icons/_iconsList";
import Link from "next/link";
import React from "react";
import * as LucideIcons from "lucide-react";
import {
  colorsAndGradients,
  ColorsAndGradientsType,
  textColor,
  TextColorType,
} from "@roo/shared/src/design/colors";
import { sendGTMEvent } from "@next/third-parties/google";
import classes from "./button.module.scss";
import { ButtonSize } from "@roo/shared/src/design/button";

export type ButtonProps = {
  text: string;
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
  GT?: {
    event: string;
    value: string;
  };
  disabled?: boolean;
};

export default function Button(props: ButtonProps) {
  const buttonBgColor = props.bgColor && `bg-${props.bgColor}`;
  const buttonSize = `${classes.button} ${classes[`size_${props.size}`] || ""}`;
  const buttonRounding = props.rounding && `radius-${props.rounding}`;
  const buttonTextColor = props.textColor && `color-${props.textColor}`;
  const IconLeft = props.iconLeft && LucideIcons[props.iconLeft];
  const IconRight = props.iconRight && LucideIcons[props.iconRight];

  const buttonClassname = `${props.disabled ? "opacity-50" : "hover:scale-105"} font-semibold  ${
    props.bgColor === "white" && "border border-borderLight"
  } animate cursor-pointer shadow-md flex text-center justify-center items-center gap-2 ${
    props.stretch && "w-full"
  } ${buttonSize} ${buttonBgColor} ${buttonRounding} ${buttonTextColor}`;

  function onClickHandler() {
    if (props.GT) {
      sendGTMEvent({ event: props.GT.event, value: props.GT.value });
    }

    if (props.onClick) {
      props.onClick();
    }
  }

  const buttoncContent = (
    <button
      disabled={props.disabled}
      onClick={onClickHandler}
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
  buttons: ButtonProps[];
  className?: string;
}) {
  return (
    <div className={`flex gap-3 flex-wrap ${className}`}>
      {buttons && buttons.map((button, i) => <Button key={i} {...button} />)}
    </div>
  );
}
