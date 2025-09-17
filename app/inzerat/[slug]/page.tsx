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
  FaRegStar,
  FaShare,
  FaStar,
} from "react-icons/fa6";
import { FAQCard } from "@/app/_components/global/molecules/FAQCard";
import { ListingLongDescription } from "@/app/_components/listing/ListingLongDescription";
import { RiSoundModuleFill } from "react-icons/ri";
import Lightbox from "@/app/_components/global/molecules/Lightbox";
import { PhotoGrid } from "@/app/_components/listing/PhotoGrid";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="">
      <SectionWrapper>
        <PhotoGrid />
      </SectionWrapper>
      <SectionWrapper>
        <div className="grid grid-cols-[3fr_2fr] w-full gap-9">
          <div className="min-h-screen">
            <ListingHeader />
            <ListingDescription />
            <ImagesGridVerticalHalf direction="left" />
            <ListingSpecifications />
            <ListingLongDescription />
            <ListingCustomStats />
            <ImagesGridHorizontalHalf direction="right" />
            <ImagesGridSquare direction="left" />
            <SublistingsCards />
            <ImagesGridVerticalHalf direction="right" />
            <ListingFAQ />
            <ListingsReview />
          </div>
          <ListingSidebar />
        </div>
      </SectionWrapper>
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
        <p className="py-3 px-4 border-2 border-pink font-semibold rounded-medium text-pink">
          Show Kitchen
        </p>
        <p className="py-3 px-4 border-2 border-pink font-semibold rounded-medium text-pink">
          Show Kitchen
        </p>{" "}
        <p className="py-3 px-4 border-2 border-pink font-semibold rounded-medium text-pink">
          Show Kitchen
        </p>{" "}
        <p className="py-3 px-4 border-2 border-pink font-semibold rounded-medium text-pink">
          Show Kitchen
        </p>{" "}
        <p className="py-3 px-4 border-2 border-pink font-semibold rounded-medium text-pink">
          Show Kitchen
        </p>
      </div>
    </div>
  );
}

export function ListingSidebar() {
  const items = [];

  for (let i = 0; i < 4; i++) {
    items.push(
      <div key={i} className="flex flex-col gap-2">
        <p className="font-semibold text-sm">Datum konání akce</p>
        <div className="flex gap-4 items-center border rounded-small border-borderLight p-2">
          <FaRegCalendar className="text-pink text-2xl" />
          <select
            id="pet-select"
            className="outline-borderLight text-sm w-full p-1 font-semibold text-textNormal/60"
          >
            <option value="">Vyberte</option>
            <option value="cat">1.10.2025</option>
            <option value="cat">1.10.2025</option>
            <option value="cat">1.10.2025</option>
            <option value="cat">1.10.2025</option>
            <option value="cat">1.10.2025</option>
            <option value="cat">1.10.2025</option>
          </select>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <SupervendorBanner />
      <div className="sticky top-30 flex flex-col gap-4">
        <div className=" flex flex-col gap-5  border p-8 rounded-medium border-borderLight shadow-lg justify-center items-center">
          <div className="grid grid-cols-2 gap-4 w-full">{items}</div>
          <button className="py-2 animate hover:scale-105 cursor-pointer px-5 text-xl bg-linear-60 from-orange via-pink to-violet rounded-full text-white font-semibold">
            Nezávazně poptat
          </button>
          <p className="text-textPlaceholder text-sm">
            Zatím vám nebude nic účtováno
          </p>
          <div className="border-t w-full h-1 border-borderLight"></div>
          <p className="w-full">Orientační cena:</p>
          <p className="text-2xl font-semibold text-pink mb-5">
            od 2.000 Kč za osobu
          </p>
        </div>
      </div>
    </div>
  );
}

export function SupervendorBanner() {
  return (
    <div className="flex flex-col gap-3">
      <div className="border border-borderLight bg-white rounded-medium p-7 shadow-md">
        <p className="text-center text-textNormal font-semibold">
          Tento dodavatel je v kategorii
        </p>
        <div className="flex items-center justify-center gap-4 bg-clip-text bg-linear-60 from-orange via-pink to-violet">
          <FaCrown className="text-6xl text-amber-400" />
          <div className="text-4xl font-semibold text-transparent uppercase ">
            #Supervendor
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button className="border border-borderLight rounded-medium items-center justify-center flex gap-3 py-3 shadow-md">
          <FaHeart className="text-pink text-2xl" />
          <p>Přidat do oblíbených</p>
        </button>
        <button className="border border-borderLight rounded-medium items-center justify-center flex gap-3 shadow-md">
          <FaShare className="text-pink text-2xl" />
          <p>Sdílet</p>
        </button>
      </div>
    </div>
  );
}

export function ListingDescription() {
  return (
    <ListingSectionWrapper heading="Kouzelný resort pro Vaši akci">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum
        qui repellat, non animi ullam ex officia. Necessitatibus iste illo
        dolorem harum magnam repellendus porro, cumque laborum neque,
        accusantium repudiandae?
      </p>
    </ListingSectionWrapper>
  );
}

export type ListingSectionWrapperType = {
  children: ReactNode;
  heading?: string;
};

export function ListingSectionWrapper(props: ListingSectionWrapperType) {
  return (
    <div className="pt-12 mt-12 border-borderLight flex flex-col gap-7">
      {props.heading && (
        <>
          <h2 className="font-bold border-b-2 border-pink self-start pb-5">
            {props.heading}
          </h2>
        </>
      )}
      {props.children}
    </div>
  );
}

export function SublistingsCards() {
  return (
    <ListingSectionWrapper heading="Služby">
      <div className="flex flex-col gap-5">
        <div className="">
          <div className="flex gap-2">
            <SublistingCard text="Obsluha" />
            <SublistingCard text="Catering" />
            <SublistingCard text="Něco" />
            <SublistingCard text="Nápad" />

            <FaChevronRight className="text-3xl text-pink self-center" />
          </div>
        </div>
      </div>
    </ListingSectionWrapper>
  );
}

export type SublistingCardProp = {
  text: string;
};

export function SublistingCard(props: SublistingCardProp) {
  return (
    <div className="relative border border-borderLight rounded-medium overflow-hidden">
      <Image
        src={image}
        width={400}
        height={400}
        alt="img"
        className="aspect-square object-cover"
      />
      <h5 className="absolute bottom-2 bg-white/80 text-pink backdrop-blur-sm rounded-medium left-[50%] translate-x-[-50%] flex p-3 max-w-[90%] items-center justify-center font-semibold">
        {props.text}
      </h5>
    </div>
  );
}

export function ListingFAQ() {
  return (
    <ListingSectionWrapper heading="Časté dotazy">
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
    </ListingSectionWrapper>
  );
}

export type ImagesGridType = {
  direction: "left" | "right";
};

export function ImagesGridVerticalHalf(props: ImagesGridType) {
  return (
    <ListingSectionWrapper>
      <div className="grid grid-cols-2 gap-3 rounded-medium overflow-hidden">
        <div
          className={`${
            props.direction === "right" && "col-start-2 row-start-1"
          } relative overflow-hidden`}
        >
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className="w-full h-full aspect-square object-cover"
          />
          <div className="absolute bottom-5 left-[50%] translate-x-[-50%] w-[90%] bg-white/70 backdrop-blur-lg px-4 py-5 flex flex-col gap-4 rounded-medium">
            <h4 className="font-semibold text-pink">Nápoje všeho druhu</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              quisquam consectetur iure tenetur maiores delectus natus provident
              iusto debitis! Praesentium officiis sit harum voluptatum natus.
              Sapiente harum perspiciatis in iste!
            </p>
          </div>
        </div>
        <div
          className={`${
            props.direction === "right" &&
            "col-start-1 row-start-1 rounded-l-medium"
          } grid grid-cols-2 items-stretch gap-3 overflow-hidden`}
        >
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className="object-cover"
          />
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className=" object-cover"
          />
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className=" object-cover"
          />
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className=" object-cover"
          />
        </div>
      </div>
    </ListingSectionWrapper>
  );
}

export function ImagesGridHorizontalHalf(props: ImagesGridType) {
  return (
    <ListingSectionWrapper>
      <div className="flex flex-col gap-3 rounded-medium overflow-hidden">
        <div className={`relative overflow-hidden row-start-1`}>
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className="w-full h-80 aspect-square object-cover"
          />
          <div
            className={`absolute bottom-5 ${
              props.direction === "right" ? "right-5" : "left-5"
            } max-w-80 bg-white/70 backdrop-blur-lg px-4 py-5 flex flex-col gap-4 rounded-medium`}
          >
            <h4 className="font-bold text-pink">Nápoje všeho druhu</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              quisquam consectetur iure tenetur maiores delectus natus provident
              iusto debitis!
            </p>
          </div>
        </div>
        <div className={`grid grid-cols-4 gap-3 items-stretch h-40`}>
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className=" object-cover"
          />

          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className=" object-cover"
          />
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className="object-cover"
          />
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className=" object-cover"
          />
        </div>
      </div>
    </ListingSectionWrapper>
  );
}

export function ImagesGridSquare(props: ImagesGridType) {
  return (
    <ListingSectionWrapper>
      <div className="grid grid-rows-2 grid-cols-2 gap-3 rounded-medium overflow-hidden">
        <Image
          src={image}
          width={500}
          height={500}
          alt="image"
          className="w-full col-span-2 h-80 aspect-square object-cover relative overflow-hidden row-start-1"
        />
        <div
          className={`w-full bg-white p-10 flex flex-col gap-4 rounded-medium items-center justify-center`}
        >
          <h2 className="font-bold text-pink w-full text-start">
            Nápoje všeho druhu
          </h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus, quae voluptatibus unde, ad eum labore modi ratione
            itaque architecto laboriosam repellat minima, deserunt adipisci
            nihil assumenda deleniti magnam vel magni!
          </p>
        </div>
        <div className={`grid grid-cols-2 gap-3 items-stretch`}>
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className=" object-cover"
          />
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className=" object-cover"
          />
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className=" object-cover"
          />
          <Image
            src={image}
            width={500}
            height={500}
            alt="image"
            className="object-cover"
          />
        </div>
      </div>
    </ListingSectionWrapper>
  );
}

export function ListingsReview() {
  const items = [];
  for (let i = 0; i < 3; i++) {
    items.push(<ReviewCard key={i} />);
  }
  return (
    <ListingSectionWrapper>
      <div className="flex gap-3">{items}</div>
    </ListingSectionWrapper>
  );
}

export type ReviewCardType = {};

export function ReviewCard(props: ReviewCardType) {
  return (
    <div className="flex flex-col items-center border border-borderLight rounded-medium shadow-md">
      <div className="flex flex-col items-center justify-center gap-4 p-5">
        <p className="text-sm font-semibold text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ducimus
          modi totam aperiam velit magnam laborum numquam, alias, nihil nulla id
          enim, ipsum aliquam consequatur voluptatem voluptas maiores reiciendis
          neque.
        </p>
        <div className="text-center">
          <p className="font-semibold">Babrbora Nesvařilová</p>
          <p className="text-sm">CEO Best Comp a.s.</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-3xl text-pink min-h-30">
        <FaRegStar />
        <p>5.0</p>
      </div>
    </div>
  );
}

export type CustomStatProp = {
  stat: string;
  description: string;
};

export function CustomStat(props: CustomStatProp) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="font-bold text-pink text-6xl">{props.stat}</p>
      <p className="text-lg font-semibold text-textNormal">
        {props.description}
      </p>
    </div>
  );
}

export function ListingCustomStats() {
  return (
    <ListingSectionWrapper>
      <div className="grid grid-cols-3">
        <CustomStat stat="1300+" description="odehraných akcí" />
        <CustomStat stat="259" description="akcí světového formátu" />
        <CustomStat stat="70+" description="publikovaných mixů" />
      </div>
    </ListingSectionWrapper>
  );
}

export function ListingSpecifications() {
  return (
    <ListingSectionWrapper>
      <div className="flex flex-col gap-8">
        <ListingIconSection heading="Hudební žánr" />
        <ListingIconSection heading="Vybavení" />
        <ListingIconSection heading="Požadavky" />
      </div>
    </ListingSectionWrapper>
  );
}

type ListingIconSectionProps = {
  heading: string;
};

export function ListingIconSection(props: ListingIconSectionProps) {
  const icons = [];

  for (let i = 0; i < 7; i++) {
    icons.push(<ListingIcon key={i} text="Mix pult" />);
  }
  return (
    <div className="flex flex-col gap-4 border-b border-borderLight pb-8">
      <h5 className="font-semibold">{props.heading}</h5>
      <div className="grid grid-cols-3 gap-3">{icons}</div>
    </div>
  );
}

type ListingIconProps = {
  text: string;
};

export function ListingIcon(props: ListingIconProps) {
  return (
    <div className="flex items-center gap-10">
      <RiSoundModuleFill className="text-3xl text-pink" />
      <p>{props.text}</p>
    </div>
  );
}
