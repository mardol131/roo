import React from "react";
import { LandingSectionWrapper } from "../wrappers/LandingSectionWrapper";
import Image from "next/image";
import Button from "@/app/_global/atoms/Button";
import Link from "next/link";
import { GradientsType, textColor, TextColorType } from "@/app/_design/colors";

type TextImageSectionProps = {
  heading: string;
  textOne: string;
  textTwo: string;
  overlay?: GradientsType;
  image?: string;
  textColor: TextColorType;
  imageSide: Sides;
  button?: {
    text: string;
    url: string;
  };
};

export default function TextImageSection(props: TextImageSectionProps) {
  return (
    <LandingSectionWrapper overlay={props.overlay}>
      <div className="grid grid-cols-2 items-center justify-items-center gap-10 max-w-300">
        <div
          className={`${
            props.imageSide === "left" ? "col-start-2" : "col-start-1"
          } ${
            props.textColor && textColor[props.textColor]
          } row-start-1 flex flex-col gap-8  col-span-1`}
        >
          <h2 className="font-bold text-6xl">{props.heading}</h2>
          <div className="flex flex-col gap-4">
            <p>{props.textOne}</p>
            <p>{props.textTwo}</p>
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
            } row-start-1 col-span-1 w-100 aspect-square object-cover rounded-medium shadow-lg object-center`}
          />
        )}
      </div>
    </LandingSectionWrapper>
  );
}
