import Image from "next/image";
import React from "react";
import { FaThList } from "react-icons/fa";
import {
  FaHandHolding,
  FaHandHoldingHand,
  FaHouse,
  FaRegStar,
  FaStar,
  FaUser,
  FaXmark,
} from "react-icons/fa6";
import image from "@/app/_images/test.jpg";
import Link from "next/link";
import logo from "@/public/logo.png";

type Props = {};

export function AdminSidebar() {
  return (
    <div className="bg-linear-70 from-pink to-violet relative h-full w-full flex justify-center">
      <div className="w-full px-3">
        <div className="flex flex-col gap-3 sticky top-0 text-center h-screen justify-between py-10">
          <div className="flex flex-col gap-5">
            <Link href={"/"}>
              <Image src={logo} height={200} width={200} alt="logo" />
            </Link>
            <Link
              href={"/admin"}
              className="cursor-pointer flex flex-col items-center p-2 justify-center gap-3 text-white font-semibold hover:bg-white aspect-square w-full hover:text-textNormal rounded-medium animate"
            >
              <FaHouse className="text-2xl" />
              <p className="text-sm font-bold">Domů</p>
            </Link>
            <Link
              href={"/admin/inzeraty"}
              className="cursor-pointer flex flex-col items-center p-2 justify-center gap-3 text-white font-semibold hover:bg-white aspect-square w-full hover:text-textNormal rounded-medium animate"
            >
              <FaThList className="text-2xl" />
              <p className="text-sm font-bold">Inzeráty</p>
            </Link>
            <Link
              href={"/admin/sluzby"}
              className="cursor-pointer flex flex-col items-center p-2 justify-center gap-3 text-white font-semibold hover:bg-white aspect-square w-full hover:text-textNormal rounded-medium animate"
            >
              <FaHandHoldingHand className="text-2xl" />
              <p className="text-sm font-bold">Objednat služby</p>
            </Link>
            <Link
              href={"/admin/ucet"}
              className="cursor-pointer flex flex-col items-center p-2 justify-center gap-3 text-white font-semibold hover:bg-white aspect-square w-full hover:text-textNormal rounded-medium animate"
            >
              <FaUser className="text-2xl" />
              <p className="text-sm font-bold">Účet</p>
            </Link>{" "}
          </div>
          <div className="flex flex-col gap-10">
            <button className="cursor-pointer flex flex-col items-center justify-center gap-3 text-white font-semibold hover:bg-white w-full hover:text-textNormal rounded-small animate">
              Odhlásit se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AdminHeader() {
  return (
    <div className="border-b border-borderLight shadow-lg p-5 bg-white flex justify-between items-center">
      <h3 className="font-semibold">Správa inzerátů</h3>
      <button className="animate hover:scale-110 cursor-pointer bg-linear-30 from-violet to-pink shadow-lg py-2 px-3 text-lg rounded-small text-white font-semibold animate">
        Přidat nový inzerát
      </button>
    </div>
  );
}

export default function page({}: Props) {
  return <AdminHomepage />;
}

export function AdminHomepage() {
  return (
    <div className="grid grid-cols-4 gap-10">
      <div className="col-span-3 flex flex-col gap-10">
        <div className="grid grid-cols-3 col-span-3 gap-10">
          <RooCardTwo />
          <RooCard />
        </div>
        <p className="text-2xl col-span-3 font-semibold">Inzeráty</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] col-span-3 gap-10">
          <AdminListingCard />
          <AdminListingCard />
          <AdminListingCard />
          <AdminListingCard />
          <AdminListingCard />
          <AdminListingCard />
          <AdminListingCard />
        </div>
      </div>

      <div className="bg-white border row-start-1 col-start-4 border-borderLight rounded-medium shadow-lg p-5 flex flex-col gap-5">
        <h3 className="font-bold text-pink">Novinky a upozornění</h3>
        <NewsCard
          heading="Vítejte v naší službě"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                harum. Consequatur ab enim distinctio?"
          type="news"
        />
        <NewsCard
          heading="Změna podmínek"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                harum. Consequatur ab enim distinctio?"
          type="alert"
        />
      </div>
    </div>
  );
}

export type NewsCardProps = {
  heading: string;
  text: string;
  type: "news" | "alert";
};

const newsColors = {
  news: "bg-linear-40 from-violet to-pink",
  alert: "bg-linear-120 from-violet to-pink",
};

export function NewsCard(props: NewsCardProps) {
  return (
    <div className={`${newsColors[props.type]} rounded-medium text-white p-4`}>
      <div className="flex justify-between">
        <h5 className="font-bold">{props.heading}</h5>
        <FaXmark />
      </div>
      <p>{props.text}</p>
    </div>
  );
}

export function AdminListingCard() {
  const rating = 3;

  const ratingStart = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingStart.push(<FaStar key={i} className="text-pink" />);
    } else {
      ratingStart.push(<FaRegStar key={i} className="text-pink" />);
    }
  }

  return (
    <div className="border rounded-medium border-borderLight bg-white shadow-lg flex flex-col overflow-hidden">
      <Image
        src={image}
        height={400}
        width={500}
        alt="image"
        className=" object-cover h-60 w-full"
      />
      <div className="p-5 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h3 className="font-bold  text-pink">Mlýn Davídkov</h3>
          <p className="font-bold">Od 20.000 Kč</p>
        </div>
        <div className="font-semibold gap-3 flex flex-col text-base">
          <div className="flex justify-between">
            <p className="">Hodnocení</p>
            <div className="flex items-center">
              <p className="mr-2 -mb-[2px]">{rating}</p>
              {ratingStart}
            </div>
          </div>

          <div className="flex justify-between">
            <p className="">Zobrazení za posledních 7 dní</p>
            <p>365</p>
          </div>
          <div className="flex justify-between">
            <p className="">Počet objednávek</p>
            <p>4</p>
          </div>
          <div className="flex justify-between">
            <p className="">Mlýn Davídkov</p>
            <p>365</p>
          </div>
        </div>
        <button className="border w-full cursor-pointer animate hover:bg-pink hover:text-white font-semibold p-2 rounded-medium shadow-md border-borderLight">
          Upravit inzerát
        </button>
      </div>
    </div>
  );
}

export function RooCard() {
  const rating = 3;

  const ratingStart = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingStart.push(<FaStar key={i} className="text-pink" />);
    } else {
      ratingStart.push(<FaRegStar key={i} className="text-pink" />);
    }
  }

  return (
    <div className="border rounded-medium border-borderLight bg-linear-150 from-violet to-pink shadow-xl flex flex-col overflow-hidden">
      <div className="p-5 flex flex-col gap-5 items-center justify-center h-full">
        <div className="flex items-center justify-between">
          <h3 className="font-bold  text-white">
            Tipy a triky na lepší prodeje
          </h3>
        </div>
        <p className="text-white text-center font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          nihil quod ad culpa eum saepe tenetur. Aperiam enim nobis dolore ipsa
          animi repellendus incidunt odio, doloribus, repudiandae reiciendis,
          minima explicabo.
        </p>

        <button className=" font-semibold p-3 px-5 animate hover:scale-110 cursor-pointer rounded-sm shadow-md bg-white">
          Přejít na článek
        </button>
      </div>
    </div>
  );
}

export function RooCardTwo() {
  const rating = 3;

  const ratingStart = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingStart.push(<FaStar key={i} className="text-pink" />);
    } else {
      ratingStart.push(<FaRegStar key={i} className="text-pink" />);
    }
  }

  return (
    <div className="col-span-2 border rounded-medium border-borderLight bg-linear-150 from-violet to-pink shadow-xl flex flex-col  overflow-hidden">
      <div className="p-5 flex flex-col gap-5 items-center justify-center h-full">
        <div className="flex items-center justify-between">
          <h3 className="font-bold  text-white">
            Tipy a triky na lepší prodeje
          </h3>
        </div>
        <p className="text-white text-center font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          nihil quod ad culpa eum saepe tenetur. Aperiam enim nobis dolore ipsa
          animi repellendus incidunt odio, doloribus, repudiandae reiciendis,
          minima explicabo.
        </p>

        <button className=" font-semibold p-3 px-5 animate hover:scale-110 cursor-pointer rounded-sm shadow-md bg-white">
          Přejít na článek
        </button>
      </div>
    </div>
  );
}
