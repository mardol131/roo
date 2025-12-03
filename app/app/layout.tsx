import "./_css/animations.scss";
import "./_css/globals.scss";

import { GoogleTagManager } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import Footer from "./_components/footer/Footer";
import Header from "./_components/header/Header";
import LoginModal from "./_components/molecules/modals/AuthModal/LoginModal";
import StoreProvider from "./_redux/StoreProvider";

export async function generateMetadata() {
  const canonical = "https://www.rooevent.com/";
  const image =
    "https://roo-cdn.b-cdn.net/cms/man-opening-champagne-bottle.webp";
  const title = "ROO Event – Spojujeme dodavatele a pořadatele akcí";
  const description = "Najdi místo, catering i zábavu na jednom místě.";
  return {
    title: "Kontakt – Spoj se s týmem ROO Event",
    description:
      "Hledáš kapelu, catering nebo místo na oslavu? Na ROO Event najdeš všechny dodavatele na jednom místě. Spoj se s profíky, kteří rozjedou tvoji akci bez stresu.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="h-full">
      <GoogleTagManager gtmId="" />
      <body className="h-full">
        <div className="min-h-screen h-full flex flex-col">
          <StoreProvider>
            <NextIntlClientProvider>
              <Header />
              <LoginModal />
              <main className="flex-1 flex flex-col">{children}</main>
              <Footer />
            </NextIntlClientProvider>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
