"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

type FAQCardType = {
  question: string;
  answer: string;
};

export function FAQCard(props: FAQCardType) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className="border-b-2 border-borderLight pb-3 flex flex-col gap-3 cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <h5 className="font-semibold">{props.question}</h5>
        {isOpen ? (
          <FaChevronUp className="text-pink" />
        ) : (
          <FaChevronDown className="text-pink" />
        )}
      </div>
      {isOpen && <p>{props.answer}</p>}
    </div>
  );
}
