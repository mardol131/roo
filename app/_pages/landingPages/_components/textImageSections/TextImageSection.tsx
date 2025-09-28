import React from "react";
import { LandingSectionWrapper } from "../wrappers/LandingSectionWrapper";
import Image from "next/image";
import Button from "@/app/_global/atoms/Button";
import Link from "next/link";
import {
  ColorsAndGradientsType,
  textColor,
  TextColorType,
} from "@/app/_design/colors";
import LandingHeading, { LandingHeadingProps } from "../heading/LandingHeading";
import { Sides } from "@/app/_design/oriantation";
import { OverlayType } from "@/app/_types/objects";
import { TextSettingsType } from "@/app/_design/text";

export type TextImageSectionProps = {
  heading: LandingHeadingProps;
  textOne: TextSettingsType;
  textTwo?: TextSettingsType;
  overlay?: OverlayType;
  image?: string;
  imageSide: Sides;
  button?: {
    text: string;
    url: string;
  };
};

export default function TextImageSection(props: TextImageSectionProps) {
  return (
    <LandingSectionWrapper overlay={props.overlay}>
      <div className="md:grid flex flex-col grid-cols-2 items-center justify-items-center gap-10 max-w-landingWrapper w-full">
        <div
          className={`${
            props.imageSide === "left" ? "col-start-2" : "col-start-1"
          } row-start-1 flex flex-col gap-8 col-span-1`}
        >
          <LandingHeading {...props.heading} />
          <div className="flex flex-col gap-4">
            <p
              className={props.textOne.color && textColor[props.textOne.color]}
            >
              {props.textOne.text}
            </p>
            {props.textTwo && (
              <p
                className={
                  props.textTwo.color && textColor[props.textTwo.color]
                }
              >
                {props.textTwo.text}
              </p>
            )}
          </div>
          {props.button && (
            <Link href={props.button?.url}>
              <Button
                text={props.button?.text}
                color="white"
                size="xl"
                rounding="full"
              />
            </Link>
          )}
        </div>
        {props.image && (
          <Image
            src={props.image}
            width={500}
            height={500}
            alt="image"
            className={`${
              props.imageSide === "left" ? "col-start-1" : "col-start-2"
            } row-start-1 col-span-1 w-130 aspect-square object-cover rounded-medium shadow-lg object-center`}
          />
        )}
      </div>
    </LandingSectionWrapper>
  );
}
