import { textColor, TextColorType } from "@/app/_design/colors";
import React from "react";

type HeadingLevelType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "label1"
  | "label2"
  | "label3"
  | "label4"
  | "label5"
  | "paragraph1"
  | "paragraph2"
  | "paragraph3"
  | "paragraph4"
  | "paragraph5";

type Props = {
  level: HeadingLevelType;
  color?: TextColorType;
  text: string;
  className?: string;
};

export default function Text(props: Props) {
  const color = props.color && textColor[props.color];
  const classes = `${props.className} ${color}`;

  switch (props.level) {
    case "h1":
      return <h1 className={`${classes} text-7xl`}>{props.text}</h1>;
    case "h2":
      return <h2 className={`${classes} text-5xl`}>{props.text}</h2>;
    case "h3":
      return <h3 className={`${classes} text-4xl`}>{props.text}</h3>;
    case "h4":
      return <h4 className={`${classes} text-3xl`}>{props.text}</h4>;
    case "h5":
      return <h5 className={`${classes} text-xl`}>{props.text}</h5>;
    case "label1":
      return <p className={`${classes} text-2xl`}>{props.text}</p>;
    case "label2":
      return <p className={`${classes} text-xl`}>{props.text}</p>;
    case "label3":
      return <p className={`${classes} text-lg`}>{props.text}</p>;
    case "label4":
      return <p className={`${classes} text-base`}>{props.text}</p>;
    case "label5":
      return <p className={`${classes} text-sm`}>{props.text}</p>;
    case "paragraph1":
      return <p className={`${classes} text-2xl`}>{props.text}</p>;
    case "paragraph2":
      return <p className={`${classes} text-xl`}>{props.text}</p>;
    case "paragraph3":
      return <p className={`${classes} text-lg`}>{props.text}</p>;
    case "paragraph4":
      return <p className={`${classes} text-base`}>{props.text}</p>;
    case "paragraph5":
      return <p className={`${classes} text-sm`}>{props.text}</p>;
    default:
      return <p>{props.text}</p>;
  }
}
