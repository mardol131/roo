import React from "react";
import { BlogPostCardProps } from "../types/blogPostTypes";
import BlogPostCard from "./BlogPostCard";
import Text from "@/app/_components/atoms/Text";

type Props = {
  posts: BlogPostCardProps[];
};

export default function BlogPostList({ posts }: Props) {
  return (
    <div className="flex flex-col w-full items-center gap-10">
      <Text
        tag="h2"
        size="headingLg"
        text="Další články"
        fontWeight="semibold"
      />
      <div className="grid grid-cols-4 gap-3">
        {posts.map((post, i) => {
          return <BlogPostCard {...post} key={i} />;
        })}
      </div>
    </div>
  );
}
