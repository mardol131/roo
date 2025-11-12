import { getCmsPage } from "@/app/_api/payload";
import { cache } from "react";

export const getPage = cache(async (pageSlug: string) => {
  const response = await getCmsPage(pageSlug);
  return response;
});
