import React from "react";
import Image from "next/image";
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
import {
  AdminRooCard,
  AdminRooCardTwo,
} from "@/app/admin/_components/AdminRooCards";
import Button from "@/app/_global/atoms/Button";
import { AdminListingCardSmall } from "@/app/admin/_components/AdminListingCard";
import { AdminNewsCard } from "@/app/admin/_components/AdminNewsCard";

type Props = {};

export default function AdminPage({}: Props) {
  return (
    <div className="grid grid-cols-[3fr_1fr] gap-5 p-10 overflow-y-auto">
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-3 gap-3">
          <AdminRooCardTwo />
          <AdminRooCard />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="max-h-100  flex flex-col gap-4 border p-5 rounded-large bg-white border-borderLight shadow-lg ">
            <div className="overflow-hidden flex flex-col gap-5 pr-5">
              {" "}
              <div className="flex justify-between">
                <h4 className="font-semibold">Inzeráty</h4>
                <Button
                  text="Nové +"
                  color="gradientTwo"
                  size="md"
                  rounding="full"
                />
              </div>
              <div className="flex flex-col gap-3 overflow-y-scroll pb-5 pr-3">
                <AdminListingCardSmall />
                <AdminListingCardSmall />
                <AdminListingCardSmall />
                <AdminListingCardSmall />
                <AdminListingCardSmall />
                <AdminListingCardSmall />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-large bg-white border-borderLight shadow-lg p-5">
            <h4 className="font-semibold">Zobrazení</h4>

            <div className="h-full grid grid-cols-7 items-end gap-5">
              <GraphBar percentPoints={40} />
              <GraphBar percentPoints={60} />
              <GraphBar percentPoints={50} />
              <GraphBar percentPoints={40} />
              <GraphBar percentPoints={100} />
              <GraphBar percentPoints={20} />
              <GraphBar percentPoints={50} />
            </div>
            <div className="font-bold grid grid-cols-7 gap-5 text-textMedium justify-items-center text-sm w-full">
              <p className="">po</p>
              <p className="">ut</p>
              <p className="">st</p>
              <p className="">čt</p>
              <p className="">pa</p>
              <p className="">so</p>
              <p className="">ne</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-5">
          <div className="bg-white border border-borderLight rounded-large shadow-lg p-5">
            <div className=" flex flex-col gap-5 overflow-y-auto">
              <h4 className="font-bold ">Novinky a upozornění</h4>
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
              <AdminNewsCard
                heading="Změna podmínek"
                text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                harum. Consequatur ab enim distinctio?"
                type="alert"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export type GraphBarType = {
  percentPoints: number;
};

function GraphBar(props: GraphBarType) {
  return (
    <div className="flex group flex-col h-full justify-end items-center">
      <p className="font-bold text-primary text-sm">25</p>
      <div
        style={{ height: `${props.percentPoints}%` }}
        className="w-full bg-linear-60 from-secondary/70 to-primary/70 group-odd:bg-primary/20 h-[80%] max-w-10 rounded-full shadow-lg"
      ></div>
    </div>
  );
}
