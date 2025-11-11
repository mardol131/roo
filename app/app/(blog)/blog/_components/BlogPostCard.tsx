import { ImageType } from "@/app/_types/objects";
import React from "react";
import { BlogPostCardProps } from "../types/blogPostTypes";
import Image from "next/image";
import Text from "@/app/_components/atoms/Text";
import Button from "@/app/_components/atoms/Button";
import { format } from "date-fns";

export default function BlogPostCard({
  image,
  title,
  excerpt,
  tags,
  createdDt,
  showButton = true,
}: BlogPostCardProps) {
  const textArray = excerpt.substring(0, 80).split(" ");
  const text = textArray.splice(0, textArray.length - 1).join(" ");
  const formatedCreateDt = format(createdDt, "dd.MM.yyyy");

  return (
    <div className="border relative border-borderLight rounded-xl shadow-lg overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        width={500}
        height={400}
        className="w-full"
      />
      <div className="p-3 flex flex-col gap-2">
        <Text text={title} tag="h2" size="headingSm" fontWeight="bold" />
        <Text text={`${text}...`} tag="p" size="bodyMd" />
        {showButton && (
          <div className="flex w-full justify-between items-center">
            <Button
              text="Ćíst dál"
              size="md"
              bgColor="primaryTertiary"
              rounding="full"
              textColor="white"
            />
            <Text text={formatedCreateDt.toString()} tag="h2" size="bodySm" />
          </div>
        )}
      </div>
      <div className="absolute top-5 left-5 bg-white rounded-md py-1 px-2">
        <Text text={tags[0]} size="bodyMd" tag="p" fontWeight="semibold" />
      </div>
    </div>
  );
}
