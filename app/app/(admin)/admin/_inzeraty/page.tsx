import React from "react";

import { FaListAlt } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { PiUserList } from "react-icons/pi";
import { LuPartyPopper } from "react-icons/lu";
import Button from "@/app/_components/atoms/Button";
import { AdminListingCard } from "@/app/(admin)/admin/_components/AdminListingCard";
type Props = {};

export default function AdminListingsPage({}: Props) {
  return (
    <div className="p-10 flex flex-col gap-5">
      <div className="flex gap-5 text-textMedium">
        <div className="shadow-lg bg-white flex items-center justify-between gap-10 border border-borderLight rounded-large px-10 py-4 min-w-[20%]">
          <div className="flex items-center gap-4">
            <FaListAlt className="text-4xl text-primary" />
            <div>
              <h4 className="font-semibold ">Aktivní inzeráty</h4>
              <p className="text-sm">Celkem 12 inzerátů</p>
            </div>
          </div>
          <p className="text-3xl">3</p>
        </div>
        <div className="shadow-lg bg-white flex items-center justify-between gap-10 border border-borderLight rounded-large px-10 py-4 min-w-[20%]">
          <div className="flex items-center gap-4">
            <BsFillPeopleFill className="text-4xl text-secondary" />
            <div>
              <h4 className="font-semibold ">Celkem zobrazení</h4>
              <p className="text-sm">Za posledních 30 dní</p>
            </div>
          </div>
          <p className="text-3xl">3</p>
        </div>
        <div className="shadow-lg bg-white flex items-center justify-between gap-10 border border-borderLight rounded-large px-10 py-4 min-w-[20%]">
          <div className="flex items-center gap-4">
            <LuPartyPopper className="text-4xl text-tertiary" />
            <div>
              <h4 className="font-semibold ">Celkem objednávek</h4>
              <p className="text-sm">Za posledních 30 dní</p>
            </div>
          </div>
          <p className="text-3xl">3</p>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          bgColor="primarySecondary"
          text="Vytvořit nový inzerát"
          size="lg"
          rounding="full"
        />
      </div>
      <div className="flex  flex-col w-full pb-3 gap-3">
        <div className="pl-5 border-b text-sm border-borderLight rounded-t-medium py-5 grid grid-cols-8 gap-2 font-bold text-textMedium pr-8">
          <div className="flex items-center gap-5 col-span-2">
            <div className="w-4 h-4 bg-gray-100 rounded-small border border-borderLight"></div>
            <p className="col-span-2">Inzerát</p>
          </div>
          <p>Datum vytvoření</p>
          <p>Status</p>
          <p>Zobrazení (30 dní)</p>
          <p>Objednávek (30 dní)</p>
          <p>Cena</p>
          <p>Název</p>
        </div>
        <div className=" flex flex-col w-full gap-3 pr-6">
          <AdminListingCard />
          <AdminListingCard />
          <AdminListingCard />
          <AdminListingCard />
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
  );
}
