import Link from "next/link";
import LandingHeading, { LandingHeadingProps } from "../heading/LandingHeading";
import {
  colorsAndGradients,
  ColorsAndGradientsType,
  textColor,
} from "@/app/_design/colors";
import Button, {
  ButtonProps,
  GenerateButtons,
} from "@/app/_global/atoms/Button";
import { TextSettingsType } from "@/app/_design/text";
import Text, { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";
import Image from "next/image";
import { LandingSectionWrapper } from "../../test/_components/wrappers/LandingSectionWrapper";
import { Sides } from "@/app/_design/orientation";

export type HeroOneProps = {
  heading: LandingHeadingProps;
  texts: TextProps[];
  buttons: ButtonProps[];
  image: string;
  bgColor?: ColorsAndGradientsType;
  textPosition?: Sides;
};

export function BubbleImageSection(props: HeroOneProps) {
  const bgColor = props.bgColor && colorsAndGradients[props.bgColor];

  return (
    <>
      <div
        className={`lg:flex w-full justify-center hidden min-h-200 relative overflow-hidden`}
      >
        <div
          className={`max-w-landingWrapper z-20 w-full flex items-center ${
            props.textPosition === "left" ? "justify-start" : "justify-end"
          }`}
        >
          <div className=" md:min-h-200 min-h-140 max-w-170 flex flex-col items-start text-start w-full justify-center gap-5 p-5">
            <LandingHeading {...props.heading} />
            <GenerateTexts texts={props.texts} />
            {props.buttons && <GenerateButtons buttons={props.buttons} />}
          </div>
        </div>
        <Image
          src={props.image}
          width={2000}
          height={2000}
          alt="hero"
          className={`absolute h-full ${
            props.textPosition === "left" ? "right-0" : "left-0"
          } z-0 w-[50%] object-cover object-center`}
        />
        <div
          className={`${bgColor} z-10 absolute ${
            props.textPosition === "left"
              ? "-left-20 rounded-r-full"
              : "-right-20 rounded-l-full"
          } w-[75%] top-1/2 -translate-y-1/2 h-[200%] flex items-center justify-center`}
        ></div>
      </div>
      <div
        className={`grid lg:hidden min-h-200 relative grid-rows-[1fr_2fr] overflow-hidden`}
      >
        <Image
          src={props.image}
          width={2000}
          height={2000}
          alt="hero"
          className="h-[150%] z-0 w-full object-cover object-center"
        />
        <div className="z-20 pr- flex items-center justify-center">
          <div className=" md:min-h-200 min-h-140 max-w-170 flex flex-col items-start text-center w-full justify-center gap-5 p-5">
            <LandingHeading {...props.heading} />
            <GenerateTexts texts={props.texts} />
            {props.buttons && (
              <GenerateButtons
                buttons={props.buttons}
                className="justify-center flex w-full"
              />
            )}
          </div>
        </div>
        <div
          className={`${bgColor} rounded-t-full z-10 absolute left-1/2 w-[150%] -translate-x-1/2 -tra bottom-0 h-[70%] flex items-center justify-center`}
        ></div>
      </div>
    </>
  );
}
