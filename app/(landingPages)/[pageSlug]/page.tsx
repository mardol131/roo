import React from "react";
import { getLandingPage } from "../_api/payload";
import {
  sectionListString,
  PayloadSectionsType,
} from "../_pages/landingPages/_components/_sectionList";
import { WebsiteHeader } from "../_pages/landingPages/_components/header/WebsiteHeader";
import { WebsiteHeaderMobile } from "../_pages/landingPages/_components/header/WebsiteHeaderMobile";
import { redirect } from "next/navigation";

type Props = {
  params: {
    pageSlug: string;
  };
};

export default async function page({ params }: Props) {
  const { pageSlug } = params;
  let data;
  try {
    const response = await getLandingPage(pageSlug);
    data = response;
    console.log(response);
    if (!response.docs.length) {
      redirect("/");
    }
    console.log(response);
  } catch {
    redirect("/");
  }
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

  return (
    <div>
      <>
        <WebsiteHeader />
        <WebsiteHeaderMobile />
        {sectionsToRender}
      </>
    </div>
  );
}
