import { jwtVerify } from "jose";

export async function getPayloadApi(query: string) {
  console.log("hello", query);

  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_URL}/api/${query}`,
      {
        method: "get",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      }
    );

    const json = await data.json();
    return json;
  } catch {
    return null;
  }
}

export async function postPayloadApi(payload: any, query: string) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/${query}`, {
    method: "post",
    mode: "cors",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  });

  const json = await data.json();
  return json;
}

export async function getLandingPage(slug: string) {
  const query = `/pages?where[pageSlug][equals]=${slug}&limit=1`;
  return await getPayloadApi(query);
}

type UserLoginprops = {
  email: string;
  password: string;
};

export async function userLogin(data: UserLoginprops) {
  const query = "/users/login";

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api${query}`,
    {
      method: "post",
      mode: "cors",
      body: JSON.stringify(data),
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
