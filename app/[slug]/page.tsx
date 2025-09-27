import React from "react";
import { getLandingPage } from "../_api/payload";
import {
  getSectionByBlockType,
  PayloadSectionsType,
} from "../_pages/landingPages/_components/_sectionList";

type Props = {
  params: {
    slug: string;
  };
};

export default async function page({ params }: Props) {
  const { slug } = params;
  const data = await getLandingPage(slug);
  const sections: PayloadSectionsType[] = data.docs[0].sections;
  const sectionsToRender = sections.map((section: PayloadSectionsType, i) => {
    const Component = getSectionByBlockType(section.blockType);
    return Component && <Component key={i} {...section} />;
  });

  console.log(sectionsToRender);
  return <div>{sectionsToRender}</div>;
}
