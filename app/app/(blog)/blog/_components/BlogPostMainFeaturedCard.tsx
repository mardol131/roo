import Button from "@/app/_components/atoms/button/Button";
import Text from "@/app/_components/atoms/text/Text";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { BlogPostCardProps } from "../types/blogPostTypes";
import PostTags from "./PostTags";

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
    <Link
      href={`/blog/${slug}`}
      className="relative hover:scale-102 animate border border-borderLight rounded-xl shadow-lg overflow-hidden"
    >
      <Image
        src={getImageSrc(image.src, "cms")}
        alt={image.alt}
        width={500}
        height={400}
        className="w-full object-cover"
        priority={true}
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
          />
          <Text text={formatedCreateDt.toString()} tag="h2" size="bodySm" />
        </div>
      </div>
    </Link>
  );
}
