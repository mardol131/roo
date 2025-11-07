import { returnResponse } from "@roo/shared/src/functions/api/returnResponse";

export async function apiPost(url: string, payload: { [key: string]: any }) {
  try {
    const response = await fetch(url, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return returnResponse({ success: true, data: response });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unexpected error";
    return returnResponse({ success: false, message: message });
  }
}
