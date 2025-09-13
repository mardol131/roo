import React from "react";
import Heading from "../global/atoms/Heading";
import SectionHeading from "../global/atoms/SectionHeading";
import ListingCard from "../global/cards/ListingCard";
import { getPublicCollectionData } from "@/app/_functions/api/getPublicCollectionData";

type Props = {};

export default async function CategorySection(props: Props) {
  const data = await getPublicCollectionData("listings");
  console.log(data);

  const cards = [];
  for (let i = 0; i < 5; i++) {
    cards.push(<ListingCard key={i} />);
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
