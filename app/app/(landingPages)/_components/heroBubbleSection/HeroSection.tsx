import { LandingSectionWrapper } from "@/app/(landingPages)/_components/wrappers/LandingSectionWrapper";

import {
  ButtonProps,
  GenerateButtons,
} from "@/app/_components/atoms/button/Button";
import { GenerateTexts, TextProps } from "@/app/_components/atoms/text/Text";
import { OverlayType } from "@/app/_types/objects";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import Image from "next/image";
import classes from "./HeroSection.module.scss";
import { colorsAndGradients } from "@roo/shared/src/design/colors";

type Props = {
  texts: TextProps[];
  buttons?: ButtonProps[];
  innerOverlay?: OverlayType;
};

export default function HeroBubbleSection(props: Props) {
  const bgColor = props.innerOverlay?.overlayColor
    ? `bg-${props.innerOverlay.overlayColor}`
    : props.innerOverlay?.overlayClassname;

  const image = props.innerOverlay?.image;

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
            priority={true}
          />
        )}
        <div
          className={`relative min-h-150 w-full md:grid grid-cols-[2fr_1fr] flex items-center md:p-10 p-4  ${
            bgColor || " bg-transparent"
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
