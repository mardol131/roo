import { LandingSectionWrapper } from "@/app/(landingPages)/test/_components/wrappers/LandingSectionWrapper";
import { textColor, TextColorType } from "@/app/_design/colors";
import { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";
import { IconsList, iconsList } from "@/app/_icons/_iconsList";
import { ImageType, OverlayType } from "@/app/_types/objects";
import Image from "next/image";
import React from "react";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import { ButtonProps, GenerateButtons } from "@/app/_global/atoms/Button";

type IconsTextProps = {
  image: ImageType;
  texts: TextProps[];
  buttons?: ButtonProps[];
};

function IconsTextCard(props: IconsTextProps) {
  return (
    <div className="flex flex-col items-center justify-between gap-5 max-w-70 h-auto">
      <div className="flex flex-col items-center gap-5 text-center">
        {props.image.src && (
          <Image
            src={getImageSrc(props.image.src, "cms")}
            alt={props.image.alt}
            width={500}
            height={500}
            className="max-w-50 max-h-50 h-full w-full object-cover object-center"
          />
        )}
        <GenerateTexts texts={props.texts} />
      </div>
      {props.buttons && <GenerateButtons buttons={props.buttons} />}
    </div>
  );
}

type Props = {
  iconsTextCards: IconsTextProps[];
  texts?: TextProps[];
  overlay?: OverlayType;
};

export default function IconsTextSection(props: Props) {
  return (
    <LandingSectionWrapper overlay={props.overlay}>
      <div className="w-full flex flex-col items-center gap-15">
        {props.texts && (
          <div className="flex flex-col items-center text-center md:max-w-[60%] gap-4">
            <GenerateTexts texts={props.texts} />
          </div>
        )}
        <div className="flex max-lg:flex-col max-lg:items-center max-lg:gap-10 w-full h-full justify-around">
          {props.iconsTextCards.map((card, i) => {
            return <IconsTextCard key={i} {...card} />;
          })}
        </div>
      </div>
    </LandingSectionWrapper>
  );
}
