import React from "react";
import { WebsiteHeader } from "../_components/header/WebsiteHeader";
import { WebsiteHeaderMobile } from "../_components/header/WebsiteHeaderMobile";
import HeroSection from "./_components/heroSection/HeroSection";
import IconsTextSection from "./_components/iconsTextSection/IconsTextSection";
import ImageTextSection from "./_components/imageTextSection/ImageTextSection";
import image from "@/app/_images/heroOne.jpg";
import BannerSection from "./_components/bannerSection/BannerSection";
import FaqSection from "./_components/faqSection/FaqSection";
import FormSection from "./_components/formSection/FormSection";
import ImageTextVerticalSection from "./_components/imageTextVerticalSection/ImageTextVerticalSection";
import ComparisonSection from "./_components/comparisonSection/ComparisonSection";
import TextSection from "./_components/textSection/TextSection";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <WebsiteHeader
        button={{
          text: "Přidej se k rodině",
          textColor: "white",
          size: "lg",
          rounding: "full",
          bgColor: "primary",
        }}
      />
      <WebsiteHeaderMobile
        button={{
          text: "Přidej se k nám",
          size: "md",
          bgColor: "primarySecondary",
          textColor: "white",
          rounding: "full",
        }}
      />
      <HeroSection
        image={{ src: image.src, alt: "hero" }}
        texts={[
          {
            text: "Víc objednávek.",
            level: "h1",
            color: "white",
            fontWeight: "xl",
          },
          {
            text: "Míň dohadování.",
            level: "h1",
            color: "primary",
            fontWeight: "md",
          },
          {
            text: "ROO je nová platforma, kde tě najdou lidé, co plánují akce – svatby, firemky, oslavy. Vytvoříš si profil, zadáš konkrétní nabídky a můžeš začít přijímat poptávky.",
            level: "paragraph1",
            color: "white",
          },
        ]}
        buttons={[
          {
            text: "Přidej se na waitlist",
            size: "2xl",
            bgColor: "primary",
            textColor: "white",
            rounding: "full",
          },
          {
            text: "Něco jinýho",
            size: "2xl",
            bgColor: "white",
            textColor: "black",
            rounding: "full",
          },
        ]}
      />
      <IconsTextSection
        texts={[
          {
            text: "Pro koho jsme?",
            level: "label4",
            color: "primary",
            fontWeight: "xl",
          },
          {
            text: "Všechno pod jednou střechou",
            level: "h2",
            color: "black",
            fontWeight: "xl",
          },
          {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eligendi maxime distinctio, ratione atque doloribus minima voluptas alias nisi! Rem explicabo debitis quas iste, nesciunt eius qui amet accusantium expedita.",
            level: "paragraph2",
            color: "black",
          },
        ]}
        iconsTextCards={[
          {
            image: { src: image.src, alt: "icon" },
            texts: [
              {
                text: "Gastro",
                level: "label2",
                color: "primarySecondary",
                fontWeight: "xl",
              },
              {
                text: "Děláš catering, máš foodtruck nebo bar na eventy",
                level: "paragraph2",
                color: "black",
              },
            ],
          },
          {
            image: { src: image.src, alt: "icon" },
            texts: [
              {
                text: "Místo",
                level: "label2",
                color: "primary",
                fontWeight: "2xl",
              },
              {
                text: "Máš prostory, kde pořádáš akce.",
                level: "paragraph2",
                color: "black",
              },
            ],
          },
          {
            image: { src: image.src, alt: "icon" },
            texts: [
              {
                text: "Zábava",
                level: "label2",
                color: "primaryTertiary",
                fontWeight: "2xl",
              },
              {
                text: "Jsi DJ, kapela, moderátor, kouzelník, tanečnice nebo jakkoliv bavíš hosty",
                level: "paragraph2",
                color: "black",
              },
            ],
          },
        ]}
      />
      <BannerSection
        overlay={{ overlayColor: "primarySecondaryOpac", image: image.src }}
        texts={[
          {
            text: "Víc objednávek.",
            level: "h2",
            color: "white",
            fontWeight: "xl",
          },
          {
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde veritatis aperiam sint earum, eos voluptate.",
            level: "paragraph2",
            color: "white",
            fontWeight: "lg",
          },
        ]}
        buttons={[
          {
            text: "Tak nečekej a pojď se k nám přidat",
            size: "xl",
            bgColor: "white",
            textColor: "black",
            rounding: "full",
          },
        ]}
      />
      <ImageTextSection
        textSide="left"
        imagePart={{
          type: "imageOne",
          image: { src: image.src, alt: "image" },
        }}
        texts={[
          {
            text: "Kolik zpráv, mailů a telefonátů tě dělí od jedný zakázky?",
            level: "h2",
            color: "primary",
            fontWeight: "xl",
          },
          {
            text: "Děláš super práci. Ale všechno okolo ti bere čas i energii. ROO ti přináší lidi, co ví, co chtějí – a chtějí to od tebe.",
            level: "paragraph2",
            color: "black",
          },
          {
            text: "Vždyť to znáš. Zpráva na Instagramu. Pak e-mail. Pak se neozvou. Nebo chtějí slevu. Z jednoho klienta je deset interakcí – a výsledek nejistý.",
            level: "paragraph2",
            color: "black",
          },
        ]}
        buttons={[
          {
            text: "Přidej se na waitlist",
            size: "2xl",
            bgColor: "primary",
            textColor: "white",
            rounding: "full",
          },
        ]}
      />
      <ImageTextSection
        textSide="right"
        imagePart={{
          type: "imageGrid",
          imageOne: { src: image.src, alt: "image" },
          imageTwo: { src: image.src, alt: "image" },
          imageThree: { src: image.src, alt: "image" },
          imageFour: { src: image.src, alt: "image" },
        }}
        texts={[
          {
            text: "Online výloha, co prodává za tebe",
            level: "h2",
            color: "primary",
            fontWeight: "xl",
          },
          {
            text: "Profil na ROO ti šetří čas a přivádí poptávky, co dávají smysl.",
            level: "label4",
            color: "black",
          },
          {
            text: "Nemusíš být markeťák, abys měl objednávky. V ROO si vytvoříš vlastní výkladní skříň – s jasnými nabídkami, fotkami, cenou a tím, co je (a není) v balíčku. Lidi si tě najdou podle typu akce, rozpočtu a stylu – a rovnou tě poptají.",
            level: "paragraph2",
            color: "black",
          },
          {
            text: "Bez dohadování. Bez ztracených víkendů. Bez milionu e-mailů.",
            level: "paragraph2",
            color: "black",
            fontWeight: "xl",
          },
          {
            text: "Jasná nabídka = jasná poptávka. A ty můžeš dělat to, co fakt umíš – místo vysvětlování.",
            level: "paragraph2",
            color: "black",
            fontWeight: "xl",
          },
        ]}
        buttons={[
          {
            text: "Přidej se na waitlist",
            size: "2xl",
            bgColor: "primary",
            textColor: "white",
            rounding: "full",
          },
        ]}
      />
      <ComparisonSection
        texts={[
          {
            text: "Chceš to srovnat?",
            level: "label5",
            fontWeight: "xl",
            color: "primary",
          },
          {
            text: "Tvůj profil v ROO říká všechno, co organizátor potřebuje slyšet – bez ptaní.",
            level: "h2",
            fontWeight: "lg",
          },
        ]}
        for={{
          overlay: {
            overlayColor: "primaryOpac",
            image: image.src,
          },
          texts: [
            {
              text: "Co uvidí klient v ROO?",
              level: "h3",
              fontWeight: "xl",
              color: "white",
            },
          ],
          points: [
            { text: "Jméno balíčku a typ akce" },
            { text: "Cena a rozsah služby" },
            { text: "Co je i není zahrnuto" },
            { text: "Dostupné termíny" },
            { text: "Lokace, kapacita, preference" },
          ],
        }}
        against={{
          overlay: {
            overlayColor: "secondaryOpac",
            image: image.src,
          },
          texts: [
            {
              text: "Co dnes klient často neví?",
              level: "h3",
              fontWeight: "xl",
              color: "white",
            },
          ],
          points: [
            { text: "Co přesně nabízíš" },
            { text: "Co je v ceně" },
            { text: "Pro kolik lidí je to ideální" },
            { text: "Kdy máš volno" },
            { text: "Kolik to celé stojí" },
          ],
        }}
      />
      <FaqSection
        texts={[
          {
            text: "FAQ",
            level: "label5",
            color: "primary",
            fontWeight: "xl",
          },
          {
            text: "Na co se nás dodavatelé ptají nejčastěji",
            level: "h2",
            color: "black",
            fontWeight: "xl",
          },
        ]}
        questions={[
          {
            question: "Kolik to stojí?",
            answer:
              "Prvních 100 dodavatelů platí jen 1000 Kč / první rok. Každá další stovka platí o 1000 Kč víc. Čím dřív se přidáš, tím levněji jsi u toho.",
          },
          {
            question: "Co když nabízím víc typů služeb?",
            answer:
              "V ROO můžeš mít víc nabídek – pro různé typy akcí, stylů nebo rozpočtů. Ty si určuješ, co a jak.",
          },
          {
            question: "Co když spadám do víc kategorií?",
            answer: "Můžeš mít i více profilů, každý se platí samostatně.",
          },
          {
            question: "Musím mít web nebo profil na IG?",
            answer:
              "Ne. Profil v ROO tě plně zastoupí, a prodává líp než běžný web nebo feed.",
          },
          {
            question: "A co když nemám hezký fotky?",
            answer:
              "Začni s tím, co máš. ROO tě netlačí do dokonalosti – důležitá je srozumitelnost.",
          },
          {
            question: "Co když nemám čas to nastavovat?",
            answer:
              "Základní profil dáš dohromady za 20 minut. Zbytek můžeš ladit postupně.",
          },
          {
            question: "Bude to fungovat i mimo Prahu?",
            answer:
              "Jasně. Hledáme dodavatele po celé ČR. Právě ti první budou vidět nejvíc.",
          },
        ]}
      />
      <FormSection
        texts={[
          {
            text: "Přidej se na čekačku",
            level: "label3",
            color: "primary",
            fontWeight: "xl",
          },
          {
            text: "Přidej se do Waitlistu, abys nepromeškal/a příležitost získat své první poptávky a být první v ROOdině!",
            level: "paragraph1",
          },
        ]}
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
              level: "label7",
            },
            value: "gdpr",
            spanTwo: "true",
          },
          {
            blockType: "formcheckboxinput",
            label: { text: "Chci dostávat newsletter", level: "label7" },
            value: "marketing",
            spanTwo: "true",
          },
        ]}
      />
      <TextSection
        buttons={[
          {
            text: "Přidej se na waitlist",
            size: "2xl",
            bgColor: "primary",
            textColor: "white",
            rounding: "full",
          },
        ]}
        texts={[
          {
            text: "Máš víc než jen jeden prostor?",
            level: "h2",
            fontWeight: "xl",
            color: "black",
          },
          {
            text: "ROO s tím počítá.",
            level: "h2",
            fontWeight: "xl",
            color: "primary",
          },
          {
            text: "Některá místa jsou jednoduchá, jiná mají víc částí.",
            level: "paragraph2",
            fontWeight: "md",
            color: "black",
          },
          {
            text: "Ať máš areál se třemi budovami, hotel s více salonky nebo zahradu a sál, v ROO si můžeš vytvořit tolik nabídek, kolik dává smysl: jednu pro celý areál, další pro samostatné objekty, a klidně i pro kombinace",
            level: "paragraph2",
            fontWeight: "md",
            color: "black",
          },
          {
            text: "Každá nabídka má vlastní fotky, popis, cenu i kapacitu.",
            level: "paragraph1",
            fontWeight: "xl",
            color: "black",
          },
          {
            text: "Klient si vybere přesně to, co hledá – a ty máš přehled, co nabízíš.",
            level: "paragraph1",
            fontWeight: "xl",
            color: "black",
          },
        ]}
      />
      <BannerSection
        overlay={{ overlayColor: "primarySecondaryOpac", image: image.src }}
        texts={[
          {
            text: "Víc objednávek.",
            level: "h2",
            color: "white",
            fontWeight: "xl",
          },
          {
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde veritatis aperiam sint earum, eos voluptate.",
            level: "paragraph2",
            color: "white",
            fontWeight: "lg",
          },
        ]}
        widgets={[
          {
            type: "inputWidget",
            label: "Váš email",
            placeholder: "jannovak@gmail.com",
            webhook: "www.li.com",
            button: {
              text: "Chci dostávat novinky",
              size: "md",
              bgColor: "white",
              textColor: "black",
              rounding: "full",
            },
          },
        ]}
      />
    </>
  );
}
