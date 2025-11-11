import React from "react";
import image from "@/app/_images/place.jpg";
import FeaturedPostsSection from "./_components/FeaturedPostsSection";
import { BlogPostCardProps } from "./types/blogPostTypes";
import { BlogWrapper } from "./_components/BlogWrapper";
import BlogPostList from "./_components/BlogPostList";

type Props = {};

export default function page({}: Props) {
  const postFixture: BlogPostCardProps = {
    image: { src: image.src, alt: "image" },
    title: "Jak získat větší počet zákazníků",
    excerpt:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae molestiae tempora ab illo? Adipisci neque debitis, sequi laboriosam ullam libero dolores molestias eaque quod accusamus ex, laudantium, ipsa deleniti quibusdam!",
    tags: ["Hello", "Tohle"],
    createdDt: new Date(),
  };
  const featured: BlogPostCardProps[] = [
    postFixture,
    postFixture,
    postFixture,
    postFixture,
    postFixture,
  ];

  return (
    <>
      <BlogWrapper>
        <FeaturedPostsSection posts={featured} />
      </BlogWrapper>
      <BlogWrapper>
        <BlogPostList posts={featured} />
      </BlogWrapper>
    </>
  );
}
