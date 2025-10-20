import { LandingSectionWrapper } from "@/app/(landingPages)/test/_components/wrappers/LandingSectionWrapper";
import { textColor, TextColorType } from "@/app/_design/colors";
import { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";
import { IconsList, iconsList } from "@/app/_icons/_iconsList";
import { ImageType, OverlayType } from "@/app/_types/objects";
import Image from "next/image";
import React from "react";

type IconsTextProps = {
  image: ImageType;
  texts: TextProps[];
};

function IconsTextCard(props: IconsTextProps) {
  return (
    <div className="flex flex-col items-center gap-10 max-w-70">
      <Image
        src={props.image.src}
        alt={props.image.alt}
        width={300}
        height={300}
        className="w-70 h-70 object-cover object-center"
      />
      <div className="flex flex-col items-center gap-2 text-center">
        <GenerateTexts texts={props.texts} />
      </div>
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
      <div className="w-full flex flex-col items-center gap-10">
        {props.texts && (
          <div className="flex flex-col items-center text-center md:max-w-[60%] gap-4">
            <GenerateTexts texts={props.texts} />
          </div>
        )}
        <div className="flex max-lg:flex-col max-lg:items-center max-lg:gap-10 w-full justify-around">
          {props.iconsTextCards.map((card, i) => {
            return <IconsTextCard key={i} {...card} />;
          })}
        </div>
      </div>
    </LandingSectionWrapper>
  );
}
