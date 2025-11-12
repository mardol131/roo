import React from "react";
import image from "@/app/_images/place.jpg";
import FeaturedPostsSection from "./_components/FeaturedPostsSection";
import { BlogPostCardProps } from "./types/blogPostTypes";
import { BlogWrapper } from "./_components/BlogWrapper";
import BlogPostList from "./_components/BlogPostList";
import { getPosts } from "./_functions/getPosts";

type Props = {};

export default async function page({}: Props) {
  const response = await getPosts();
  const posts = response.docs;

  console.log(posts[0].tags);

  return (
    <>
      <BlogWrapper>
        <FeaturedPostsSection posts={posts} />
      </BlogWrapper>
      <BlogWrapper>
        <BlogPostList posts={posts} />
      </BlogWrapper>
    </>
  );
}
