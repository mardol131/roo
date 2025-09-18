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
import { AdminListingCard } from "./_components/AdminListingCard";
import { AdminNewsCard } from "./_components/AdminNewsCard";
import { AdminRooCard, AdminRooCardTwo } from "./_components/AdminRooCards";

type Props = {};

export default function page() {
  return (
    <div className="grid grid-cols-[3fr_1fr] gap-5 p-10 h-200">
      <div className="flex flex-col gap-5 overflow-scroll">
        <div className="grid grid-cols-3 gap-3">
          <AdminRooCardTwo />
          <AdminRooCard />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl col-span-3 font-semibold">Inzeráty</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(17rem,1fr))] gap-3">
            <AdminListingCard />
            <AdminListingCard />
            <AdminListingCard />
            <AdminListingCard />
            <AdminListingCard />
            <AdminListingCard />
            <AdminListingCard />
          </div>
        </div>
      </div>

      <div className="bg-white border border-borderLight rounded-medium shadow-lg p-5 flex flex-col gap-5 overflow-y-scroll">
        <h3 className="font-bold text-pink">Novinky a upozornění</h3>
        <AdminNewsCard
          heading="Vítejte v naší službě"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                harum. Consequatur ab enim distinctio?"
          type="news"
        />
        <AdminNewsCard
          heading="Změna podmínek"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                harum. Consequatur ab enim distinctio?"
          type="alert"
        />
      </div>
    </div>
  );
}
