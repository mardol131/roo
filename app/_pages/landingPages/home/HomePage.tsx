type Props = {};

import Link from "next/link";
import React, { ReactNode } from "react";
import image from "@/app/_images/heroOne.jpg";
import Image from "next/image";
import Button from "@/app/_global/atoms/Button";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineMenu } from "react-icons/ai";
import { HeroBackgroundImage } from "../_components/heroSections/HeroBackgroundImage";
import { CardsSection } from "../_components/cardSection/CardsSection";
import { colors } from "@/app/_design/colors";
import logo from "@/public/logo.png";
import { WebsiteHeader } from "../_components/header/WebsiteHeader";
import { WebsiteHeaderMobile } from "../_components/header/WebsiteHeaderMobile";
import TextImageSection from "../_components/textImageSections/TextImageSection";
import ComparisonSection from "../_components/comparisonSection/ComparisonSection";
import FormSection from "../_components/formSection/FormSection";

export default function HomePage({}: Props) {
  return (
    <>
      {" "}
      <WebsiteHeader />
      <WebsiteHeaderMobile />
      <HeroBackgroundImage
        headingOne="Víc objednávek."
        headingTwo="Míň dohadování."
        text="ROO je nová platforma, kde tě najdou lidé, co plánují akce – svatby, firemky, oslavy. Vytvoříš si profil, zadáš konkrétní nabídky a můžeš začít přijímat poptávky."
        buttonText="Přidej se na waitlist"
        buttonUrl="#hello"
        image={image.src}
      />
      <CardsSection
        headingOne="Chceš vědět výhody speciálně pro tebe?"
        headingTwo="Vyber kategorii."
        cards={[
          {
            heading: "Gastro",
            text: "Děláš catering, máš foodtruck nebo bar na eventy",
            icon: "Anniversary",
            color: colors.primary,
          },
          {
            heading: "Gastro",
            text: "Děláš catering, máš foodtruck nebo bar na eventy",
            icon: "Anniversary",
            color: colors.secondary,
          },
          {
            heading: "Gastro",
            text: "Děláš catering, máš foodtruck nebo bar na eventy",
            icon: "Anniversary",
            color: colors.tertiary,
          },
        ]}
      />
      <TextImageSection
        heading="Kolik zpráv, mailů a telefonátů tě dělí od jedný zakázky?"
        textOne="Děláš super práci. Ale všechno okolo ti bere čas i energii. 
ROO ti přináší lidi, co ví, co chtějí – a chtějí to od tebe."
        textTwo="Vždyť to znáš. Zpráva na Instagramu. Pak e-mail. Pak se neozvou. Nebo chtějí slevu. Z jednoho klienta je deset interakcí – a výsledek nejistý."
        image={image.src}
        textColor="white"
        imageSide="left"
        button={{ text: "Přidej se mezi první dodavatele Roo", url: "/main" }}
        overlay="primaryTertiary"
      />
      <TextImageSection
        heading="Kolik zpráv, mailů a telefonátů tě dělí od jedný zakázky?"
        textOne="Děláš super práci. Ale všechno okolo ti bere čas i energii. 
ROO ti přináší lidi, co ví, co chtějí – a chtějí to od tebe."
        textColor="white"
        overlay="primarySecondary"
        textTwo="Vždyť to znáš. Zpráva na Instagramu. Pak e-mail. Pak se neozvou. Nebo chtějí slevu. Z jednoho klienta je deset interakcí – a výsledek nejistý."
        image={image.src}
        imageSide="right"
        button={{ text: "Přidej se mezi první dodavatele Roo", url: "/main" }}
      />
      <ComparisonSection
        heading="Tvůj profil v ROO říká všechno, co organizátor potřebuje slyšet – bez ptaní."
        for={{
          heading: "Co uvidí klient v ROO?",
          points: ["Co přesně nabízíš"],
        }}
        against={{
          heading: "Co dnes klient často neví?",
          points: [
            "Co přesně nabízíš",
            "Co přesně nabízíš",
            "Co přesně nabízíš",
            "Co přesně nabízíš",
          ],
        }}
      />
      <FormSection
        heading="Přidej se na čekačku"
        text="Přidej se do Waitlistu, abys nepromeškal/a příležitost získat své první poptávky a být první v ROOdině!"
        image={image.src}
        overlay="primarySecondaryOpac"
        button={{ text: "Přidat se" }}
        webhook="/"
      />
      <CardsSection
        overlay="primarySecondary"
        headingOne="Chceš vědět výhody speciálně pro tebe?"
        headingTwo="Vyber kategorii."
        headingColor="white"
        cards={[
          {
            heading: "Gastro",
            text: "Děláš catering, máš foodtruck nebo bar na eventy",
            icon: "Anniversary",
            color: colors.primary,
          },
          {
            heading: "Gastro",
            text: "Děláš catering, máš foodtruck nebo bar na eventy",
            icon: "Anniversary",
            color: colors.secondary,
          },
          {
            heading: "Gastro",
            text: "Děláš catering, máš foodtruck nebo bar na eventy",
            icon: "Anniversary",
            color: colors.tertiary,
          },
        ]}
      />
    </>
  );
}
