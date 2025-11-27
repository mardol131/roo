import React from "react";
import Text from "../atoms/Text";
import {
  ColorsAndGradientsType,
  textColor,
  TextColorType,
} from "shared/src/design/colors";
import { FaXmark } from "react-icons/fa6";

type Props = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  color?: TextColorType;
  bgColor?: ColorsAndGradientsType;
  disableIcon?: boolean;
};

export default function Tag({
  text,
  onClick,
  disabled,
  color,
  bgColor,
  disableIcon,
}: Props) {
  return (
    <div
      className={`inline-flex items-center shadow-md hover:scale-105 animate gap-1.5 px-3 py-1 rounded-full text-sm font-medium transition-all hover:bg-secondary ${
        bgColor ? bgColor : "bg-primary text-white"
      }`}
      onClick={(e) => {
        e.stopPropagation();
        if (!disabled) {
          onClick && onClick();
        }
      }}
    >
      <Text text={text} tag="p" color={color || "black"} />
      {!disableIcon && <FaXmark />}
    </div>
  );
}
