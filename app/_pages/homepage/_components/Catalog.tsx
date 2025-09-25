import React from "react";
import BubblesSection from "./BubblesSection";
import image from "@/app/_images/test.jpg";
import CategorySection from "./CategorySection";
import EmailCta from "../../../_global/cta/EmailCta";
import SectionWrapper from "../../../_global/wrappers/SectionWrapper";

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
      <div className=" pb-20 flex flex-col gap-16 max-w-contentWrapper w-full">
        <CategorySection />
        <CategorySection />
        <BubblesSection bubbles={bubblesArray} />
        <CategorySection />
        <CategorySection />
        <EmailCta
          heading="Buď v obraze!"
          text="  Lorem ipsum dolor sit amet consectetur adipisicing elit."
          buttonText="Odebírat novinky"
          webhookUrl="dsa898"
          buttonDesign="gradient"
        />
        <CategorySection />
        <CategorySection />
      </div>
    </SectionWrapper>
  );
}
