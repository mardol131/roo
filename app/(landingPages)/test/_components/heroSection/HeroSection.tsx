import { LandingSectionWrapper } from "@/app/(landingPages)/_components/wrappers/LandingSectionWrapper";
import React from "react";
import Text, { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";
import Image, { ImageProps } from "next/image";
import { ButtonProps, GenerateButtons } from "@/app/_global/atoms/Button";

type Props = {
  texts: TextProps[];
  buttons?: ButtonProps[];
  image: ImageProps;
};

export default function HeroSection({ texts, buttons, image }: Props) {
  return (
    <LandingSectionWrapper>
      <div
        style={{
          backgroundImage: `url(${image.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="relative w-full rounded-4xl overflow-hidden"
      >
        <div className="relative min-h-150 w-full grid grid-cols-2 items-center p-10 bg-linear-90 from-black to-transparent">
          <div className="flex flex-col gap-5">
            <div>
              <GenerateTexts texts={texts} />
            </div>
            {buttons && <GenerateButtons buttons={buttons} />}
          </div>
        </div>
      </div>
    </LandingSectionWrapper>
  );
}
