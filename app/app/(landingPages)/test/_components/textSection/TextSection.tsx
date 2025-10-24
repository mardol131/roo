import { LandingSectionWrapper } from "@/app/(landingPages)/test/_components/wrappers/LandingSectionWrapper";
import { colorsAndGradients } from "@/app/_design/colors";
import { ButtonProps, GenerateButtons } from "@/app/_global/atoms/Button";
import { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";
import { ImageType, OverlayType } from "@/app/_types/objects";
import Image from "next/image";
import React from "react";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";

type Props = {
  texts: TextProps[];
  buttons: ButtonProps[];
  outerOverlay?: OverlayType;
  innerOverlay?: OverlayType;
  imageTop?: ImageType;
  imageBottom?: ImageType;
};

export default function TextSection(props: Props) {
  const bgColor = props.innerOverlay?.overlayColor
    ? colorsAndGradients[props.innerOverlay.overlayColor]
    : props.innerOverlay?.overlayClassname;

  const image = props.innerOverlay?.image;

  return (
    <LandingSectionWrapper overlay={props.outerOverlay}>
      <div
        className={`${image?.src && "rounded-2xl"} relative w-full overflow-hidden flex items-center justify-center`}
      >
        {image?.src && (
          <Image
            src={image.src}
            alt={image.alt || "alt-image"}
            width={1000}
            height={1000}
            className="absolute z-0 w-full h-full object-cover object-center"
          />
        )}
        <div className="flex flex-col gap-15">
          {props.imageTop?.src && (
            <Image
              src={getImageSrc(props.imageTop.src, "cms")}
              alt={props.imageTop.alt || "image-top"}
              width={1500}
              height={1500}
              className="w-auto max-h-200"
            />
          )}
          <div
            className={`${
              bgColor && bgColor + " p-10 "
            } z-10 flex flex-col items-center gap-5 text-center w-full border-none`}
          >
            <GenerateTexts texts={props.texts} />
            <div>
              <GenerateButtons buttons={props.buttons} />
            </div>
          </div>
          {props.imageBottom?.src && (
            <Image
              src={getImageSrc(props.imageBottom.src, "cms")}
              alt={props.imageBottom.alt || "image-bottom"}
              width={1500}
              height={1500}
              className="w-auto max-h-200"
            />
          )}
        </div>
      </div>
    </LandingSectionWrapper>
  );
}
