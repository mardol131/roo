import React from "react";
import { BlogPostCardProps } from "../types/blogPostTypes";
import BlogPostCard from "./BlogPostCard";
import Text from "@/app/_components/atoms/Text";
import { PostTagProps } from "./PostTags";
import BlogCategoryFilterDropdown from "./BlogCategoryFilterDropdown";
import FeaturedPostsSection from "./FeaturedPostsSection";

type Props = {
  posts: BlogPostCardProps[];
  featuredPosts?: BlogPostCardProps[];
  hasFeatured?: boolean;
  category?: PostTagProps;
  tags?: PostTagProps[];
};

export default function BlogPostList({
  posts,
  hasFeatured = true,
  category,
  tags,
  featuredPosts,
}: Props) {
  console.log("category in BlogPostList:", category);
  return (
    <>
      <div className="flex flex-col w-full items-center gap-10 py-10">
        {!category && (
          <div className="grid grid-cols-[1fr_3fr_1fr] items-center w-full">
            <BlogCategoryFilterDropdown
              currentTag={"Všechny kategorie"}
              tags={tags ? tags : []}
            />
            <Text
              text="Blog"
              tag="h1"
              size="headingLg"
              fontWeight="semibold"
              className=" justify-self-center"
            />
          </div>
        )}
        {hasFeatured && !category && featuredPosts && (
          <FeaturedPostsSection posts={featuredPosts} />
        )}
        <div className="grid grid-cols-[1fr_3fr_1fr] items-center w-full">
          {tags && category ? (
            <BlogCategoryFilterDropdown
              currentTag={category?.title || "Všechny kategorie"}
              tags={tags}
            />
          ) : (
            <div></div>
          )}
          <Text
            tag="h2"
            size="headingLg"
            text={
              category
                ? category.title
                : hasFeatured
                  ? "Další články"
                  : "Články"
            }
            fontWeight="semibold"
            className="justify-self-center"
          />
        </div>
        <div className="grid blogPostColumns gap-5 w-full">
          {posts.map((post, i) => {
            return (
              <BlogPostCard {...post} tags={post.tags?.splice(0, 1)} key={i} />
            );
          })}
        </div>
      </div>
    </>
  );
}
