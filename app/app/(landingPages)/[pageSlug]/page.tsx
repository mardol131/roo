import React from "react";
import { redirect } from "next/navigation";

import { WebsiteHeader } from "../_components/header/WebsiteHeader";
import { WebsiteHeaderMobile } from "../_components/header/WebsiteHeaderMobile";
import { getLandingPage } from "../../_api/payload";
import { SectionPropsMap, sectionsList } from "../test/_components/sectionList";
import { ButtonProps } from "../../_global/atoms/Button";

type Props = { params: Promise<{ pageSlug: string }> };

export default async function page({ params }: Props) {
  const { pageSlug } = await params;

  let data;
  try {
    const response = await getLandingPage(pageSlug);
    data = response;
    if (!response.docs.length) {
      redirect("/");
    }
  } catch {
    redirect("/");
  }
  const sections: SectionPropsMap[] = data.docs[0].sections;
  const buttonDesktop: ButtonProps = data.docs[0].header.desktopHeaderButton;
  const buttonMobile: ButtonProps = data.docs[0].header.mobileHeaderButton;

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
      <WebsiteHeader button={buttonDesktop} />
      <WebsiteHeaderMobile button={buttonMobile} />
      {sectionsToRender}
    </div>
  );
}
