import { getCmsPage } from "@/app/_api/payload";
import { cache } from "react";

export const getPage = cache(async (slug: string) => {
  const response = await getCmsPage(slug);
  return response;
});
