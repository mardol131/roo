import React from "react";
import image from "@/app/_images/test.jpg";
import ListingCard from "@/app/_components/cards/ListingCard";

type Props = {};

export default function CategoryListings({}: Props) {
  const cards = [];
  for (let i = 0; i < 43; i++) {
    cards.push(<ListingCard key={i} />);
  }

  const topCards = [];
  for (let i = 0; i < 5; i++) {
    topCards.push(<ListingCard key={i} />);
  }
  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-x-5 gap-y-8 w-full p-8 flex-wrap shrink">
        {topCards}
        {cards}
      </div>
    </div>
  );
}
