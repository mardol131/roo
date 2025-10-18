import { LandingSectionWrapper } from "@/app/(landingPages)/_components/wrappers/LandingSectionWrapper";
import { ButtonProps, GenerateButtons } from "@/app/_global/atoms/Button";
import { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";
import React from "react";

type Props = {
  texts: TextProps[];
  buttons: ButtonProps[];
};

export default function TextSection(props: Props) {
  return (
    <LandingSectionWrapper>
      <div className="flex flex-col items-center gap-5 text-center max-w-300">
        <GenerateTexts texts={props.texts} />
        <div>
          <GenerateButtons buttons={props.buttons} />
        </div>
      </div>
    </LandingSectionWrapper>
  );
}
