import React from "react";
import FeaturedPostsSection from "./_components/FeaturedPostsSection";
import { BlogWrapper } from "./_components/BlogWrapper";
import BlogPostList from "./_components/BlogPostList";
import { getPosts } from "./_functions/getPosts";
import { redirect } from "next/navigation";
import { getFeaturedPosts } from "./_functions/getFeaturedPosts";

type Props = {};

export default async function page({}: Props) {
  const posts = await getPosts();

  const featuredPosts = await getFeaturedPosts();

  console.log("featured", posts);
  return (
    <>
      <BlogWrapper>
        {featuredPosts.docs && featuredPosts.docs.length > 0 && (
          <FeaturedPostsSection posts={featuredPosts.docs} />
        )}
      </BlogWrapper>
      <BlogWrapper>
        {posts.docs && posts.docs.length > 0 && (
          <BlogPostList posts={posts.docs} />
        )}
      </BlogWrapper>
    </>
  );
}
