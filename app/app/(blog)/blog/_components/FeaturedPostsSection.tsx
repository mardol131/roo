import React from "react";
import { BlogPostCardProps } from "../types/blogPostTypes";
import BlogPostCard from "./BlogPostCards";

type Props = {
  posts: BlogPostCardProps[];
};

export default function FeaturedPostsSection({ posts }: Props) {
  const leftSidePosts = posts.slice(1, 5);
  return (
    <div className="grid grid-cols-2 gap-5 w-full">
      <BlogPostCard {...posts[0]} />
      <div className="grid grid-cols-2 gap-5">
        {leftSidePosts.map((post, i) => {
          return <BlogPostCard {...post} key={i} />;
        })}
      </div>
    </div>
  );
}
