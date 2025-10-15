import React from "react";
import { LandingSectionWrapper } from "../wrappers/LandingSectionWrapper";
import {
  MasonryBubbleImage,
  MasonryBubbleImageProps,
} from "./MasonryBubbleImage";
import { MasonryBubbleText, MasonryBubbleTextProps } from "./MasonryBubbleText";
import { OverlayType } from "@/app/_types/objects";
import Button, { ButtonPropsType } from "@/app/_global/atoms/Button";
import { generateTexts, TextProps } from "@/app/_global/atoms/Text";

export type MasonrySectionProps = {
  textsTop?: TextProps[];
  textsBottom?: TextProps[];
  bubbles: (MasonryBubbleImageProps | MasonryBubbleTextProps)[];
  overlay: OverlayType;
  button?: ButtonPropsType;
};

export default function MasonrySection(props: MasonrySectionProps) {
  return (
    <LandingSectionWrapper overlay={props.overlay}>
      <div className="max-w-landingWrapper w-full h-full flex flex-col items-center gap-10">
        {props.textsTop && generateTexts(props.textsTop)}
        <div className="w-full md:grid grid-cols-4 auto-rows-fr flex flex-col text-center gap-5">
          {props.bubbles.map((bubble, i) => {
            if ("image" in bubble) {
              return <MasonryBubbleImage key={i} {...bubble} />;
            }

            if ("texts" in bubble) {
              return <MasonryBubbleText key={i} {...bubble} />;
            }
          })}
        </div>
        {props.textsBottom && generateTexts(props.textsBottom)}
        {props.button?.text && <Button {...props.button} />}
      </div>
    </LandingSectionWrapper>
  );
}
