import React from "react";
import Heading from "../global/atoms/Heading";
import SectionHeading from "../global/atoms/SectionHeading";
import OfferCard from "../global/cards/OfferCard";

type Props = {};

export default function CatalogGroupSection(props: Props) {
  const cards = [];
  for (let i = 0; i < 4; i++) {
    cards.push(<OfferCard key={i} />);
  }

  return (
    <div className="flex flex-col gap-11">
      <SectionHeading level="h2" text="Místo pro akci" />
      <div className="flex gap-5">
        {cards.map((card) => {
          return card;
        })}
      </div>
    </div>
  );
}
