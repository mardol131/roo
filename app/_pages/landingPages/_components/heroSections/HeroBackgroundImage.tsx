import Link from "next/link";
import LandingHeading, { LandingHeadingProps } from "../heading/LandingHeading";
import {
  colorsAndGradients,
  ColorsAndGradientsType,
  textColor,
} from "@/app/_design/colors";
import Button from "@/app/_global/atoms/Button";
import { TextSettingsType } from "@/app/_design/text";
import Image from "next/image";

export type HeroBackgroundImageProps = {
  heading: LandingHeadingProps;
  text: TextSettingsType;
  buttonText: string;
  buttonUrl: string;
  image: string;
  bgColor?: ColorsAndGradientsType;
};

export function HeroBackgroundImage(props: HeroBackgroundImageProps) {
  return (
    <div className="md:grid grid-cols-2 min-h-screen overflow-hidden">
      <div
        className={`${
          props.bgColor
            ? colorsAndGradients[props.bgColor]
            : "md:bg-primary/5 bg-white/70"
        } relative w-full flex items-center justify-center `}
      >
        <div className="md:min-h-200 min-h-140 max-w-170 flex flex-col items-center text-center w-full justify-center gap-5 p-5">
          <LandingHeading {...props.heading} />
          <p
            className={`${
              props.text.color && textColor[props.text.color]
            } md:text-2xl text-lg font-semibold`}
          >
            {props.text.text}
          </p>
          <Link href={props.buttonUrl}>
            <Button
              text={props.buttonText}
              color="gradientThree"
              size="3xl"
              rounding="full"
            />
          </Link>
        </div>
        <div className="absolute right-0 bottom-0 md:-mb-20 md:-mr-15 -mb-5 -mr-5 md:w-80 md:h-80 w-30 h-30 shadow-[0px_0px_15px_4px] shadow-black/50 rounded-full bg-linear-60 from-primary to-tertiary"></div>
        <div className="absolute right-0 md:bottom-50 bottom-20 md:-mb-20 md:-mr-15 md:w-40 md:h-40 -mb-10 -mr-10 w-20 h-20 shadow-[0px_0px_15px_4px] shadow-black/50 rounded-full bg-linear-60 from-primary to-secondary"></div>

        <div className="absolute left-0 top-0  md:-mt-30 md:-ml-15 -mt-5 -ml-5 md:w-70 md:h-70 w-30 h-30 rounded-full bg-linear-60 shadow-[0px_0px_15px_4px] shadow-black/50  from-primary to-tertiary"></div>
      </div>
      <Image
        className="hidden md:block h-full w-full object-cover"
        src={props.image}
        width={1000}
        height={1000}
        alt="hero"
      />
    </div>
  );
}
