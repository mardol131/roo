import React from "react";
import { redirect } from "next/navigation";
import { getLandingPage } from "@/app/_api/payload";
import { PayloadSectionsType } from "../_components/sectionList";
import { sectionsObject } from "../_components/sectionList";
import { WebsiteHeader } from "../_components/header/WebsiteHeader";
import { WebsiteHeaderMobile } from "../_components/header/WebsiteHeaderMobile";
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
        return <sectionsObject.cardssection key={i} {...section} />;
      case "comparisonsection":
        return <sectionsObject.comparisonsection key={i} {...section} />;
      case "formsection":
        return <sectionsObject.formsection key={i} {...section} />;
      case "heroOne":
        return <sectionsObject.heroOne key={i} {...section} />;
      case "textimagesection":
        return <sectionsObject.textimagesection key={i} {...section} />;
      case "masonrysection":
        return <sectionsObject.masonrysection key={i} {...section} />;
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
