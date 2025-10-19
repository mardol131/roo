import React from "react";
import { redirect } from "next/navigation";
import { getLandingPage } from "@/app/_api/payload";
type Props = {
  params: {
    pageSlug: string;
  };
};
import {
  SectionPropsMap,
  sectionsList,
} from "@/app/(landingPages)/test/_components/sectionList";

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
  } catch {
    redirect("/");
  }
  const sections: SectionPropsMap[] = data.docs[0].sections;

  const sectionsToRender = sections.map((section, i) => {
    switch (section.blockType) {
      case "BannerSection":
        return <sectionsList.BannerSection key={i} {...section} />;
      case "TextSection":
        return <sectionsList.TextSection key={i} {...section} />;
      case "ComparisonSection":
        return <sectionsList.ComparisonSection key={i} {...section} />;
      case "FaqSection":
        return <sectionsList.FaqSection key={i} {...section} />;

      case "FormSection":
        return <sectionsList.FormSection key={i} {...section} />;
      case "HeroBubbleSection":
        return <sectionsList.HeroBubbleSection key={i} {...section} />;
      case "IconsTextSection":
        return <sectionsList.IconsTextSection key={i} {...section} />;
      case "ImageTextSection":
        return <sectionsList.ImageTextSection key={i} {...section} />;
      case "MasonrySection":
        return <sectionsList.MasonrySection key={i} {...section} />;

      default:
        return null; // případný fallback
    }
  });

  return (
    <div>
      <>{sectionsToRender}</>
    </div>
  );
}
