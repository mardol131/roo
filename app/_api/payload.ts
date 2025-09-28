const PAYLOAD_URL = "http://localhost:3001/";

async function getPayloadApi(query: string) {
  const data = await fetch(`${PAYLOAD_URL}/api/${query}`, {
    method: "get",
    mode: "cors",
  });

  const json = await data.json();
  return json;
}

export async function getLandingPage(slug: string) {
  const query = `/pages?where[pageSlug][equals]=${slug}&limit=1`;

  const data = await getPayloadApi(query);
  return data;
}
