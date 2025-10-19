import LandingHeading, { LandingHeadingProps } from "../heading/LandingHeading";
import { ColorsAndGradientsType } from "@/app/_design/colors";
import { ButtonProps, GenerateButtons } from "@/app/_global/atoms/Button";
import { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";
import { LandingSectionWrapper } from "../../test/_components/wrappers/LandingSectionWrapper";
import Image from "next/image";
import { OverlayType } from "@/app/_types/objects";

export type HeroTwoProps = {
  heading: LandingHeadingProps;
  texts: TextProps[];
  buttons?: ButtonProps[];
  image?: string;
  bgColor?: ColorsAndGradientsType;
  overlay?: OverlayType;
};

export function HeroClean(props: HeroTwoProps) {
  return (
    <LandingSectionWrapper overlay={props.overlay}>
      <div className="w-full flex justify-start items-center">
        <div className="md:min-h-170 md:bg-none min-h-100 max-w-170 flex flex-col items-start md:text-start text-center w-full justify-center gap-5 p-5">
          <LandingHeading {...props.heading} />
          <GenerateTexts texts={props.texts} />
          <div className="flex md:justify-start justify-center w-full">
            {props.buttons && (
              <GenerateButtons
                buttons={props.buttons}
                className="md:justify-start justify-center"
              />
            )}
          </div>
        </div>
        {props.image && (
          <Image
            src={props.image}
            width={1000}
            height={1000}
            alt="hero"
            className="object-right object-cover w-full h-full"
          />
        )}
      </div>
    </LandingSectionWrapper>
  );
}
