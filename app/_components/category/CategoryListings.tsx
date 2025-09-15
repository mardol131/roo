import React from "react";
import image from "@/app/_images/test.jpg";
import CategorySection from "../homepage/CategorySection";
import ListingCard from "../global/cards/ListingCard";

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
      <div className="grid grid-cols-5 gap-x-5 gap-y-8 max-w-contentWrapper w-full p-8">
        {topCards}
        {cards}
      </div>
    </div>
  );
}
