type Props = {};

import React from "react";
import image from "@/app/_images/heroOne.jpg";

import { HeroOne } from "../_components/heroSections/HeroOne";
import { CardsSection } from "../_components/cardSection/CardsSection";

import { WebsiteHeader } from "../_components/header/WebsiteHeader";
import { WebsiteHeaderMobile } from "../_components/header/WebsiteHeaderMobile";
import TextImageSection from "../_components/textImageSections/TextImageSection";
import ComparisonSection from "../_components/comparisonSection/ComparisonSection";
import FormSection from "../_components/formSection/FormSection";
import MasonrySection from "../_components/masonrySection/MasonrySection";
import { HeroTwo } from "../_components/heroSections/HeroTwo";

export default function HomePage({}: Props) {
  return (
    <>
      {" "}
      <WebsiteHeader />
      <WebsiteHeaderMobile />
      <HeroOne
        heading={{
          headingOne: { text: "Víc objednávek.", level: "h1" },
          headingTwo: {
            text: "Míň dohadování.",
            level: "h1",
            fontWeight: "lg",
            color: "primary",
          },
        }}
        text={{
          color: "black",
          fontWeight: "lg",
          level: "paragraph1",
          text: "ROO je nová platforma, kde tě najdou lidé, co plánují akce – svatby, firemky, oslavy. Vytvoříš si profil, zadáš konkrétní nabídky a můžeš začít přijímat poptávky.",
        }}
        button={{
          text: "Přidej se na waitlist",
          size: "2xl",
          link: "",
          bgColor: "primarySecondary",
          rounding: "full",
          textColor: "white",
        }}
        image={image.src}
      />
      <HeroTwo
        heading={{
          headingOne: { text: "Víc objednávek.", level: "h1" },
          headingTwo: {
            text: "Míň dohadování.",
            level: "h1",
            fontWeight: "lg",
            color: "primary",
          },
        }}
        texts={[
          {
            color: "black",
            fontWeight: "lg",
            level: "paragraph1",
            text: "ROO je nová platforma, kde tě najdou lidé, co plánují akce – svatby, firemky, oslavy. Vytvoříš si profil, zadáš konkrétní nabídky a můžeš začít přijímat poptávky.",
          },
          {
            color: "black",
            fontWeight: "lg",
            level: "paragraph1",
            text: "Vytvoříš si profil, zadáš konkrétní nabídky a můžeš začít přijímat poptávky.",
          },
        ]}
        buttons={[
          {
            text: "Přidej se na waitlist",
            size: "2xl",
            link: "",
            bgColor: "primarySecondary",
            rounding: "full",
            textColor: "white",
            iconLeft: "Anniversary",
          },
          {
            text: "Přidej se na waitlist",
            size: "2xl",
            link: "",
            bgColor: "primarySecondary",
            rounding: "full",
            textColor: "white",
          },
        ]}
        image={image.src}
      />
      <CardsSection
        headingOne={{
          text: "Chceš vědět výhody speciálně pro tebe?",
          level: "h2",
          fontWeight: "md",
        }}
        headingTwo={{ text: "Vyber kategorii.", level: "h2", fontWeight: "md" }}
        cards={[
          {
            heading: {
              text: "Catering",
              level: "h4",
              fontWeight: "xl",
              color: "secondary",
            },
            texts: [
              {
                text: "Děláš cadtering, máš foodtruck nebo bar na eventy",
                level: "paragraph2",
              },
            ],
            icon: "Anniversary",
            color: "secondary",
            href: "/",
            mobileOrientation: "col",
          },
          {
            heading: {
              text: "Catering",
              level: "h4",
              fontWeight: "xl",
              color: "primary",
            },
            texts: [
              {
                text: "Děláš cadtering, máš foodtruck nebo bar na eventy",
                level: "paragraph2",
              },
            ],
            icon: "Anniversary",
            color: "primary",
            href: "/",
            mobileOrientation: "col",
          },
          {
            heading: {
              text: "Catering",
              level: "h4",
              fontWeight: "xl",
              color: "tertiary",
            },
            texts: [
              {
                text: "Děláš cadtering, máš foodtruck nebo bar na eventy",
                level: "paragraph2",
              },
            ],
            icon: "Anniversary",
            color: "tertiary",
            href: "/",
            mobileOrientation: "col",
          },
        ]}
      />
      <TextImageSection
        heading={{
          headingOne: {
            text: "Kolik zpráv, mailů a telefonátů tě dělí od jedný zakázky?",
            level: "h2",
            fontWeight: "lg",
            color: "white",
          },
        }}
        texts={[
          {
            text: "Děláš super práci. Ale všechno okolo ti bere čas i energii. ROO ti přináší lidi, co ví, co chtějí – a chtějí to od tebe.",
            level: "paragraph1",
            color: "white",
          },
          {
            text: "Vždyť to znáš. Zpráva na Instagramu. Pak e-mail. Pak se neozvou. Nebo chtějí slevu. Z jednoho klienta je deset interakcí – a výsledek nejistý.",
            level: "paragraph1",
            color: "white",
          },
        ]}
        image={image.src}
        imageSide="right"
        overlay={{ overlayColor: "primaryTertiary" }}
      />
      <MasonrySection
        textsBottom={[
          {
            text: "Není to tvoje práce říkat lidem, co vlastně chtějí. ROO přivádí klienty, co už to ví – nebo díky nám to umí říct.",
            level: "label3",
          },
        ]}
        overlay={{ overlayColor: "white" }}
        bubbles={[
          {
            texts: [
              {
                text: "„Posílali jsme poptávku minulý týden, nedošla?“",
                level: "label2",
                color: "white",
                fontWeight: "xl",
              },
            ],
            bgColor: "primarySecondary",
            column: {
              start: 1,
              end: 2,
            },
            row: {
              start: 1,
              end: 4,
            },
          },
          {
            texts: [
              {
                text: "„Máte něco levnějšího?“",
                level: "label4",
                color: "white",
                fontWeight: "xl",
              },
            ],
            bgColor: "secondary",
            column: {
              start: 2,
              end: 4,
            },
            row: {
              start: 1,
              end: 2,
            },
          },
          {
            texts: [
              {
                text: "„My ještě nevíme přesně kdy, ale zhruba jo.“",
                level: "label4",
                color: "white",
                fontWeight: "xl",
              },
            ],
            bgColor: "tertiary",
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
            texts: [
              {
                text: "„Máme budget tak dva tisíce… na všechno.“",
                level: "label4",
                color: "white",
                fontWeight: "xl",
              },
            ],
            bgColor: "primary",
            column: {
              start: 3,
              end: 4,
            },
            row: {
              start: 2,
              end: 3,
            },
          },
          {
            image: image.src,
            alt: "image",
            row: { start: 1, end: 3 },
            column: { start: 4, end: 5 },
          },
          {
            texts: [
              {
                text: "„To si ještě probereme s partou.“",
                level: "label4",
                color: "white",
                fontWeight: "xl",
              },
            ],
            bgColor: "secondary",
            column: {
              start: 1,
              end: 2,
            },
            row: {
              start: 4,
              end: 5,
            },
          },
          {
            image: image.src,
            alt: "image",
            row: { start: 3, end: 5 },
            column: { start: 2, end: 3 },
          },
          {
            texts: [
              {
                text: "Znáš tyhle věty?",
                level: "label2",
                color: "primary",
                fontWeight: "xl",
              },
              {
                text: "Tak přesně proti nim ROO vzniklo.",
                level: "label3",
              },
            ],
            bgColor: "white",
            column: {
              start: 3,
              end: 5,
            },
            row: {
              start: 3,
              end: 5,
            },
          },
          {
            texts: [
              {
                text: "„Je to pro 50 lidí, ale možná jich bude 30.“",
                level: "label3",
                color: "white",
                fontWeight: "xl",
              },
            ],
            bgColor: "secondary",
            column: {
              start: 1,
              end: 4,
            },
            row: {
              start: 5,
              end: 6,
            },
          },
          {
            image: image.src,
            alt: "image",
            row: { start: 5, end: 6 },
            column: { start: 4, end: 5 },
          },
        ]}
      />
      <TextImageSection
        heading={{
          headingOne: {
            text: "Kolik zpráv, mailů a telefonátů tě dělí od jedný zakázky?",
            level: "h2",
            fontWeight: "lg",
            color: "white",
          },
        }}
        texts={[
          {
            text: "Děláš super práci. Ale všechno okolo ti bere čas i energii. ROO ti přináší lidi, co ví, co chtějí – a chtějí to od tebe.",
            level: "paragraph1",
            color: "white",
          },
        ]}
        overlay={{ overlayColor: "primarySecondary" }}
        image={image.src}
        imageSide="left"
        // buttonUndertext={{
        //   text: "Přidej se mezi první dodavatele Roo",
        //   link: "/main",
        //   bgColor: "white",
        //   textColor: "black",
        //   rounding: "full",
        //   size: "xl",
        // }}
        buttonUnderSection={{
          text: "Přidej se mezi první dodavatele Roo",
          link: "/main",
          bgColor: "white",
          textColor: "black",
          rounding: "full",
          size: "xl",
          stretch: true,
        }}
      />
      <ComparisonSection
        heading={{
          headingOne: {
            text: "Tvůj profil v ROO říká všechno, co organizátor potřebuje slyšet – bez ptaní.",
            level: "h2",
          },
        }}
        for={{
          heading: "Co uvidí klient v ROO?",
          points: [
            { text: "Jméno balíčku a typ akce" },
            { text: "Cena a rozsah služby" },
            { text: "Co je i není zahrnuto" },
            { text: "Dostupné termíny" },
            { text: "Lokace, kapacita, preference" },
          ],
        }}
        against={{
          heading: "Co dnes klient často neví?",
          points: [
            { text: "Co přesně nabízíš" },
            { text: "Co je v ceně" },
            { text: "Pro kolik lidí je to ideální" },
            { text: "Kdy máš volno" },
            { text: "Kolik to celé stojí" },
          ],
        }}
      />
      <FormSection
        heading={{
          headingOne: {
            text: "Přidej se na čekačku",
            level: "h3",
            fontWeight: "xl",
            color: "primary",
          },
        }}
        text={{
          text: "Přidej se do Waitlistu, abys nepromeškal/a příležitost získat své první poptávky a být první v ROOdině!",
          level: "paragraph1",
        }}
        overlay={{ overlayColor: "primarySecondaryOpac", image: image.src }}
        button={{
          text: "Přidat se",
          textColor: "white",
          bgColor: "primarySecondary",
          size: "xl",
          rounding: "full",
          type: "submit",
        }}
        webhook="/"
        fields={[
          {
            blockType: "formtextinput",
            label: "Jméno",
            placeholder: "Jan",
          },
          {
            blockType: "formtextinput",
            label: "Příjmení",
            placeholder: "Novák",
          },
          {
            blockType: "formtextinput",
            label: "Společnost",
            placeholder: "Skvělá společnost s.r.o.",
            spanTwo: "true",
          },
          {
            blockType: "formtextinput",
            label: "Web",
            placeholder: "skvelaspolecnost.cz",
            spanTwo: "true",
          },
          {
            blockType: "formselectinput",
            label: "Kategorie",
            placeholder: "-- Zvolte kategorii --",
            options: [{ text: "První kategorie", value: "first" }],
            spanTwo: "true",
          },
          {
            blockType: "formselectinput",
            label: "Jak jste se o nás dozvěděli?",
            placeholder: "-- Zvolte --",
            options: [{ text: "První kategorie", value: "first" }],
            spanTwo: "true",
          },
          {
            blockType: "formcheckboxinput",
            label: {
              text: "Souhlasím se zpracování osobních údajů společností The Roosters s.r.o.",
              level: "label4",
            },
            value: "gdpr",
            spanTwo: "true",
          },
          {
            blockType: "formcheckboxinput",
            label: { text: "Chci dostávat newsletter", level: "label4" },
            value: "marketing",
            spanTwo: "true",
          },
        ]}
      />
      <CardsSection
        overlay={{ overlayColor: "primaryTertiaryOpac", image: image.src }}
        headingOne={{
          text: "Chceš vědět výhody speciálně pro tebe?",
          level: "h2",
          color: "white",
          fontWeight: "xl",
        }}
        headingTwo={{ text: "Vyber kategorii.", level: "h2", color: "white" }}
        cards={[
          {
            heading: { text: "Catering", level: "h4" },
            texts: [
              {
                text: "Děláš cadtering, máš foodtruck nebo bar na eventy",
                level: "paragraph1",
              },
            ],
            icon: "Anniversary",
            color: "primary",
            href: "/",
            mobileOrientation: "col",
          },
          {
            heading: { text: "Catering", level: "h4" },
            texts: [
              {
                text: "Děláš cadtering, máš foodtruck nebo bar na eventy",
                level: "paragraph1",
              },
            ],
            icon: "Anniversary",
            color: "primary",
            href: "/",
            mobileOrientation: "col",
          },
          {
            heading: { text: "Catering", level: "h4" },
            texts: [
              {
                text: "Děláš cadtering, máš foodtruck nebo bar na eventy",
                level: "paragraph1",
              },
            ],
            icon: "Anniversary",
            color: "primary",
            href: "/",
            mobileOrientation: "col",
          },
        ]}
      />
    </>
  );
}
