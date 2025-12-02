import { getCmsPage } from "@/app/_api/cms";
import { cache } from "react";

export const getPage = cache(async (slug: string) => {
  const response = await getCmsPage(slug);
  return response;
});
