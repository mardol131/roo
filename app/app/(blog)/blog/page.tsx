import React from "react";
import FeaturedPostsSection from "./_components/FeaturedPostsSection";
import { BlogWrapper } from "./_components/BlogWrapper";
import BlogPostList from "./_components/BlogPostList";
import { getPosts } from "./_functions/getPosts";
import { redirect } from "next/navigation";
import { getFeaturedPosts } from "./_functions/getFeaturedPosts";
import Text from "@/app/_components/atoms/Text";
import { getCmsPosts } from "@/app/_api/payload";

type Props = {};

export const revalidate = 60 * 60;

export default async function page({}: Props) {
  const posts = await getCmsPosts();

  const featuredPosts = await getFeaturedPosts();

  const hasFeatured = featuredPosts?.docs?.length > 0;
  const hasPosts = posts?.docs?.length > 0;

  return (
    <>
      <BlogWrapper>
        <Text
          text="Blog"
          tag="h1"
          size="headingLg"
          fontWeight="semibold"
          className="mb-10"
        />
        {hasFeatured && <FeaturedPostsSection posts={featuredPosts.docs} />}
      </BlogWrapper>
      <BlogWrapper>
        {hasPosts && <BlogPostList posts={posts.docs} />}
      </BlogWrapper>
    </>
  );
}
