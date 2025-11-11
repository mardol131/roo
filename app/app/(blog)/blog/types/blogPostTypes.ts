import { ImageType } from "@/app/_types/objects";

export type BlogPostCardProps = {
  image: ImageType;
  title: string;
  excerpt: string;
  tags: string[];
  createdDt: Date;
  showButton?: boolean;
};
