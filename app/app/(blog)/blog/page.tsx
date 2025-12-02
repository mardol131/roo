import { getAllCmsPosts, getAllTags, getCmsPosts } from "@/app/_api/cms";
import BlogPostList from "./_components/BlogPostList";
import { BlogWrapper } from "./_components/BlogWrapper";
import { PostTagProps } from "./_components/PostTags";
import { getFeaturedPosts } from "./_functions/getFeaturedPosts";

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
