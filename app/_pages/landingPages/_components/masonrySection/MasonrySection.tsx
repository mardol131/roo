import React from "react";
import { LandingSectionWrapper } from "../wrappers/LandingSectionWrapper";
import {
  MasonryBubbleImage,
  MasonryBubbleImageProps,
} from "./MasonryBubbleImage";
import { MasonryBubbleText, MasonryBubbleTextProps } from "./MasonryBubbleText";

type Props = {
  text: string;
  bubbles: (MasonryBubbleImageProps | MasonryBubbleTextProps)[];
};

export default function MasonrySection(props: Props) {
  return (
    <LandingSectionWrapper>
      <div className="max-w-landingWrapper w-full h-full flex flex-col items-center gap-10">
        <div className=" md:grid grid-cols-4 auto-rows-fr flex flex-col text-center gap-5">
          {props.bubbles.map((bubble, i) => {
            if ("image" in bubble) {
              return <MasonryBubbleImage key={bubble.image} {...bubble} />;
            }

            if ("text" in bubble || "heading" in bubble) {
              return (
                <MasonryBubbleText
                  key={
                    bubble.text
                      ? bubble.text + i
                      : bubble.heading && bubble.heading + i
                  }
                  {...bubble}
                />
              );
            }
          })}
        </div>
        <p className="text-lg text-center">{props.text}</p>
      </div>
    </LandingSectionWrapper>
  );
}
