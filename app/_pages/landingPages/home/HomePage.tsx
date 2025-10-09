type Props = {};

import React from "react";
import image from "@/app/_images/heroOne.jpg";

import { HeroBackgroundImage } from "../_components/heroSections/HeroBackgroundImage";
import { CardsSection } from "../_components/cardSection/CardsSection";

import { WebsiteHeader } from "../_components/header/WebsiteHeader";
import { WebsiteHeaderMobile } from "../_components/header/WebsiteHeaderMobile";
import TextImageSection from "../_components/textImageSections/TextImageSection";
import ComparisonSection from "../_components/comparisonSection/ComparisonSection";
import FormSection from "../_components/formSection/FormSection";
import MasonrySection from "../_components/masonrySection/MasonrySection";

export default function HomePage({}: Props) {
  return (
    <>
      {" "}
      <WebsiteHeader />
      <WebsiteHeaderMobile />
      <HeroBackgroundImage
        heading={{
          headingOne: "Víc objednávek.",
          headingTwo: "Míň dohadování.",
        }}
        text={{
          text: "ROO je nová platforma, kde tě najdou lidé, co plánují akce – svatby, firemky, oslavy. Vytvoříš si profil, zadáš konkrétní nabídky a můžeš začít přijímat poptávky.",
        }}
        button={{ text: "Přidej se na waitlist", size: "2xl", link: "" }}
        image={image.src}
      />
      <CardsSection
        heading={{
          headingOne: "Chceš vědět výhody speciálně pro tebe?",
          headingTwo: "Vyber kategorii.",
        }}
        cards={[
          {
            text: "Děláš cadtering, máš foodtruck nebo bar na eventy",
            icon: "Anniversary",
            color: "primary",
            href: "/",
          },
          {
            text: "Děláš caterinag, máš foodtruck nebo bar na eventy",
            icon: "Anniversary",
            color: "secondary",
          },
          {
            text: "Děláš cateriwng, máš foodtruck nebo bar na eventy",
            icon: "Anniversary",
            color: "tertiary",
          },
        ]}
      />
      <TextImageSection
        text="Hello"
        image={image.src}
        imageSide="left"
        button={{ text: "Přidej se mezi první dodavatele Roo", link: "/main" }}
        overlay={{ overlayColor: "primaryTertiary" }}
      />
      <MasonrySection
        overlay={{ overlayColor: "white" }}
        text="Vždyť to znáš. Zpráva na Instagramu. Pak e-mail. Pak se neozvou. Nebo chtějí slevu. Z jednoho klienta je deset interakcí – a výsledek nejistý."
        bubbles={[
          {
            text: "S tímhle vám můžeme pomoct",
            color: "primary",
            column: {
              start: 3,
              end: 4,
            },
            row: {
              start: 3,
              end: 4,
            },
          },
          {
            text: "Z jednoho klienta je deset interakcí – a výsledek nejistý.",
            color: "primary",
            column: {
              start: 1,
              end: 2,
            },
            row: {
              start: 2,
              end: 5,
            },
          },
          {
            text: "Z jednoho klienta je deset interakcí – a výsledek nejistý.",
            color: "secondary",
            column: {
              start: 4,
              end: 5,
            },
            row: {
              start: 1,
              end: 2,
            },
          },

          {
            text: "Z jednoho klienta je deset interakcí – a výsledek nejistý.",
            color: "primary",
            column: {
              start: 2,
              end: 3,
            },
            row: {
              start: 2,
              end: 3,
            },
          },
          {
            text: "Z jednoho klienta je deset interakcí – a výsledek nejistý.",
            color: "tertiary",
            column: {
              start: 2,
              end: 3,
            },
            row: {
              start: 3,
              end: 4,
            },
          },
          {
            text: "Z jednoho klienta je deset interakcí – a výsledek nejistý.",
            color: "primary",
            column: {
              start: 1,
              end: 4,
            },
            row: {
              start: 1,
              end: 2,
            },
          },
          {
            image: image.src,
            column: {
              start: 3,
              end: 4,
            },
            row: {
              start: 4,
              end: 5,
            },
          },
        ]}
      />
      <TextImageSection
        text={"Kolik zpráv, mailů a telefonátů tě dělí od jedný zakázky?"}
        overlay={{ overlayColor: "primarySecondary" }}
        image={image.src}
        imageSide="right"
        button={{ text: "Přidej se mezi první dodavatele Roo", link: "/main" }}
      />
      <ComparisonSection
        heading={{
          color: "primary",
          headingOne:
            "Tvůj profil v ROO říká všechno, co organizátor potřebuje slyšet – bez ptaní.",
        }}
        for={{
          heading: "Co uvidí klient v ROO?",
          points: [{ text: "Co přesně nabízíš", id: "45" }],
        }}
        against={{
          heading: "Co dnes klient často neví?",
          points: [
            { text: "Co přesně nabízíš", id: "45" },
            { text: "Co přesně nabízíš", id: "45" },
            { text: "Co přesně nabízíš", id: "45" },
          ],
        }}
      />
      <FormSection
        heading={{
          headingOne: "Chceš vědět výhody speciálně pro tebe?",
          color: "primary",
        }}
        text="Přidej se do Waitlistu, abys nepromeškal/a příležitost získat své první poptávky a být první v ROOdině!"
        image={image.src}
        overlay={{ overlayColor: "primarySecondaryOpac" }}
        button={{ text: "Přidat se" }}
        webhook="/"
        fields={[
          {
            blockType: "formtextinput",
            label: "Hello",
            placeholder: "my name",
          },
        ]}
      />
      <CardsSection
        overlay={{ overlayColor: "primaryTertiaryOpac" }}
        heading={{
          color: "white",
          headingOne: "Chceš vědět výhody speciálně pro tebe?",
          headingTwo: "Vyber kategorii.",
        }}
        cards={[
          {
            text: "Děláš catering, máš foodtruck nebo bar na eventy",
            icon: "Anniversary",
            color: "primary",
          },
          {
            text: "Děláš catering, máš foodtruck nebo bar na eventy",
            icon: "Anniversary",
            color: "primary",
          },
          {
            text: "Děláš catering, máš foodtruck nebo bar na eventy",
            icon: "Anniversary",
            color: "primary",
          },
        ]}
      />
    </>
  );
}
