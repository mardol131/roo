import { getCmsFeaturedPosts, getCmsPosts } from "@/app/_api/payload";
import { cache } from "react";

export const getFeaturedPosts = cache(async () => {
  const response = await getCmsFeaturedPosts();
  return response;
});
