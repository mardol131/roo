import { ImageType } from "@/app/_types/objects";
import React from "react";
import { BlogPostCardProps } from "../types/blogPostTypes";
import Image from "next/image";
import Text from "@/app/_components/atoms/Text";
import Button from "@/app/_components/atoms/Button";
import { format } from "date-fns";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import PostTags from "./PostTags";
import Link from "next/link";

export default function BlogPostMainFeaturedCard({
  image,
  title,
  excerpt,
  tags,
  createdAt,
  slug,
}: BlogPostCardProps) {
  const formatedCreateDt = format(createdAt, "dd.MM.yyyy");

  return (
    <div className=" relative border border-borderLight rounded-xl shadow-lg overflow-hidden">
      <Image
        src={getImageSrc(image.src, "cms")}
        alt={image.alt}
        width={500}
        height={400}
        className="w-full object-cover"
      />
      <div className=" h-full animate p-8 flex flex-col gap-5 max-lg:gap-3">
        {tags && <PostTags tags={tags} isAbsolute={false} />}
        <Text text={title} tag="h2" size="headingMd" fontWeight="bold" />
        <Text text={`${excerpt}`} tag="p" size="bodyMd" />
        <div className="flex w-full justify-between items-center">
          <Button
            text="Přejít na článek"
            size="lg"
            bgColor="primaryTertiary"
            rounding="full"
            textColor="white"
            link={`/blog/${slug}`}
          />
          <Text text={formatedCreateDt.toString()} tag="h2" size="bodySm" />
        </div>
      </div>
    </div>
  );
}
