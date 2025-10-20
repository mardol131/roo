import { LandingSectionWrapper } from "@/app/(landingPages)/test/_components/wrappers/LandingSectionWrapper";
import React from "react";
import Text, { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";
import Image, { ImageProps } from "next/image";
import { ButtonProps, GenerateButtons } from "@/app/_global/atoms/Button";
import {
  colorsAndGradients,
  ColorsAndGradientsType,
} from "@/app/_design/colors";
import { ImageType, OverlayType } from "@/app/_types/objects";

type Props = {
  texts: TextProps[];
  buttons?: ButtonProps[];
  overlay?: OverlayType;
};

export default function HeroBubbleSection(props: Props) {
  const bgColor =
    props.overlay?.overlayColor &&
    colorsAndGradients[props.overlay?.overlayColor];

  return (
    <LandingSectionWrapper>
      <div
        style={{
          backgroundImage:
            props.overlay?.image?.src && `url(${props.overlay?.image.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="relative w-full rounded-4xl overflow-hidden shadow-2xl"
      >
        <div
          className={`relative min-h-150 w-full md:grid grid-cols-2 flex items-center p-10  ${
            bgColor || " bg-linear-90 from-black to-transparent"
          }`}
        >
          <div className="flex flex-col justify-center h-full gap-5">
            <div>
              <GenerateTexts texts={props.texts} />
            </div>
            {props.buttons && <GenerateButtons buttons={props.buttons} />}
          </div>
        </div>
      </div>
    </LandingSectionWrapper>
  );
}
