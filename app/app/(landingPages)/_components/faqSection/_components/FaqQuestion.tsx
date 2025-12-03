"use client";

import Text from "@/app/_components/atoms/text/Text";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export type QuestionProps = {
  question: string;
  answer: string;
};

export function FaqQuestion(props: QuestionProps) {
  const [isOpen, setIsOpen] = useState(false);

  function openHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      onClick={openHandler}
      className="w-full flex flex-col gap-4 border-b border-borderLight pb-4 cursor-pointer hover:scale-105 animate"
    >
      <div className="flex justify-between">
        <Text
          text={props.question}
          tag="h4"
          color="black"
          fontWeight="semibold"
          size="bodyXl"
        />
        <div className="w-10 justify-self-end">
          {isOpen ? (
            <ChevronUp className="w-full h-full" />
          ) : (
            <ChevronDown className="w-full h-full" />
          )}
        </div>
      </div>
      {isOpen && (
        <Text text={props.answer} tag="p" size="bodyMd" color="black" />
      )}
    </div>
  );
}
