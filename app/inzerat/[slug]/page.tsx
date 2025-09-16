import SectionWrapper from "@/app/_components/wrappers/SectionWrapper";
import React, { ReactNode } from "react";

import image from "@/app/_images/test.jpg";
import Image from "next/image";
import Heading from "@/app/_components/global/atoms/Heading";
import { FaMapMarker, FaMapMarkerAlt } from "react-icons/fa";
import { HiMiniUsers, HiUser, HiUsers } from "react-icons/hi2";
import { GiForkKnifeSpoon, GiFruitTree } from "react-icons/gi";
import {
  FaChevronRight,
  FaCrown,
  FaHeart,
  FaQ,
  FaRegCalendar,
  FaShare,
} from "react-icons/fa6";
import { FAQCard } from "@/app/_components/global/molecules/FAQCard";

type Props = {};

export function PhotoGrid() {
  return (
    <div className="relative grid grid-cols-[3fr_1fr_1fr] grid-rows-2 w-full gap-3 py-5">
      {" "}
      <Image
        src={image}
        width={1000}
        height={1000}
        alt="image"
        className="w-full row-span-2 object-cover self-stretch rounded-medium"
      />
      <Image
        src={image}
        width={1000}
        height={1000}
        alt="image"
        className="w-full row-span-1 col-span-2 rounded-medium"
      />{" "}
      <Image
        src={image}
        width={1000}
        height={1000}
        alt="image"
        className="w-full col-start-2 row-span-1 object-cover self-stretch rounded-medium"
      />{" "}
      <Image
        src={image}
        width={1000}
        height={1000}
        alt="image"
        className="w-full col-start-3 row-span-1 object-cover self-stretch rounded-medium"
      />
      <button className="absolute bottom-10 right-6 bg-white rounded-lg py-2 px-3">
        Dalších 16 fotek
      </button>
    </div>
  );
}

export function ListingHeader() {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-[5fr_2fr]">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-textNormal break-words">
            Catering Mlýn Davídkov
          </h1>
          <div className="flex items-center gap-10">
            <FaMapMarkerAlt className="text-2xl text-pink" />
            <p>Okres Kolín | Praha</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-7">
            <HiUsers className="text-2xl text-pink" />
            <p>
              max. <span className="font-semibold">900</span> osob
            </p>
          </div>
          <div className="flex items-center gap-7">
            <HiUser className="text-2xl text-pink" />
            <p>
              min. <span className="font-semibold">900</span> osob
            </p>
          </div>
          <div className="flex items-center gap-7">
            <GiForkKnifeSpoon className="text-2xl text-pink" />
            <p>
              <span className="font-semibold">17</span> typů kuchyní
            </p>
          </div>
          <div className="flex items-center gap-7">
            <GiFruitTree className="text-2xl text-pink" />
            <p>Vnitřní i venkovní akce</p>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-5 text-center gap-2">
        <p className="py-3 px-4 border-2 border-orange font-semibold rounded-medium text-pink">
          Show Kitchen
        </p>
        <p className="py-3 px-4 border-2 border-orange font-semibold rounded-medium text-pink">
          Show Kitchen
        </p>{" "}
        <p className="py-3 px-4 border-2 border-orange font-semibold rounded-medium text-pink">
          Show Kitchen
        </p>{" "}
        <p className="py-3 px-4 border-2 border-orange font-semibold rounded-medium text-pink">
          Show Kitchen
        </p>{" "}
        <p className="py-3 px-4 border-2 border-orange font-semibold rounded-medium text-pink">
          Show Kitchen
        </p>
      </div>
    </div>
  );
}

export default function page({}: Props) {
  return (
    <div className="-mt-25">
      <SectionWrapper>
        <PhotoGrid />
      </SectionWrapper>
      <SectionWrapper>
        <div className="grid grid-cols-[3fr_2fr] w-full gap-9">
          <div className="min-h-screen">
            <ListingHeader />
            <ListingDescription />
            <SublistingsCards />
            <ListingFAQ />
          </div>
          <ListingSidebar />
        </div>
      </SectionWrapper>
    </div>
  );
}

export function ListingSidebar() {
  const items = [];

  for (let i = 0; i < 4; i++) {
    items.push(
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-sm">Datum konání akce</p>
        <div className="flex gap-4 items-center border rounded-small border-borderLight p-2">
          <FaRegCalendar className="text-pink text-2xl" />
          <select
            id="pet-select"
            className="outline-borderLight w-full p-1 font-semibold text-textNormal/60"
          >
            <option value="">Please select a pet</option>
            <option value="cat">
              <p>1.10.2025</p>
            </option>
            <option value="cat">
              <p>1.10.2025</p>
            </option>
            <option value="cat">
              <p>1.10.2025</p>
            </option>
            <option value="cat">
              <p>1.10.2025</p>
            </option>
            <option value="cat">
              <p>1.10.2025</p>
            </option>
            <option value="cat">
              <p>1.10.2025</p>
            </option>
          </select>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="sticky top-30 flex flex-col gap-3">
        {" "}
        <div className=" flex flex-col gap-5  border p-8 rounded-medium border-borderLight shadow-lg justify-center items-center">
          <div className="grid grid-cols-2 gap-4 w-full">{items}</div>
          <button className="py-2 animate hover:scale-105 cursor-pointer px-5 text-xl bg-linear-60 from-orange via-pink to-violet rounded-full text-white font-semibold">
            Nezávazně poptat
          </button>
          <p className="text-textPlaceholder">Zatím vám nebude nic účtováno</p>
          <div className="border-t w-full h-1 border-borderLight"></div>
          <p className="w-full">Orientační cena:</p>
          <p className="text-2xl font-semibold text-pink mb-5">
            od 2.000 Kč za osobu
          </p>
        </div>
        <SupervendorBanner />
      </div>
    </div>
  );
}

export function SupervendorBanner() {
  return (
    <div className="flex flex-col gap-3">
      <div className="border border-borderLight bg-white rounded-medium p-7">
        <p className="text-center">Tento dodavatel je v kategori</p>
        <div className="flex items-center justify-center gap-4">
          <FaCrown className="text-6xl text-amber-400" />
          <p className="text-4xl font-semibold text-pink uppercase">
            #Supervendor
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button className="border border-borderLight rounded-medium items-center justify-center flex gap-3 py-3">
          <FaHeart className="text-pink text-2xl" />
          <p>Přidat do oblíbených</p>
        </button>
        <button className="border border-borderLight rounded-medium items-center justify-center flex gap-3">
          <FaShare className="text-pink text-2xl" />
          <p>Sdílet</p>
        </button>
      </div>
    </div>
  );
}

export function ListingDescription() {
  return (
    <CardSectionWrapper heading="Kouzelný resort pro Vaši akci">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum
        qui repellat, non animi ullam ex officia. Necessitatibus iste illo
        dolorem harum magnam repellendus porro, cumque laborum neque,
        accusantium repudiandae?
      </p>
    </CardSectionWrapper>
  );
}

export type CardSectionWrapperPropsType = {
  children: ReactNode;
  heading?: string;
};

export function CardSectionWrapper(props: CardSectionWrapperPropsType) {
  return (
    <div className="pt-10 border-t mt-10 border-borderLight flex flex-col gap-7">
      {props.heading && <h3 className="font-semibold">{props.heading}</h3>}
      {props.children}
    </div>
  );
}

export function SublistingsCards() {
  return (
    <CardSectionWrapper heading="Služby">
      <div className="flex flex-col gap-5">
        <div className="">
          <div className="flex gap-2">
            <SublistingCard />
            <SublistingCard />
            <SublistingCard />
            <SublistingCard />
            <FaChevronRight className="text-3xl text-pink self-center" />
          </div>
        </div>
      </div>
    </CardSectionWrapper>
  );
}

export function SublistingCard() {
  return (
    <div className="border border-borderLight rounded-medium overflow-hidden">
      <Image
        src={image}
        width={400}
        height={400}
        alt="img"
        className="aspect-square object-cover"
      />
      <h4 className="min-h-20 flex items-center justify-center font-semibold">
        Obsluha
      </h4>
    </div>
  );
}

export function ListingFAQ() {
  return (
    <CardSectionWrapper heading="Časté dotazy">
      <div className="flex flex-col gap-4">
        <FAQCard
          question="Co pro vás můžeme udělat?"
          answer="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum
        qui repellat, non animi ullam ex officia. Necessitatibus iste illo
        dolorem harum magnam repellendus porro, cumque laborum neque,
        accusantium repudiandae?"
        />
        <FAQCard
          question="Co pro vás můžeme udělat?"
          answer="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum
        qui repellat, non animi ullam ex officia. Necessitatibus iste illo
        dolorem harum magnam repellendus porro, cumque laborum neque,
        accusantium repudiandae?"
        />{" "}
        <FAQCard
          question="Co pro vás můžeme udělat?"
          answer="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum
        qui repellat, non animi ullam ex officia. Necessitatibus iste illo
        dolorem harum magnam repellendus porro, cumque laborum neque,
        accusantium repudiandae?"
        />{" "}
        <FAQCard
          question="Co pro vás můžeme udělat?"
          answer="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum
        qui repellat, non animi ullam ex officia. Necessitatibus iste illo
        dolorem harum magnam repellendus porro, cumque laborum neque,
        accusantium repudiandae?"
        />{" "}
        <FAQCard
          question="Co pro vás můžeme udělat?"
          answer="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum
        qui repellat, non animi ullam ex officia. Necessitatibus iste illo
        dolorem harum magnam repellendus porro, cumque laborum neque,
        accusantium repudiandae?"
        />
      </div>
    </CardSectionWrapper>
  );
}
