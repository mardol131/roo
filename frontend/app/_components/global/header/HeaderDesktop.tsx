"use client";

import React, { useState } from "react";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

import { BiSolidParty } from "react-icons/bi";
import PlaceSettings from "./PlaceSettings";
import EventTypesWithIcons from "./EventTypeSettings";
import CalendarSettings from "./CalendarSettings";

type Props = {};

export function UpperHeader() {
  return (
    <div className="w-full max-w-contentWrapper grid grid-cols-[1fr_3fr_1fr] items-center">
      <Image src={logo} width={100} height={100} alt="logo" />
      <div className="rounded-full bg-linear-30 from-orange via-pink to-violet flex text-white font-semibold shadow-lg">
        <button className="py-2 hover:scale-120 w-[32%] cursor-pointer ease-in-out transition-all">
          Venues
        </button>
        <div className="w-0.5 bg-white"></div>
        <button className="hover:scale-120 w-[33%]  cursor-pointer ease-in-out transition-all">
          Gastro
        </button>
        <div className="w-0.5 bg-white"></div>
        <button className="py-2 w-[32%] hover:scale-120  cursor-pointer ease-in-out transition-all">
          Weddings
        </button>
      </div>
      <div className="text-center flex justify-end gap-11 items-center">
        <Link
          href={"/"}
          className="text-white font-semibold bg-linear-60 from-pink to-orange hover:scale-110 ease-in-out transition-all shadow-md rounded-full py-2 px-4"
        >
          Pro dodavatele
        </Link>
        <div className="bg-orange rounded-full w-10 h-10 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all ease-in-out cursor-pointer">
          <FaUser />
        </div>
      </div>
    </div>
  );
}

type LowerHeaderPropsType = {
  setSettingsType: React.Dispatch<React.SetStateAction<SettingsType>>;
  settingsType: SettingsType;
};

export function LowerHeader({
  setSettingsType,
  settingsType,
}: LowerHeaderPropsType) {
  return (
    <>
      {" "}
      <div className="p-2 bg-optionsBar border-1 font-semibold border-borderLight shadow-lg shadow-black/10 flex gap-3 min-h-18 content-stretch justify-items-start text-textPlaceholder w-full max-w-lowerHeader rounded-full">
        <div className="grid grid-cols-4 w-full gap-2 content-stretch">
          {settingsType != "eventType" ? (
            <button
              onClick={() => {
                setSettingsType("eventType");
              }}
              className="relative group from-orange via-pink to-violet hover:shadow-lg rounded-full justify-center group overflow-hidden cursor-pointer hover:!text-white transition-all ease-in-out flex items-center gap-3  hover:rounded-full border-pink "
            >
              <BiSolidParty className="text-pink group-hover:text-white text-xl self-center z-20" />
              <p className="z-20 font-semibold ">Typ akce?</p>
              <span className="absolute inset-0 bg-gradient-to-r from-orange to-pink opacity-0 transition-opacity ease-in-out z-10 group-hover:opacity-100"></span>
            </button>
          ) : (
            <button
              onClick={() => {
                setSettingsType("eventType");
              }}
              className="bg-gradient-to-r from-orange to-pink hover:shadow-lg rounded-full justify-center group overflow-hidden cursor-pointer !text-white transition-all ease-in-out flex items-center gap-3  hover:rounded-full border-pink "
            >
              <BiSolidParty className=" group-hover:text-white text-xl self-center z-20" />
              <p className="z-20 font-semibold ">Typ akce?</p>
            </button>
          )}
          {settingsType != "place" ? (
            <button
              onClick={() => {
                setSettingsType("place");
              }}
              className="relative group from-orange via-pink to-violet hover:shadow-lg rounded-full justify-center group overflow-hidden cursor-pointer hover:!text-white flex items-center gap-3 transition-all ease-in-out hover:rounded-full border-pink "
            >
              <FaMapMarkerAlt className="text-pink group-hover:text-white text-xl self-center z-20" />
              <p className="z-20 font-semibold ">Kde?</p>
              <span className="absolute inset-0 bg-gradient-to-b from-orange to-pink opacity-0 transition-opacity ease-in-out z-10 group-hover:opacity-100"></span>
            </button>
          ) : (
            <button
              onClick={() => {
                setSettingsType("place");
              }}
              className="bg-gradient-to-b from-orange to-pink hover:shadow-lg rounded-full justify-center group overflow-hidden cursor-pointer !text-white transition-all ease-in-out flex items-center gap-3  hover:rounded-full border-pink "
            >
              <FaMapMarkerAlt className=" group-hover:text-white text-xl self-center z-20" />
              <p className="z-20 font-semibold ">Kde?</p>
            </button>
          )}
          {settingsType != "time" ? (
            <button
              onClick={() => {
                setSettingsType("time");
              }}
              className="relative group from-orange via-pink to-violet hover:shadow-lg rounded-full justify-center group overflow-hidden cursor-pointer hover:!text-white flex items-center gap-3 transition-all ease-in-out hover:rounded-full border-pink "
            >
              <FaCalendar className="text-pink group-hover:text-white text-xl self-center z-20" />
              <p className="z-20 font-semibold ">Kdy?</p>
              <span className="absolute inset-0 bg-gradient-to-t from-orange to-pink opacity-0 transition-opacity ease-in-out z-10 group-hover:opacity-100"></span>
            </button>
          ) : (
            <button
              onClick={() => {
                setSettingsType("time");
              }}
              className="bg-gradient-to-t from-orange to-pink hover:shadow-lg rounded-full justify-center group overflow-hidden cursor-pointer !text-white transition-all ease-in-out flex items-center gap-3  hover:rounded-full border-pink "
            >
              <FaCalendar className=" group-hover:text-white text-xl self-center z-20" />
              <p className="z-20 font-semibold ">Kdy?</p>
            </button>
          )}
          {settingsType != "people" ? (
            <button
              onClick={() => {
                setSettingsType("people");
              }}
              className="relative group from-orange via-pink to-violet hover:shadow-lg rounded-full justify-center group overflow-hidden cursor-pointer hover:!text-white flex items-center gap-3 transition-all ease-in-out hover:rounded-full border-pink "
            >
              <FaUser className="text-pink group-hover:text-white text-xl self-center z-20" />
              <p className="z-20 font-semibold">Kolik lidí?</p>
              <span className="absolute inset-0 bg-gradient-to-l from-orange to-pink opacity-0 transition-opacity ease-in-out z-10 group-hover:opacity-100"></span>
            </button>
          ) : (
            <button
              onClick={() => {
                setSettingsType("people");
              }}
              className="bg-gradient-to-l from-orange to-pink hover:shadow-lg rounded-full justify-center group overflow-hidden cursor-pointer !text-white transition-all ease-in-out flex items-center gap-3  hover:rounded-full border-pink "
            >
              <FaUser className="group-hover:text-white text-xl self-center z-20" />
              <p className="z-20 font-semibold">Kolik lidí?</p>
            </button>
          )}
        </div>
        <div
          onClick={() => {
            setSettingsType("time");
          }}
          className="cursor-pointer hover:scale-130 transition-all ease-in-out relative z-20 shrink-0 scale-108 max-w-13 max-h-13 w-full aspect-square flex items-center justify-center bg-linear-30 from-orange via-pink to-violet rounded-full text-white text-xl justify-self-end"
        >
          <FaMagnifyingGlass />
        </div>
      </div>
    </>
  );
}

export type SettingsType = "eventType" | "place" | "time" | "people" | null;

export default function HeaderDesktop({}: Props) {
  const [settingsType, setSettingsType] = useState<SettingsType>(null);

  return (
    <div className="fixed bg-white px-[74px] flex flex-col items-center w-full border-b border-zinc-100 pb-5">
      <UpperHeader />
      <div className="flex flex-col gap-10 items-center w-full">
        <LowerHeader
          setSettingsType={setSettingsType}
          settingsType={settingsType}
        />
        {settingsType == "eventType" && <EventTypesWithIcons />}
        {settingsType == "place" && <PlaceSettings />}
        {settingsType == "time" && <CalendarSettings />}
        {settingsType == "people" && <EventTypesWithIcons />}
      </div>
    </div>
  );
}
