import React from "react";
import image from "@/app/_images/test.jpg";
import CategorySection from "../homepage/CategorySection";

type Props = {};

export default function CategoryListings({}: Props) {
  const bubblesArray = [];

  for (let i = 0; i < 6; i++) {
    bubblesArray.push({
      image: { src: image.src },
      text: "Praha",
      link: "/hello",
    });
  }

  return (
    <div className="flex flex-col gap-16 max-w-contentWrapper w-full p-8">
      <CategorySection />
      <CategorySection />
      <CategorySection />
      <CategorySection />
      <CategorySection />
      <CategorySection />
    </div>
  );
}
