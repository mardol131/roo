export async function apiPost(url: string, payload: { [key: string]: any }) {
  const response = await fetch(url, {
    method: "post",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response;
}
