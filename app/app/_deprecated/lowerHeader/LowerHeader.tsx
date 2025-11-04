"use client";

import { ReactNode } from "react";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { FaMagnifyingGlass, FaUser } from "react-icons/fa6";

import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";

import { BiSolidParty } from "react-icons/bi";
import {
  headerFilterSlice,
  ListingCategoryType,
  SettingsTypes,
} from "@/app/_redux/slices/headerFilterSlice";

export function LowerHeader() {
  const { settingsType } = useAppSelector((state) => state.headerFilter);
  const dispatch = useAppDispatch();

  function setStep(step: SettingsTypes) {
    dispatch(headerFilterSlice.actions.changeSettings(step));
  }

  return (
    <>
      <div className="p-2 bg-white border-1 font-semibold border-borderLight shadow-lg shadow-black/10 flex gap-3 min-h-18 content-stretch justify-items-start text-textPlaceholder w-full max-w-lowerHeader rounded-full">
        <div className="grid grid-cols-4 w-full gap-2 content-stretch">
          <LowerHeaderButton
            text="Typ akce?"
            currentStep={settingsType}
            setter={() => {
              setStep("eventType");
            }}
            gradientDirection="bg-gradient-to-t"
            icon={<BiSolidParty />}
            type="eventType"
          />
          <LowerHeaderButton
            text="Kde?"
            currentStep={settingsType}
            setter={() => {
              setStep("location");
            }}
            gradientDirection="bg-gradient-to-r"
            icon={<FaMapMarkerAlt />}
            type="location"
          />
          <LowerHeaderButton
            text="Kdy?"
            currentStep={settingsType}
            setter={() => {
              setStep("time");
            }}
            gradientDirection="bg-gradient-to-b"
            icon={<FaCalendar />}
            type="time"
          />
          <LowerHeaderButton
            text="Počet lidí"
            currentStep={settingsType}
            setter={() => {
              setStep("people");
            }}
            gradientDirection="bg-gradient-to-l"
            icon={<FaUser />}
            type="people"
          />
        </div>
        <div className="cursor-pointer hover:scale-130 transition-all ease-in-out relative z-20 shrink-0 scale-108 max-w-13 max-h-13 w-full aspect-square flex items-center justify-center bg-linear-30 from-secondary via-primary to-tertiary rounded-full text-white text-xl justify-self-end">
          <FaMagnifyingGlass />
        </div>
      </div>
    </>
  );
}

export function LowerHeaderButton(props: {
  currentStep: SettingsTypes;
  setter: () => void;
  gradientDirection:
    | "bg-gradient-to-t"
    | "bg-gradient-to-r"
    | "bg-gradient-to-b"
    | "bg-gradient-to-l";
  text: string;
  icon: ReactNode;
  type: SettingsTypes;
}) {
  const iconClassName =
    "text-primary group-hover:text-white text-xl self-center z-20";
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
          className={`absolute inset-0 ${props.gradientDirection} from-secondary to-primary opacity-0 transition-opacity ease-in-out z-10 group-hover:opacity-100`}
        ></span>
      </button>
    ) : (
      <button
        onClick={props.setter}
        className={`${props.gradientDirection} from-secondary to-primary hover:shadow-lg rounded-full justify-center group overflow-hidden cursor-pointer !text-white transition-all ease-in-out flex items-center gap-3  hover:rounded-full`}
      >
        <div className={iconSeconClassName}>{props.icon}</div>

        <p className="z-20 font-semibold ">{props.text}</p>
      </button>
    );
  }
}
