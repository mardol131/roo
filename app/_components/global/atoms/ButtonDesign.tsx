import React from "react";

export type ButtonPropsType = {
  text: string;
  design: ButtonDesign;
  size: "small" | "medium" | "big";
  rounding?: "rounded-small" | "rounded-medium";
};

export type ButtonDesign = "gradient" | "color";

export default function ButtonDesign(props: ButtonPropsType) {
  if (props.design === "gradient") {
    return (
      <button className="font-semibold bg-linear-90 from-secondary via-primary to-tertiary px-4 py-2 rounded-full text-white">
        {props.text}
      </button>
    );
  } else if (props.design === "color") {
    return (
      <button className="px-4 py-2 rounded-full text-white">
        {props.text}
      </button>
    );
  }
}
