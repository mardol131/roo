import Button from "@/app/_components/atoms/button/Button";
import Text from "@/app/_components/atoms/text/Text";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { BlogPostCardProps } from "../types/blogPostTypes";
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
    <Link
      href={`/blog/${slug}`}
      className="border group hover:scale-102 animate flex flex-col relative border-borderLight rounded-xl shadow-lg overflow-hidden"
    >
      <Image
        src={getImageSrc(image.src, "cms")}
        alt={image.alt}
        width={500}
        height={400}
        className="w-full max-h-50 object-cover"
      />
      <div className="p-4 flex flex-col justify-between gap-8 flex-1">
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
            />
            <Text text={formatedCreateDt.toString()} tag="h2" size="bodySm" />
          </div>
        )}
      </div>
      {tags && <PostTags tags={tags} />}
    </Link>
  );
}
