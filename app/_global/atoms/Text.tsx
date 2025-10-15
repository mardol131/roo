import { textColor, TextColorType } from "@/app/_design/colors";
import { textAlign, TextAlignType } from "@/app/_design/orientation";
import React from "react";

export type TextLevelType =
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
  | "label6"
  | "label7"
  | "label8"
  | "paragraph1"
  | "paragraph2"
  | "paragraph3"
  | "paragraph4"
  | "paragraph5";

export const fontWeight = {
  sm: "font-",
  md: "font-medium",
  lg: "font-semibold",
  xl: "font-bold",
  "2xl": "font-bold",
};
export type FontWeightType = keyof typeof fontWeight;

export const fontSize = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
};

export const fontType = {
  montserrat: "font-montserrat",
  nunito: "font-nunito",
};

export type FontType = keyof typeof fontType;

export type TextProps = {
  level: TextLevelType;
  color?: TextColorType;
  text: string;
  className?: string;
  fontWeight?: FontWeightType;
  font?: FontType;
};

export default function Text(props: TextProps) {
  const color = props.color && textColor[props.color];
  //   const align = props.textAlign && textAlign[props.textAlign];
  const weight = props.fontWeight && fontWeight[props.fontWeight];
  const font = props.font && fontType[props.font];
  const classes = `${props.className} ${color} ${weight} ${font}`;

  switch (props.level) {
    case "h1":
      return (
        <h1 className={`${classes} md:text-7xl text-5xl`}>{props.text}</h1>
      );
    case "h2":
      return (
        <h2 className={`${classes} md:text-5xl text-4xl`}>{props.text}</h2>
      );
    case "h3":
      return (
        <h3 className={`${classes} md:text-4xl text-3xl`}>{props.text}</h3>
      );
    case "h4":
      return (
        <h4 className={`${classes} md:text-3xl text-2xl`}>{props.text}</h4>
      );
    case "h5":
      return <h5 className={`${classes} text-xl`}>{props.text}</h5>;

    case "label1":
      return <p className={`${classes} md:text-7xl text-5xl`}>{props.text}</p>;
    case "label2":
      return <p className={`${classes} md:text-5xl text-4xl`}>{props.text}</p>;
    case "label3":
      return <p className={`${classes} md:text-4xl text-3xl`}>{props.text}</p>;
    case "label4":
      return <p className={`${classes} md:text-3xl text-2xl`}>{props.text}</p>;
    case "label5":
      return <p className={`${classes}text-xl`}>{props.text}</p>;
    case "label6":
      return <p className={`${classes}text-lg`}>{props.text}</p>;
    case "label7":
      return <p className={`${classes}text-base`}>{props.text}</p>;
    case "label8":
      return <p className={`${classes}text-sm`}>{props.text}</p>;
    case "paragraph1":
      return <p className={`${classes} md:text-2xl text-xl`}>{props.text}</p>;
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

export function generateTexts(texts: TextProps[]) {
  return texts.map((text, i) => {
    return <Text {...text} key={i} />;
  });
}
