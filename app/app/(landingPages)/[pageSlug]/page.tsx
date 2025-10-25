import React, { cache } from "react";
import { redirect } from "next/navigation";

import { WebsiteHeader } from "../_components/header/WebsiteHeader";
import { WebsiteHeaderMobile } from "../_components/header/WebsiteHeaderMobile";
import { getLandingPage } from "../../_api/payload";
import { SectionPropsMap, sectionsList } from "../test/_components/sectionList";
import { ButtonProps } from "../../_global/atoms/Button";
import Head from "next/head";
import { getPost } from "../_functions/getPost";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { pageSlug: string };
}): Promise<Metadata> {
  const response = await getPost(params.pageSlug);
  const post = response.docs[0];
  const title = post.title;
  const description = post.description;
  const og = post.og;
  const validOgTypes = [
    "website",
    "article",
    "book",
    "music.song",
    "music.album",
    "music.playlist",
    "music.radio_station",
    "video.movie",
    "video.episode",
    "video.tv_show",
    "video.other",
  ];

  const ogType = validOgTypes.includes(og["og:type"])
    ? og["og:type"]
    : "website";
  const twitter = post.twitter;
  const jsonld = post.JSON_LD;
  console.log(post);
  return {
    title: title || "ROO",
    description: description || "",
    openGraph: og
      ? {
          title: og["og:title"] || title,
          description: og["og:description"] || description,
          url: og["og:url"],
          images: og["og:image"] ? [{ url: og["og:image"] }] : undefined,
          type: ogType || "website",
        }
      : undefined,
    twitter: twitter
      ? {
          card: twitter["twitter:card"] || "summary_large_image",
          title: twitter["twitter:title"] || title,
          description: twitter["twitter:description"] || description,
          images: twitter["twitter:image"]
            ? [twitter["twitter:image"]]
            : undefined,
        }
      : undefined,
    other: jsonld
      ? {
          "script:ld+json": JSON.stringify(jsonld),
        }
      : undefined,
  };
}

export default async function page({
  params,
}: {
  params: { pageSlug: string };
}) {
  const { pageSlug } = params;
  const response = await getPost(pageSlug);
  let data;
  try {
    data = response;
    if (!response.docs.length) {
      redirect("/");
    }
  } catch {
    redirect("/");
  }
  console.log(data.docs[0]);

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
