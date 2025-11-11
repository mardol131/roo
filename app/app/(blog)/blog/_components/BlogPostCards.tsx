import { ImageType } from "@/app/_types/objects";
import React from "react";
import { BlogPostCardProps } from "../types/blogPostTypes";
import Image from "next/image";
import Text from "@/app/_components/atoms/Text";
import Button from "@/app/_components/atoms/Button";

export default function BlogPostCard({
  image,
  title,
  excerpt,
  tags,
  createdDt,
}: BlogPostCardProps) {
  const textArray = excerpt.substring(0, 120).split(" ");
  const text = textArray.splice(0, textArray.length - 1).join(" ");

  return (
    <div className="border border-borderLight rounded-xl shadow-lg overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        width={500}
        height={400}
        className="w-full"
      />
      <div className="p-5 flex flex-col gap-3">
        <Text text={title} tag="h2" size="headingMd" fontWeight="bold" />
        <Text text={`${text}...`} tag="p" size="bodyMd" />
        <div className="flex w-full justify-between items-center">
          <Button
            text="Ćíst dál"
            size="md"
            bgColor="primaryTertiary"
            rounding="full"
            textColor="white"
          />
          <Text text={createdDt.toString()} tag="h2" size="bodySm" />
        </div>
      </div>
    </div>
  );
}
