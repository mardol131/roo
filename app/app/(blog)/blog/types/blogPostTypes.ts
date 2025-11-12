import { ImageType } from "@/app/_types/objects";
import { PostTagProps } from "../_components/PostTag";

export type BlogPostCardProps = {
  image: ImageType;
  title: string;
  excerpt: string;
  tags: PostTagProps[];
  createdAt: Date;
  showButton?: boolean;
};
