import { WebsiteHeader } from "../../_components/header/WebsiteHeader";
import { WebsiteHeaderMobile } from "../../_components/header/WebsiteHeaderMobile";
import { LandingSectionWrapper } from "../../_components/wrappers/LandingSectionWrapper";

import { getImageSrc } from "@roo/shared/src/functions/media/getImageSrc";
import Image from "next/image";
import ContactForm from "./ContactForm";
import Text from "@/app/_global/atoms/Text";
import { Mail } from "lucide-react";
import { LuMail } from "react-icons/lu";

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
                  level="h2"
                  text="Máš dotaz nebo potřebuješ pomoct? Ozvi se nám!"
                  fontWeight="xl"
                  color="white"
                />
                <div className="flex items-center gap-5">
                  <LuMail className="w-10 h-10 text-white" />
                  <Text
                    level="label5"
                    text="hi@roo.events"
                    fontWeight="xl"
                    color="white"
                  />
                </div>
              </div>
              <Text
                level="paragraph3"
                text="Platformu ROO provozuje společnost The Roosters s.r.o., IČ 06347231, se sídlem v ulici Lidická 900/19, 602 00 Brno - Střed, zapsaná u Krajského soudu v Brně, spisová značka C 111516/KSBR"
                fontWeight="xl"
                color="white"
              />
            </div>
            <div className="z-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </LandingSectionWrapper>
    </div>
  );
}
