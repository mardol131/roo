export function storeUtmParams() {
    console.log("before");
    if (typeof window === "undefined")
        return;
    console.log("after");
    const url = new URL(window.location.href);
    const params = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];
    const utm = {};
    params.forEach((param) => {
        const value = url.searchParams.get(param);
        if (value)
            utm[param] = value;
    });
    if (Object.keys(utm).length > 0) {
        sessionStorage.setItem("utm", JSON.stringify(utm));
    }
}
