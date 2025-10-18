import React from "react";
import { LandingSectionWrapper } from "../wrappers/LandingSectionWrapper";
import Image from "next/image";
import Button, { ButtonProps } from "@/app/_global/atoms/Button";
import Link from "next/link";
import {
  ColorsAndGradientsType,
  textColor,
  TextColorType,
} from "@/app/_design/colors";
import LandingHeading, { LandingHeadingProps } from "../heading/LandingHeading";
import { Sides } from "@/app/_design/orientation";
import { OverlayType } from "@/app/_types/objects";
import { PayloadTextSectionType, TextSettingsType } from "@/app/_design/text";
import { PayloadRichTextGenerator } from "@/app/_functions/transformations/payloadRichTextGenerator";
import Text, { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";

export type TextImageSectionProps = {
  heading: LandingHeadingProps;
  texts: TextProps[];
  overlay?: OverlayType;
  image?: string;
  imageSide: Sides;
  buttonUndertext?: ButtonProps;
  buttonUnderSection?: ButtonProps;
};

export default function TextImageSection(props: TextImageSectionProps) {
  return (
    <LandingSectionWrapper overlay={props.overlay} classNameInner="flex-col">
      <div className="md:grid flex flex-col grid-cols-2 items-center justify-items-center gap-10 max-w-landingWrapper w-full">
        <div
          className={`${
            props.imageSide === "left" ? "col-start-2" : "col-start-1"
          } row-start-1 flex flex-col items-start gap-8 col-span-1`}
        >
          <LandingHeading {...props.heading} />
          <GenerateTexts texts={props.texts} />
          {props.buttonUndertext?.text && <Button {...props.buttonUndertext} />}
        </div>
        {props.image && (
          <Image
            src={props.image}
            width={500}
            height={500}
            alt="image"
            className={`${
              props.imageSide === "left"
                ? "col-start-1 justify-self-start"
                : "col-start-2 justify-self-end"
            } row-start-1 col-span-1 w-130 aspect-square object-cover rounded-4xl shadow-lg object-center`}
          />
        )}
      </div>
      <div className="mt-15 text-center">
        {props.buttonUnderSection?.text && (
          <Button {...props.buttonUnderSection} />
        )}
      </div>
    </LandingSectionWrapper>
  );
}
