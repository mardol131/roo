import React from "react";

import { LandingSectionWrapper } from "@/app/(landingPages)/_components/wrappers/LandingSectionWrapper";

import { GenerateTexts, TextProps } from "@/app/_components/atoms/Text";
import { OverlayType } from "@/app/_types/objects";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { colorsAndGradients } from "@roo/shared/src/design/colors";

export type ComparisonSectionProps = {
  texts: TextProps[];
  for: {
    texts: TextProps[];
    points: { text: string }[];
    overlay: OverlayType;
  };
  against: {
    texts: TextProps[];
    points: { text: string }[];
    overlay: OverlayType;
  };
  overlay?: OverlayType;
};

function CheckItem({
  text,
  Icon,
}: {
  text: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex items-center justify-start text-start gap-4">
      <Icon className="text-3xl" />
      <p className="text-2xl font-semibold">{text}</p>
    </div>
  );
}

export default function ComparisonSection(props: ComparisonSectionProps) {
  const bgFor = props.for.overlay?.overlayColor
    ? colorsAndGradients[props.for.overlay?.overlayColor]
    : props.for.overlay.overlayClassname;

  const bgAgainst = props.against.overlay?.overlayColor
    ? colorsAndGradients[props.against.overlay?.overlayColor]
    : props.against.overlay.overlayClassname;

  return (
    <LandingSectionWrapper overlay={props.overlay}>
      <div className="flex flex-col gap-20 text-center items-center justify-center w-full max-w-landingWrapper">
        <div className="flex flex-col gap-5">
          <GenerateTexts texts={props.texts} />
        </div>
        <div className="grid md:grid-cols-2 gap-4 w-full text-white">
          <div
            style={{
              backgroundImage: `url(${props.against.overlay.image?.src})`,
              backgroundSize: "cover",
            }}
            className="relative rounded-medium shadow-lg overflow-hidden"
          >
            <div
              className={`${bgAgainst} h-full md:p-15 p-7  items-start justify-between text-start flex flex-col gap-5`}
            >
              <div>
                <GenerateTexts texts={props.against.texts} />
              </div>
              <div className="flex flex-col gap-4 items-start">
                {props.against.points.map((point, i) => {
                  return <CheckItem key={i} text={point.text} Icon={FaXmark} />;
                })}
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${props.for.overlay.image?.src})`,
              backgroundSize: "cover",
            }}
            className="rounded-medium shadow-lg overflow-hidden"
          >
            <div
              className={`${bgFor} h-full md:p-15 p-7 rounded-medium shadow-lg items-start justify-between text-start flex flex-col gap-5`}
            >
              <div>
                <GenerateTexts texts={props.for.texts} />
              </div>{" "}
              <div className="flex flex-col gap-4 justify-start items-start">
                {props.for.points.map((point, i) => {
                  return <CheckItem key={i} text={point.text} Icon={FaCheck} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingSectionWrapper>
  );
}
