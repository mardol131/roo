export function storeUtmParams() {
  if (typeof window === "undefined") return;

  const url = new URL(window.location.href);
  const params = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];

  const utm: Record<string, string> = {};

  params.forEach((param) => {
    const value = url.searchParams.get(param);
    if (value) utm[param] = value;
  });

  if (Object.keys(utm).length > 0) {
    sessionStorage.setItem("utm", JSON.stringify(utm));
  }
}
