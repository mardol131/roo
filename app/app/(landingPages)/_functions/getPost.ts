import { getLandingPage } from "@/app/_api/payload";
import { cache } from "react";

export const getPost = cache(async (pageSlug: string) => {
  const response = await getLandingPage(pageSlug);
  return response;
});
