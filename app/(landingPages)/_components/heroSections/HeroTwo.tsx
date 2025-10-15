import Link from "next/link";
import LandingHeading, { LandingHeadingProps } from "../heading/LandingHeading";
import {
  colorsAndGradients,
  ColorsAndGradientsType,
  textColor,
} from "@/app/_design/colors";
import Button, { ButtonPropsType } from "@/app/_global/atoms/Button";
import { TextSettingsType } from "@/app/_design/text";
import Text, { generateTexts, TextProps } from "@/app/_global/atoms/Text";
import { LandingSectionWrapper } from "../wrappers/LandingSectionWrapper";
import Image from "next/image";

export type HeroTwoProps = {
  heading: LandingHeadingProps;
  texts: TextProps[];
  buttons: ButtonPropsType[];
  image: string;
  bgColor?: ColorsAndGradientsType;
};

export function HeroTwo(props: HeroTwoProps) {
  return (
    <LandingSectionWrapper>
      <div className="w-full grid grid-cols-2 items-center">
        <div className="md:min-h-200 min-h-140 max-w-170 flex flex-col items-start text-start w-full justify-center gap-5 p-5">
          <LandingHeading {...props.heading} />
          {generateTexts(props.texts)}
          <div className="flex gap-3">
            {props.buttons &&
              props.buttons.map((button, i) => <Button key={i} {...button} />)}
          </div>
        </div>
        <Image src={props.image} width={1000} height={1000} alt="hero" />
      </div>
    </LandingSectionWrapper>
  );
}
