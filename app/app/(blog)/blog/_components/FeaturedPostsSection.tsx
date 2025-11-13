"use client";

import React, { useEffect } from "react";
import { BlogPostCardProps } from "../types/blogPostTypes";
import BlogPostCard from "./BlogPostCard";
import BlogPostMainFeaturedCard from "./BlogPostMainFeaturedCard";
import BlogPostFeaturedCard from "./BlogPostFeaturedCards";

type Props = {
  posts: BlogPostCardProps[];
};

export default function FeaturedPostsSection({ posts }: Props) {
  useEffect(() => {
    console.log(posts);
  }, []);

  const leftSidePosts = posts.slice(0, 3);
  return (
    <div className="grid lg:grid-cols-2 lg:mb-10 gap-5 w-full">
      <BlogPostMainFeaturedCard {...posts[0]} />
      <div className="grid lg:grid-rows-3 gap-5">
        {leftSidePosts.map((post, i) => {
          return (
            <BlogPostFeaturedCard
              {...post}
              tags={post.tags?.slice(0, 1)}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
