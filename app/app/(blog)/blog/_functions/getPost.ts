import { getCmsPost, getCmsPosts } from "@/app/_api/cms";
import { cache } from "react";

export const getPost = cache(async (slug: string) => {
  const response = await getCmsPost(slug);
  return response;
});
