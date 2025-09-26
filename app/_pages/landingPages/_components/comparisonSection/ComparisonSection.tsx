import React from "react";
import { LandingSectionWrapper } from "../wrappers/LandingSectionWrapper";
import { MdClose } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { ImCheckmark } from "react-icons/im";
import { FaXmark } from "react-icons/fa6";

type ComparisonSectionProps = {
  heading: string;
  for: {
    heading: string;
    points: string[];
  };
  against: {
    heading: string;
    points: string[];
  };
};

export default function ComparisonSection(props: ComparisonSectionProps) {
  return (
    <LandingSectionWrapper classNameOuter="border-y border-borderLight">
      <div className="flex flex-col gap-10 text-center items-center justify-center w-full">
        <div className="max-w-landingWrapper text-center text-4xl font-bold">
          <h2>{props.heading}</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-landingWrapper w-full text-white">
          <div className="bg-linear-30 from-secondary to-primary p-15 rounded-medium shadow-lg flex flex-col gap-5">
            <h3 className="text-4xl font-bold">{props.against.heading}</h3>
            <div className="flex flex-col gap-4 items-center">
              {props.against.points.map((point) => {
                return (
                  <div
                    className="flex items-center justify-center gap-4"
                    key={point}
                  >
                    <FaXmark className="text-3xl" />
                    <p className="text-2xl font-semibold">{point}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-linear-30 from-primary to-tertiary p-15 rounded-medium shadow-lg flex flex-col gap-5">
            <h3 className="text-4xl font-bold">{props.for.heading}</h3>
            <div className="flex flex-col gap-4 items-center">
              {props.for.points.map((point) => {
                return (
                  <div
                    className="flex items-center justify-center gap-4"
                    key={point}
                  >
                    <ImCheckmark className="text-3xl" />
                    <p className="text-2xl font-semibold">{point}</p>
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
