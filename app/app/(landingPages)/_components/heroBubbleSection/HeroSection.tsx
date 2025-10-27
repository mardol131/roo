import { LandingSectionWrapper } from "@/app/(landingPages)/_components/wrappers/LandingSectionWrapper";
import React from "react";
import Text, { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";
import Image, { ImageProps } from "next/image";
import { ButtonProps, GenerateButtons } from "@/app/_global/atoms/Button";
import {
  colorsAndGradients,
  ColorsAndGradientsType,
} from "@/app/_design/colors";
import { ImageType, OverlayType } from "@/app/_types/objects";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";

type Props = {
  texts: TextProps[];
  buttons?: ButtonProps[];
  innerOverlay?: OverlayType;
};

export default function HeroBubbleSection(props: Props) {
  const bgColor = props.innerOverlay?.overlayColor
    ? colorsAndGradients[props.innerOverlay?.overlayColor]
    : props.innerOverlay?.overlayClassname;

  const image = props.innerOverlay?.image;

  console.log(process.env.NEXT_PUBLIC_CDN_URL);

  return (
    <LandingSectionWrapper>
      <div className="relative w-full rounded-4xl overflow-hidden shadow-2xl">
        {image?.src && (
          <Image
            src={getImageSrc(image.src, "cms")}
            alt={image.alt || "alt-image"}
            width={1500}
            height={1500}
            className="absolute w-full h-full object-cover object-center"
          />
        )}
        <div
          className={`relative min-h-150 w-full md:grid grid-cols-2 flex items-center p-10  ${
            bgColor || " bg-linear-90 from-black to-transparent"
          }`}
        >
          <div className="flex flex-col justify-center h-full gap-5">
            <GenerateTexts texts={props.texts} />

            {props.buttons && <GenerateButtons buttons={props.buttons} />}
          </div>
        </div>
      </div>
    </LandingSectionWrapper>
  );
}
