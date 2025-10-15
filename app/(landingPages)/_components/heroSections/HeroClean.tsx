import LandingHeading, { LandingHeadingProps } from "../heading/LandingHeading";
import { ColorsAndGradientsType } from "@/app/_design/colors";
import { ButtonPropsType, GenerateButtons } from "@/app/_global/atoms/Button";
import { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";
import { LandingSectionWrapper } from "../wrappers/LandingSectionWrapper";
import Image from "next/image";

export type HeroTwoProps = {
  heading: LandingHeadingProps;
  texts: TextProps[];
  buttons: ButtonPropsType[];
  image: string;
  bgColor?: ColorsAndGradientsType;
};

export function HeroClean(props: HeroTwoProps) {
  return (
    <LandingSectionWrapper>
      <div className="w-full grid grid-cols-2 items-center">
        <div className="md:min-h-170 min-h-100 max-w-170 flex flex-col items-start text-start w-full justify-center gap-5 p-5">
          <LandingHeading {...props.heading} />
          <GenerateTexts texts={props.texts} />
          <GenerateButtons buttons={props.buttons} />
        </div>
        <Image src={props.image} width={1000} height={1000} alt="hero" />
      </div>
    </LandingSectionWrapper>
  );
}
