import { HeadingLevel } from "@/app/_types/heading";
import React from "react";

type Props = {
  text: string;
  level: HeadingLevel;
};

export default function Heading(props: Props) {
  switch (props.level) {
    case "h1":
      return <h1>{props.text}</h1>;
    case "h2":
      return <h2>{props.text}</h2>;
    case "h3":
      return <h3>{props.text}</h3>;
    case "h4":
      return <h4>{props.text}</h4>;
    case "h5":
      return <h5>{props.text}</h5>;
  }
}
