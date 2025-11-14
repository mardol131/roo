import { WebsiteHeader } from "@/app/(landingPages)/_components/header/WebsiteHeader";
import { WebsiteHeaderMobile } from "@/app/(landingPages)/_components/header/WebsiteHeaderMobile";
import type { Metadata } from "next";
import { UTMInit } from "@roo/shared/src/functions/analytics/UTMInit";

export async function generateMetadata() {
  const canonical = "https://www.rooevent.com/blog";
  const image =
    "https://roo-cdn.b-cdn.net/cms/man-opening-champagne-bottle.webp";
  const title = "Blog ROO Event";
  const description =
    "Inspirace a know-how pro ty, co chtějí dělat akce chytře";
  return {
    title: "Blog ROO Event – Tipy, inspirace a know-how pro organizátory akcí",
    description:
      "Jak vybrat catering, prostor nebo kapelu? Na blogu ROO Event sdílíme zkušenosti, rady a inspiraci od lidí z eventového světa. Nauč se dělat akce, které mají efekt.",
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: title,
      description: description,
      url: canonical,
      images: image,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: image,
    },
  };
}

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <UTMInit />
      <div className="flex flex-col">
        <WebsiteHeader
          button={{ bgColor: "primaryTertiary", text: "Přidej se k nám" }}
        />
        <WebsiteHeaderMobile
          button={{ bgColor: "primaryTertiary", text: "Přidej se k nám" }}
        />
        {children}
      </div>
    </>
  );
}
