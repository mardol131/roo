"use client";

import React, { useEffect } from "react";
import { BlogPostCardProps } from "../types/blogPostTypes";
import BlogPostCard from "./BlogPostCard";
import BlogPostMainFeaturedCard from "./BlogPostMainFeaturedCard";

type Props = {
  posts: BlogPostCardProps[];
};

export default function FeaturedPostsSection({ posts }: Props) {
  useEffect(() => {
    console.log(posts);
  }, []);

  const leftSidePosts = posts.slice(1, 5);
  return (
    <div className="grid grid-cols-2 gap-5 w-full">
      <BlogPostMainFeaturedCard {...posts[0]} />
      <div className="grid grid-cols-2 grid-rows-2 gap-5">
        {leftSidePosts.map((post, i) => {
          return <BlogPostCard {...post} key={i} />;
        })}
      </div>
    </div>
  );
}
