import { ImageType } from "@/app/_types/objects";
import React from "react";
import { BlogPostCardProps } from "../types/blogPostTypes";
import Image from "next/image";
import Text from "@/app/_components/atoms/Text";
import Button from "@/app/_components/atoms/Button";
import { format } from "date-fns";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import PostTags from "./PostTag";

export default function BlogPostMainFeaturedCard({
  image,
  title,
  excerpt,
  tags,
  createdAt,
}: BlogPostCardProps) {
  const formatedCreateDt = format(createdAt, "dd.MM.yyyy");

  return (
    <div className="relative border border-borderLight rounded-xl shadow-lg overflow-hidden">
      <Image
        src={getImageSrc(image.src, "cms")}
        alt={image.alt}
        width={500}
        height={400}
        className="w-full"
      />
      <div className="p-8 flex flex-col gap-3">
        <Text text={title} tag="h2" size="headingLg" fontWeight="bold" />
        <Text text={`${excerpt}`} tag="p" size="bodyMd" />
        <div className="flex w-full justify-between items-center">
          <Button
            text="Ćíst dál"
            size="lg"
            bgColor="primaryTertiary"
            rounding="full"
            textColor="white"
          />
          <Text text={formatedCreateDt.toString()} tag="h2" size="bodySm" />
        </div>
      </div>
      <PostTags tags={tags} />
    </div>
  );
}
