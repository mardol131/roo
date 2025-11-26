import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // Static for now, we'll change this later
  const locale = "cs";

  // Json files imports
  const header = (await import(`../_messages/${locale}/header.json`)).default;
  const landingPagesHeader = (
    await import(`../_messages/${locale}/landingPagesHeader.json`)
  ).default;
  const admin = (await import(`../_messages/${locale}/admin.json`)).default;

  // Combine all messages
  const messages = { header, landingPagesHeader, admin };

  return {
    locale,
    messages: messages,
  };
});
