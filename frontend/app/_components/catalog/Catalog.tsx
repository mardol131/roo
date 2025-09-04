import React from "react";
import Section from "./Section";
import BubblesSection from "./BubblesSection";
import image from "../../../public/forest.jpg";

type Props = {};

export default function Catalog(props: Props) {
  const bubblesArray = [];

  for (let i = 0; i < 6; i++) {
    bubblesArray.push({
      image: { src: image.src },
      text: "Praha",
      link: "/hello",
    });
  }

  return (
    <div className="flex flex-col gap-16 max-w-contentWrapper w-full">
      <Section />
      <Section />
      <BubblesSection bubbles={bubblesArray} />
      <Section />
    </div>
  );
}
