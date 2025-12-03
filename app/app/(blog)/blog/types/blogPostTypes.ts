import { ImageType } from "@/app/_types/objects";
import { PostTagProps } from "../_components/PostTags";
import { TextProps } from "@/app/_components/atoms/text/Text";

export type BlogPostCardProps = {
  id: string;
  slug: string;
  image: ImageType;
  title: string;
  texts?: TextProps[];
  excerpt: string;
  tags?: PostTagProps[];
  createdAt: Date;
  showButton?: boolean;
};
