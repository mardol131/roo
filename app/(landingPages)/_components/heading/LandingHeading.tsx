import { textColor, TextColorType } from "@/app/_design/colors";
import { textAlign, TextAlignType } from "@/app/_design/orientation";
import { landingHeading, LandingHeadingType } from "@/app/_design/text";
import Text, { TextLevelType, TextProps } from "@/app/_global/atoms/Text";
import { HeadingLevel } from "@/app/_types/heading";
import React from "react";

export type LandingHeadingProps = {
  headingOne: TextProps;
  headingTwo?: TextProps;
};

export default function LandingHeading(props: LandingHeadingProps) {
  return (
    <div className="w-full">
      <Text {...props.headingOne} />
      {props.headingTwo && <Text {...props.headingTwo} />}
    </div>
  );
}
