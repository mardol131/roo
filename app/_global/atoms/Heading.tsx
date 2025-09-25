import React from "react";

type HeadingLevelType = "h1" | "h2" | "h3" | "h4" | "h5";

type Props = {
  level: HeadingLevelType;
  color?: string;
  textAlign?: "start" | "center" | "end";
  text: string;
  fontWeight?: "font-semibold" | "font-bold" | "font-medium";
};

export default function Heading(props: Props) {
  switch (props.level) {
    case "h1":
      return (
        <h1
          className={`${props.fontWeight}`}
          style={{ color: props.color, textAlign: props.textAlign }}
        >
          {props.text}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`${props.fontWeight}`}
          style={{ color: props.color, textAlign: props.textAlign }}
        >
          {props.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`${props.fontWeight}`}
          style={{ color: props.color, textAlign: props.textAlign }}
        >
          {props.text}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`${props.fontWeight}`}
          style={{ color: props.color, textAlign: props.textAlign }}
        >
          {props.text}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={`${props.fontWeight}`}
          style={{ color: props.color, textAlign: props.textAlign }}
        >
          {props.text}
        </h5>
      );
    default:
      return (
        <h1
          className={`${props.fontWeight}`}
          style={{ color: props.color, textAlign: props.textAlign }}
        >
          {props.text}
        </h1>
      );
  }
}
