import { getCmsPosts } from "@/app/_api/payload";
import { cache } from "react";

export const getPosts = cache(async () => {
  const response = await getCmsPosts();
  return response;
});
