import React from "react";
import { getLandingPage } from "../_api/payload";
import {
  sectionListString,
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

  const sectionsToRender = sections.map((section, i) => {
    switch (section.blockType) {
      case "cardssection":
        return <sectionListString.cardssection key={i} {...section} />;
      case "comparisonsection":
        return <sectionListString.comparisonsection key={i} {...section} />;
      case "formsection":
        return <sectionListString.formsection key={i} {...section} />;
      case "herobackgroundimage":
        return <sectionListString.herobackgroundimage key={i} {...section} />;
      case "textimagesection":
        return <sectionListString.textimagesection key={i} {...section} />;
      case "masonrysection":
        return <sectionListString.masonrysection key={i} {...section} />;
      default:
        return null; // případný fallback
    }
  });

  return <div>{sectionsToRender}</div>;
}
