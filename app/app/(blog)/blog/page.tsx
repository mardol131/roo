import React from "react";
import FeaturedPostsSection from "./_components/FeaturedPostsSection";
import { BlogWrapper } from "./_components/BlogWrapper";
import BlogPostList from "./_components/BlogPostList";
import { getPosts } from "./_functions/getPosts";
import { redirect } from "next/navigation";
import { getFeaturedPosts } from "./_functions/getFeaturedPosts";
import Text from "@/app/_components/atoms/Text";
import { getAllCmsPosts, getAllTags, getCmsPosts } from "@/app/_api/payload";
import BlogCategoryFilterDropdown from "./_components/BlogCategoryFilterDropdown";
import { PostTagProps } from "./_components/PostTags";

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const revalidate = 3600;

export default async function page({ searchParams }: Props) {
  const query = await searchParams;

  const category = query?.category;

  let posts;
  let featuredPosts;

  if (category && typeof category === "string") {
    posts = await getAllCmsPosts(category);
  } else {
    posts = await getCmsPosts();
    featuredPosts = await getFeaturedPosts();
  }

  const tags = await getAllTags();

  const hasFeatured = featuredPosts?.docs?.length > 0;
  const hasPosts = posts?.docs?.length > 0;
  const hasTags = tags?.docs?.length > 0;

  const categoryTag = tags?.docs.find(
    (tag: PostTagProps) => tag.slug === category
  );

  return (
    <>
      <BlogWrapper>
        {hasPosts && (
          <BlogPostList
            posts={posts.docs}
            category={categoryTag}
            tags={tags.docs}
            featuredPosts={hasFeatured ? featuredPosts.docs : []}
          />
        )}
      </BlogWrapper>
    </>
  );
}
