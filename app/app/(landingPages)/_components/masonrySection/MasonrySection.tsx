import React from "react";
import {
  MasonryBubbleImage,
  MasonryBubbleImageProps,
} from "./MasonryBubbleImage";
import { MasonryBubbleText, MasonryBubbleTextProps } from "./MasonryBubbleText";
import { OverlayType } from "@/app/_types/objects";
import Button, { ButtonProps } from "@/app/_global/atoms/Button";
import { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";
import { LandingSectionWrapper } from "../wrappers/LandingSectionWrapper";

export type MasonrySectionProps = {
  textsTop?: TextProps[];
  textsBottom?: TextProps[];
  bubbles: (MasonryBubbleImageProps | MasonryBubbleTextProps)[];
  overlay: OverlayType;
  button?: ButtonProps;
};

export default function MasonrySection(props: MasonrySectionProps) {
  return (
    <LandingSectionWrapper overlay={props.overlay}>
      <div className="w-full max-w-300 h-full flex flex-col items-center gap-10">
        <div className="flex flex-col items-center text-center">
          {props.textsTop && <GenerateTexts texts={props.textsTop} />}
        </div>
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
        <div className="flex flex-col items-center text-center">
          {props.textsBottom && <GenerateTexts texts={props.textsBottom} />}
        </div>
        {props.button?.text && <Button {...props.button} />}
      </div>
    </LandingSectionWrapper>
  );
}
