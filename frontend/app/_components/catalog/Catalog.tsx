import React from "react";
import BubblesSection from "./BubblesSection";
import image from "@/app/_images/test.jpg";
import CatalogGroupSection from "./CatalogGroupSection";
import EmailCta from "../global/cta/EmailCta";
import SectionWrapper from "../wrappers/SectionWrapper";

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
    <SectionWrapper>
      <div className="flex flex-col gap-16 max-w-contentWrapper w-full">
        <CatalogGroupSection />
        <CatalogGroupSection />
        <BubblesSection bubbles={bubblesArray} />
        <CatalogGroupSection />
        <CatalogGroupSection />
        <EmailCta
          heading="Buď v obraze!"
          text="  Lorem ipsum dolor sit amet consectetur adipisicing elit."
          buttonText="Odebírat novinky"
          webhookUrl="dsa898"
          buttonDesign="gradient"
        />
        <CatalogGroupSection />
        <CatalogGroupSection />
      </div>
    </SectionWrapper>
  );
}
