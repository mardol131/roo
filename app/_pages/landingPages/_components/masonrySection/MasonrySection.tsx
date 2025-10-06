import React from "react";
import { LandingSectionWrapper } from "../wrappers/LandingSectionWrapper";
import {
  MasonryBubbleImage,
  MasonryBubbleImageProps,
} from "./MasonryBubbleImage";
import { MasonryBubbleText, MasonryBubbleTextProps } from "./MasonryBubbleText";
import { PayloadRichTextGenerator } from "@/app/_functions/transformations/payloadRichTextGenerator";
import { PayloadTextSectionType } from "@/app/_design/text";
import { OverlayType } from "@/app/_types/objects";
import Button, { ButtonPropsType } from "@/app/_global/atoms/Button";

export type MasonrySectionProps = {
  text: PayloadTextSectionType;
  bubbles: (MasonryBubbleImageProps | MasonryBubbleTextProps)[];
  overlay: OverlayType;
  button?: ButtonPropsType;
};

export default function MasonrySection(props: MasonrySectionProps) {
  return (
    <LandingSectionWrapper overlay={props.overlay}>
      <div className="max-w-landingWrapper w-full h-full flex flex-col items-center gap-10">
        <div className="w-full md:grid grid-cols-4 auto-rows-fr flex flex-col text-center gap-5">
          {props.bubbles.map((bubble, i) => {
            if ("image" in bubble) {
              return <MasonryBubbleImage key={bubble.image + i} {...bubble} />;
            }

            if ("text" in bubble || "heading" in bubble) {
              return (
                <MasonryBubbleText
                  key={
                    bubble.text
                      ? bubble.text.richText.root?.children[0].children[0]
                          .text + i
                      : i
                  }
                  {...bubble}
                />
              );
            }
          })}
        </div>
        <PayloadRichTextGenerator text={props.text} />
        {props.button?.text && <Button {...props.button} />}
      </div>
    </LandingSectionWrapper>
  );
}
