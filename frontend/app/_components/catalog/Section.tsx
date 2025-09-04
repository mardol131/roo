import React from "react";
import Heading from "../global/atoms/Heading";
import Card from "./Card";
import SectionHeading from "../global/atoms/SectionHeading";

type Props = {};

export default function Section(props: Props) {
  const cards = [];
  for (let i = 0; i < 4; i++) {
    cards.push(<Card key={i} />);
  }

  return (
    <div className="flex flex-col gap-11">
      <SectionHeading level="h2" text="Místo pro akci" />
      <div className="flex gap-8">
        {cards.map((card) => {
          return card;
        })}
      </div>
    </div>
  );
}
