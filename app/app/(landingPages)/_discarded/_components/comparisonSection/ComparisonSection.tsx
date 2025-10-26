import React, { ReactNode } from "react";
import { LandingSectionWrapper } from "../../../_components/wrappers/LandingSectionWrapper";
import { MdClose } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { ImCheckmark } from "react-icons/im";
import { FaCheck, FaXmark } from "react-icons/fa6";
import LandingHeading, { LandingHeadingProps } from "../heading/LandingHeading";
import { LandingHeadingType } from "@/app/_design/text";
import { ColorsAndGradientsType } from "@/app/_design/colors";
import { OverlayType } from "@/app/_types/objects";
import Text from "@/app/_global/atoms/Text";
import { Check } from "lucide-react";

export type ComparisonSectionProps = {
  heading: LandingHeadingProps;
  for: {
    heading: string;
    points: { text: string }[];
  };
  against: {
    heading: string;
    points: { text: string }[];
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
  return (
    <LandingSectionWrapper overlay={props.overlay}>
      <div className="flex flex-col gap-20 text-center items-center justify-center w-full max-w-landingWrapper">
        <LandingHeading {...props.heading} />
        <div className="grid md:grid-cols-2 gap-4 w-full text-white">
          <div className="bg-linear-30 from-secondary to-primary md:p-15 p-10 rounded-medium shadow-lg items-start justify-between text-start flex flex-col gap-5">
            <Text text={props.against.heading} level="label3" fontWeight="lg" />
            <div className="flex flex-col gap-4 items-start">
              {props.against.points.map((point, i) => {
                return <CheckItem key={i} text={point.text} Icon={FaXmark} />;
              })}
            </div>
          </div>
          <div className="bg-linear-30 from-primary to-tertiary md:p-15 p-10 rounded-medium shadow-lg items-start justify-between text-start flex flex-col gap-5">
            <Text text={props.for.heading} level="label3" fontWeight="lg" />
            <div className="flex flex-col gap-4 justify-start items-start">
              {props.for.points.map((point, i) => {
                return <CheckItem key={i} text={point.text} Icon={FaCheck} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </LandingSectionWrapper>
  );
}
