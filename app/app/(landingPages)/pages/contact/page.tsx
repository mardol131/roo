import { WebsiteHeader } from "../../_components/header/WebsiteHeader";
import { WebsiteHeaderMobile } from "../../_components/header/WebsiteHeaderMobile";
import { LandingSectionWrapper } from "../../_components/wrappers/LandingSectionWrapper";

import Text from "@/app/_components/atoms/Text";
import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import Image from "next/image";
import { LuMail } from "react-icons/lu";
import ContactForm from "./ContactForm";

export async function generateMetadata() {
  const canonical = "https://www.rooevent.com/stranky/kontakt";
  const image = "https://roo-cdn.b-cdn.net/cms/celebrate.webp";
  const title = "Kontakt | ROO Event";
  const description =
    "Potřebuješ pomoc s výběrem dodavatele nebo místem? Ozvi se nám.";
  return {
    title: "Kontakt – Spoj se s týmem ROO Event",
    description:
      "Máš dotaz nebo potřebuješ poradit s výběrem dodavatelů? Napiš nám nebo zavolej. Jsme tu, abychom ti pomohli naplánovat akci bez stresu.",
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: title,
      description: description,
      url: canonical,
      images: image,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: title,
      description: description,
      images: image,
    },
  };
}

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <WebsiteHeader
        button={{
          text: "Přidej se k nám",
          size: "xl",
          rounding: "full",
          bgColor: "primaryTertiary",
          textColor: "white",
        }}
      />
      <WebsiteHeaderMobile
        button={{
          text: "Přidej se k nám",
          size: "xl",
          rounding: "full",
          bgColor: "primaryTertiary",
          textColor: "white",
        }}
      />
      <LandingSectionWrapper>
        <div className="relative rounded-xl overflow-hidden shadow-xl max-md:mt-10">
          <Image
            src={getImageSrc("celebrate.webp", "cms")}
            alt="Celebrate"
            height={1500}
            width={1500}
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
          />
          <div className="bg-tertiary h-full z-10 gap-10 grid lg:grid-cols-2 w-full lg:p-10 p-5">
            <div className="z-10 flex flex-col items-start justify-between gap-20">
              <div className="flex flex-col gap-10">
                <Text
                  tag="h2"
                  size="headingMd"
                  text="Máš dotaz nebo potřebuješ pomoct? Ozvi se nám!"
                  fontWeight="semibold"
                  color="white"
                />
                <div className="flex items-center gap-5">
                  <LuMail className="w-10 h-10 text-white" />
                  <Text
                    tag="p"
                    size="headingSm"
                    text="hi@roo.events"
                    fontWeight="semibold"
                    color="white"
                  />
                </div>
              </div>
              <Text
                tag="p"
                text="Platformu ROO provozuje společnost The Roosters s.r.o., IČ 06347231, se sídlem v ulici Lidická 900/19, 602 00 Brno - Střed, zapsaná u Krajského soudu v Brně, spisová značka C 111516/KSBR"
                color="white"
              />
            </div>
            <div className="z-10">
              <ContactForm webhook="/" />
            </div>
          </div>
        </div>
      </LandingSectionWrapper>
    </div>
  );
}
