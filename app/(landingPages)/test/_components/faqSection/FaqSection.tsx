import { LandingSectionWrapper } from "@/app/(landingPages)/_components/wrappers/LandingSectionWrapper";
import React from "react";
import { FaqQuestion, QuestionProps } from "./_components/FaqQuestion";
import { GenerateTexts, TextProps } from "@/app/_global/atoms/Text";

type Props = {
  texts?: TextProps[];
  questions: QuestionProps[];
};

export default function FaqSection(props: Props) {
  return (
    <LandingSectionWrapper>
      <div className="flex flex-col max-w-[60%] gap-10 w-full">
        {props.texts && (
          <div className="text-center">
            <GenerateTexts texts={props.texts} />
          </div>
        )}
        <div className="flex flex-col gap-8">
          {props.questions.map((item) => {
            return (
              <FaqQuestion
                question={item.question}
                answer={item.answer}
                key={item.question}
              />
            );
          })}
        </div>
      </div>
    </LandingSectionWrapper>
  );
}
