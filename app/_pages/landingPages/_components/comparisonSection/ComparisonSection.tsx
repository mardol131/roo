import React from "react";
import { LandingSectionWrapper } from "../wrappers/LandingSectionWrapper";
import { MdClose } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { ImCheckmark } from "react-icons/im";
import { FaXmark } from "react-icons/fa6";
import LandingHeading, { LandingHeadingProps } from "../heading/LandingHeading";
import { LandingHeadingType } from "@/app/_design/text";
import { ColorsAndGradientsType } from "@/app/_design/colors";
import { OverlayType } from "@/app/_types/objects";

export type ComparisonSectionProps = {
  heading: LandingHeadingProps;
  for: {
    heading: string;
    points: { text: string; id: string }[];
  };
  against: {
    heading: string;
    points: { text: string; id: string }[];
  };
  overlay?: OverlayType;
};

export default function ComparisonSection(props: ComparisonSectionProps) {
  return (
    <LandingSectionWrapper overlay={props.overlay}>
      <div className="flex flex-col gap-10 text-center items-center justify-center w-full max-w-landingWrapper">
        <LandingHeading {...props.heading} />
        <div className="grid md:grid-cols-2 gap-4 w-full text-white">
          <div className="bg-linear-30 from-secondary to-primary md:p-15 p-5 rounded-medium shadow-lg flex flex-col gap-5">
            <h3 className="text-4xl font-bold">{props.against.heading}</h3>
            <div className="flex flex-col gap-4 items-center">
              {props.against.points.map((point) => {
                return (
                  <div
                    className="flex items-center justify-center gap-4"
                    key={point.id}
                  >
                    <FaXmark className="text-3xl" />
                    <p className="text-2xl font-semibold">{point.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-linear-30 from-primary to-tertiary md:p-15 p-5 rounded-medium shadow-lg flex flex-col gap-5">
            <h3 className="text-4xl font-bold">{props.for.heading}</h3>
            <div className="flex flex-col gap-4 items-center">
              {props.for.points.map((point) => {
                return (
                  <div
                    className="flex items-center justify-center gap-4"
                    key={point.id}
                  >
                    <ImCheckmark className="text-3xl" />
                    <p className="text-2xl font-semibold">{point.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </LandingSectionWrapper>
  );
}
