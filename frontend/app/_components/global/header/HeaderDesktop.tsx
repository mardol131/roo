"use client";

import React, { ReactNode, useState } from "react";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

import { BiSolidParty } from "react-icons/bi";
import PlaceSettings from "./PlaceSettings";
import EventTypesWithIcons from "./EventTypeSettings";
import CalendarSettings from "./CalendarSettings";
import PeopleSettings from "./PeopleSettings";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";

import {
  CurrentStepType,
  lowerHeaderStep,
} from "@/app/_redux/slices/lowerHeaderStepsSlice";

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

export function LowerHeader() {
  const { currentStep } = useAppSelector((state) => state.lowerHeaderStep);
  const dispatch = useAppDispatch();

  function setStep(step: CurrentStepType) {
    dispatch(lowerHeaderStep.actions.changeStep(step));
  }

  return (
    <>
      {" "}
      <div className="p-2 bg-optionsBar border-1 font-semibold border-borderLight shadow-lg shadow-black/10 flex gap-3 min-h-18 content-stretch justify-items-start text-textPlaceholder w-full max-w-lowerHeader rounded-full">
        <div className="grid grid-cols-4 w-full gap-2 content-stretch">
          <LowerHeaderButton
            text="Typ akce?"
            currentStep={currentStep}
            setter={() => {
              setStep("eventType");
            }}
            gradientDirection="bg-gradient-to-t"
            icon={<BiSolidParty />}
            type="eventType"
          />
          <LowerHeaderButton
            text="Kde?"
            currentStep={currentStep}
            setter={() => {
              setStep("place");
            }}
            gradientDirection="bg-gradient-to-r"
            icon={<FaMapMarkerAlt />}
            type="place"
          />
          <LowerHeaderButton
            text="Kdy?"
            currentStep={currentStep}
            setter={() => {
              setStep("time");
            }}
            gradientDirection="bg-gradient-to-b"
            icon={<FaCalendar />}
            type="time"
          />
          <LowerHeaderButton
            text="Počet lidí"
            currentStep={currentStep}
            setter={() => {
              setStep("people");
            }}
            gradientDirection="bg-gradient-to-l"
            icon={<FaUser />}
            type="people"
          />
        </div>
        <div className="cursor-pointer hover:scale-130 transition-all ease-in-out relative z-20 shrink-0 scale-108 max-w-13 max-h-13 w-full aspect-square flex items-center justify-center bg-linear-30 from-orange via-pink to-violet rounded-full text-white text-xl justify-self-end">
          <FaMagnifyingGlass />
        </div>
      </div>
    </>
  );
}

export function LowerHeaderButton(props: {
  currentStep: CurrentStepType;
  setter: () => void;
  gradientDirection:
    | "bg-gradient-to-t"
    | "bg-gradient-to-r"
    | "bg-gradient-to-b"
    | "bg-gradient-to-l";
  text: string;
  icon: ReactNode;
  type: CurrentStepType;
}) {
  const iconClassName =
    "text-pink group-hover:text-white text-xl self-center z-20";
  const iconSeconClassName = "group-hover:text-white text-xl self-center z-20";
  {
    return props.currentStep != props.type ? (
      <button
        onClick={props.setter}
        className="relative group hover:shadow-lg rounded-full justify-center group overflow-hidden cursor-pointer hover:!text-white flex items-center gap-3 transition-all ease-in-out hover:rounded-full"
      >
        <div className={iconClassName}>{props.icon}</div>
        <p className="z-20 font-semibold ">{props.text}</p>
        <span
          className={`absolute inset-0 ${props.gradientDirection} from-orange to-pink opacity-0 transition-opacity ease-in-out z-10 group-hover:opacity-100`}
        ></span>
      </button>
    ) : (
      <button
        onClick={props.setter}
        className={`${props.gradientDirection} from-orange to-pink hover:shadow-lg rounded-full justify-center group overflow-hidden cursor-pointer !text-white transition-all ease-in-out flex items-center gap-3  hover:rounded-full`}
      >
        <div className={iconSeconClassName}>{props.icon}</div>

        <p className="z-20 font-semibold ">{props.text}</p>
      </button>
    );
  }
}

export default function HeaderDesktop({}: Props) {
  const { currentStep } = useAppSelector((state) => state.lowerHeaderStep);
  console.log(currentStep);

  return (
    <div className="fixed bg-white z-50 px-[74px] flex flex-col items-center w-full border-b border-zinc-100 pb-5">
      <UpperHeader />
      <div className="relative flex flex-col gap-5 items-center justify-center w-full">
        <LowerHeader />
        <div className="relative w-full">
          {currentStep == "eventType" && <EventTypesWithIcons />}
          {currentStep == "place" && <PlaceSettings />}
          {currentStep == "time" && <CalendarSettings />}
          {currentStep == "people" && <PeopleSettings />}
        </div>
      </div>
    </div>
  );
}
