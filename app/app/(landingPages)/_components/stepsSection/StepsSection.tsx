import React from "react";
import { LandingSectionWrapper } from "../wrappers/LandingSectionWrapper";
import Text, { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";
import { colors, ColorsType } from "@/app/_design/colors";

type StepProps = {
  number: string;
  texts: TextProps[];
  color: ColorsType;
  connector: "true" | "false";
};

export function Step(props: StepProps) {
  const color = props.color && colors[props.color];

  return (
    <div className="flex w-full flex-col items-center">
      <div
        style={{ borderColor: color }}
        className="flex max-sm:flex-col items-center sm:gap-10 gap-2 sm:p-1 p-5 border-6 sm:rounded-full rounded-3xl w-full"
      >
        <div
          style={{ backgroundColor: color }}
          className="h-full aspect-square min-h-30 flex items-center justify-center rounded-full"
        >
          <Text
            text={props.number}
            level="label1"
            fontWeight="xl"
            color="white"
          />
        </div>
        <div className="sm:mr-10 max-sm:text-center">
          <GenerateTexts texts={props.texts} />
        </div>
      </div>
      {props.connector === "true" && (
        <div style={{ backgroundColor: color }} className="w-5 h-20"></div>
      )}
    </div>
  );
}

type Props = {
  steps: StepProps[];
  textsTop?: TextProps[];
  textsBottom?: TextProps[];
};

export default function StepsSection(props: Props) {
  return (
    <LandingSectionWrapper>
      <div className="flex flex-col items-center gap-20">
        <div className="max-w-250 text-center">
          {props.textsTop && <GenerateTexts texts={props.textsTop} />}
        </div>
        <div className="max-w-170 w-full">
          {props.steps.map((step, i) => {
            return <Step key={i} {...step} />;
          })}
        </div>
        <div>
          {props.textsBottom && <GenerateTexts texts={props.textsBottom} />}
        </div>
      </div>
    </LandingSectionWrapper>
  );
}
