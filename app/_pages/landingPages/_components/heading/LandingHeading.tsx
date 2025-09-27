import { textColor, TextColorType } from "@/app/_design/colors";
import { textAlign, TextAlignType } from "@/app/_design/oriantation";
import { landingHeading, LandingHeadingType } from "@/app/_design/text";
import React from "react";

export type LandingHeadingProps = {
  headingOne: string;
  headingTwo?: string;
  size?: LandingHeadingType;
  color?: TextColorType;
  align?: TextAlignType;
};

export default function LandingHeading(props: LandingHeadingProps) {
  return (
    <div
      className={`${props.size ? landingHeading[props.size] : "text-4xl"} ${
        props.color && textColor[props.color]
      } ${
        props.align && textAlign[props.align]
      } max-w-landingWrapper text-center flex flex-col items-center font-bold`}
    >
      <h2>{props.headingOne}</h2>
      {props.headingTwo && <h2>{props.headingTwo}</h2>}
    </div>
  );
}
