import React from "react";
import { BlogPostCardProps } from "../types/blogPostTypes";
import BlogPostCard from "./BlogPostCard";
import Text from "@/app/_components/atoms/Text";

type Props = {
  posts: BlogPostCardProps[];
  hasFeatured?: boolean;
};

export default function BlogPostList({ posts, hasFeatured = true }: Props) {
  return (
    <div className="flex flex-col w-full items-center gap-10">
      <Text
        tag="h2"
        size="headingLg"
        text={hasFeatured ? "Další články" : "Články"}
        fontWeight="semibold"
      />
      <div className="grid blogPostColumns gap-3 w-full">
        {posts.map((post, i) => {
          return (
            <BlogPostCard {...post} tags={post.tags?.splice(0, 1)} key={i} />
          );
        })}
        {posts.map((post, i) => {
          return (
            <BlogPostCard {...post} tags={post.tags?.splice(0, 1)} key={i} />
          );
        })}
      </div>
    </div>
  );
}
