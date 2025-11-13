import { ImageType } from "@/app/_types/objects";
import React from "react";
import { BlogPostCardProps } from "../types/blogPostTypes";
import Image from "next/image";
import Text from "@/app/_components/atoms/Text";
import Button from "@/app/_components/atoms/Button";
import { format } from "date-fns";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import PostTags from "./PostTags";

export default function BlogPostCard({
  image,
  title,
  excerpt,
  tags,
  createdAt,
  showButton = true,
  slug,
}: BlogPostCardProps) {
  const textArray = excerpt.substring(0, 80).split(" ");
  const text = textArray.splice(0, textArray.length - 1).join(" ");
  const formatedCreateDt = format(createdAt, "dd.MM.yyyy");

  return (
    <div className="border group flex flex-col relative border-borderLight rounded-xl shadow-lg overflow-hidden">
      <Image
        src={getImageSrc(image.src, "cms")}
        alt={image.alt}
        width={500}
        height={400}
        className="w-full"
      />
      <div className="p-3 flex flex-col justify-between gap-4 flex-1">
        <div>
          <Text text={title} tag="h2" size="headingSm" fontWeight="bold" />
          <Text text={`${text}...`} tag="p" size="bodyMd" />
        </div>
        {showButton && (
          <div className="flex w-full justify-between items-center">
            <Button
              text="Přejít na článek"
              size="md"
              bgColor="primaryTertiary"
              rounding="full"
              textColor="white"
              link={`/blog/${slug}`}
            />
            <Text text={formatedCreateDt.toString()} tag="h2" size="bodySm" />
          </div>
        )}
      </div>
      {tags && <PostTags tags={tags} />}
    </div>
  );
}
