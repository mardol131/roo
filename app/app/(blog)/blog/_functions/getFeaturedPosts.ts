import { getCmsFeaturedPosts, getCmsPosts } from "@/app/_api/cms";
import { cache } from "react";

export const getFeaturedPosts = cache(async () => {
  const response = await getCmsFeaturedPosts();
  return response;
});
