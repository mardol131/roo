import React from "react";
import { BlogWrapper } from "../_components/BlogWrapper";
import { getPost } from "../_functions/getPost";
import { redirect } from "next/navigation";
import Image from "next/image";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import Text, { GenerateTexts } from "@/app/_components/atoms/Text";
import { BlogPostWrapper } from "../_components/BlogPostWrapper";
import PostTags, { PostTagProps } from "../_components/PostTags";
import { format } from "date-fns";
import { Metadata } from "next";
import Button from "@/app/_components/atoms/Button";

type PageComponentProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageComponentProps): Promise<Metadata> {
  const { slug } = await params;
  const response = await getPost(slug);
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
  const canonicalUrl = post.canonical;
  return {
    title: title || "ROO",
    description: description || "",
    alternates: {
      canonical: canonicalUrl,
    },
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

export default async function Page({ params }: PageComponentProps) {
  const { slug } = await params;

  const response = await getPost(slug);

  if (!response.docs) {
    redirect("/blog");
  }

  if (response.docs.length === 0) {
    redirect("/blog");
  }

  const post = response.docs[0];

  console.log(post);
  return (
    <div>
      <BlogPostWrapper>
        <div className="w-full py-4">
          <Button
            text="Zpět"
            size="lg"
            bgColor="white"
            rounding="sm"
            link="/blog"
          />
        </div>
        <div className="flex flex-col items-center gap-10">
          <Image
            src={getImageSrc(post.image.src, "cms")}
            width={1000}
            height={1000}
            alt={post.image.alt}
            className="rounded-xl shadow-xl w-full"
          />
          <div className="flex justify-between flex-wrap max-sm:gap-5 max-sm:justify-center items-center w-full">
            <div className=" flex flex-wrap items-center gap-5">
              <Text
                text="Štítky:"
                tag="p"
                size="bodyMd"
                fontWeight="semibold"
              />
              {post.tags && <PostTags tags={post.tags} isAbsolute={false} />}
            </div>
            <Text
              text={`Datum zveřejnění: ${format(post.createdAt, "dd.MM.yyyy")}`}
              tag="p"
              size="bodyMd"
              fontWeight="semibold"
              className="shrink-0"
            />
          </div>
          <Text
            text={post.title}
            tag="h1"
            size="headingLg"
            fontWeight="semibold"
            className="text-center"
          />
          <div className="max-w-200 flex flex-col gap-10">
            <GenerateTexts texts={post.texts} />
          </div>
        </div>
      </BlogPostWrapper>
    </div>
  );
}
