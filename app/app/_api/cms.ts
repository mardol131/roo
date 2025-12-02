import { jwtVerify } from "jose";
import * as qs from "qs";
import { cache } from "react";
import { Country, District, Municipality, Region } from "../_types/locality";

export type Methods = "get" | "post" | "put" | "delete" | "patch";

export type CmsResponse<T> = {
  docs: T[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  page: number;
  nextPage: number | null;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
};

export async function fetchPublicData({
  query,
  cache,
  method = "get",
}: {
  query: string;
  cache?: "no-store";
  method?: Methods;
}) {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api${query}`, {
      method,
      headers: { "Content-Type": "application/json" },
      cache: cache || undefined,
    });

    const json = await data.json();
    return json;
  } catch {
    return null;
  }
}

export async function postPayloadApi(payload: any, query: string) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/${query}`, {
    method: "post",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });

  const json = await data.json();
  return json;
}

export async function getCmsPage(slug: string) {
  const query = `/pages?where[slug][equals]=${slug}&limit=1`;
  return await fetchPublicData({ query });
}

export async function getCmsPosts() {
  const query = `/posts?[where][featured][not_equals]=true&depth=1`;
  return await fetchPublicData({ query });
}

export async function getCmsPost(slug: string) {
  const query = `/posts?[where][slug][equals]=${slug}&depth=1`;
  return await fetchPublicData({ query });
}

export async function getCmsFeaturedPosts() {
  const query = `/posts?[where][featured][equals]=true&depth=1`;
  return await fetchPublicData({ query });
}

export async function getAllTags() {
  const query = `/blog-tags`;
  return await fetchPublicData({ query });
}

export async function getAllCmsPosts(slug: string) {
  const q = {
    where: {
      "tags.slug": { equals: slug },
    },
  };

  const queryString = qs.stringify(q, { encodeValuesOnly: true });
  const query = `/posts?${queryString}&depth=1`;
  return await fetchPublicData({ query, cache: "no-store" });
}

export async function getAllRegions({
  limit,
  searchQuery,
}: {
  limit?: number;
  searchQuery?: string;
}): Promise<CmsResponse<Region>> {
  const queryString = qs.stringify(
    { where: { name: { contains: searchQuery } } },
    { encodeValuesOnly: true }
  );
  const query = `/regions?${queryString}&sort=name${limit ? `&limit=${limit}` : ""}`;
  return await fetchPublicData({ query, cache: "no-store" });
}

export async function getAllCountries({
  limit,
  searchQuery,
}: {
  limit?: number;
  searchQuery?: string;
}): Promise<CmsResponse<Country>> {
  const queryString = qs.stringify(
    { where: { name: { contains: searchQuery } } },
    { encodeValuesOnly: true }
  );
  const query = `/countries?${queryString}${limit ? `&limit=${limit}` : ""}`;
  return await fetchPublicData({ query, cache: "no-store" });
}

export async function getAllDistricts({
  limit,
  searchQuery,
}: {
  limit?: number;
  searchQuery?: string;
}): Promise<CmsResponse<District>> {
  const queryString = qs.stringify(
    { where: { name: { contains: searchQuery } } },
    { encodeValuesOnly: true }
  );
  const query = `/districts?${queryString}${limit ? `&limit=${limit}` : ""}`;
  return await fetchPublicData({ query, cache: "no-store" });
}

export async function getAllMunicipalities({
  limit,
  searchQuery,
}: {
  limit?: number;
  searchQuery?: string;
}): Promise<CmsResponse<Municipality>> {
  const queryString = qs.stringify(
    { where: { name: { contains: searchQuery } } },
    { encodeValuesOnly: true }
  );
  const query = `/municipalities?${queryString}${limit ? `&limit=${limit}` : ""}`;
  return await fetchPublicData({ query, cache: "no-store" });
}

type UserLoginprops = {
  email: string;
  password: string;
};

export async function userLogin({ email, password }: UserLoginprops) {
  const query = "/users/login";

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api${query}`,
    {
      method: "post",
      mode: "cors",
      body: JSON.stringify({ email, password }),
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }
  );

  const json = await response.json();

  return json;
}

export async function userSignup({ email, password }: UserLoginprops) {
  const query = "/users";

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api${query}`,
    {
      method: "post",
      mode: "cors",
      body: JSON.stringify({ email, password }),
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }
  );

  const json = await response.json();

  return json;
}

export interface JWTPayload {
  id: string; // MongoDB ObjectId nebo string
  collection: string; // název kolekce, např. 'users'
  email: string; // email uživatele
  sid: string; // session ID
  role: "admin"; // role uživatele, např. 'admin'
  iat: number; // issued at (timestamp)
  exp: number; // expiration (timestamp)
}

export async function decryptPayloadJwt(token: string) {
  if (!process.env.PAYLOAD_SECRET)
    throw new Error("PAYLOAD_SECRET není nastaven");

  const encoder = new TextEncoder();
  const keyData = encoder.encode(process.env.PAYLOAD_SECRET);

  // SHA-256 hash z Payload secret
  const hashBuffer = await crypto.subtle.digest("SHA-256", keyData);

  // hex string, prvních 32 znaků (Payload kompatibilní)
  const secretHex = Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, 32);

  // jose očekává Uint8Array
  const secretBytes = new TextEncoder().encode(secretHex);

  const { payload } = await jwtVerify(token, secretBytes);

  return payload;
}
