"use client";

import React, { useRef, useState } from "react";
import HeaderSettingsWrapper from "../../wrappers/HeaderSettingsWrapper";
import { FaMapMarked, FaMapSigns } from "react-icons/fa";
import { useAppDispatch } from "@/app/_redux/hooks";
import { lowerHeaderStep } from "@/app/_redux/slices/lowerHeaderStepsSlice";
import { useClickOutside } from "@/app/_hooks/useClickOutside";

type Props = {};

export default function PlaceSettings({}: Props) {
  const dispatch = useAppDispatch();
  function nullHeaderSettings() {
    dispatch(lowerHeaderStep.actions.changeStep(null));
  }
  const settingsRef = useRef(null);
  useClickOutside(settingsRef, nullHeaderSettings);
  const [showRegions, setShowRegions] = useState(false);
  const [showCities, setShowCities] = useState(false);

  return (
    <HeaderSettingsWrapper ref={settingsRef}>
      <div
        onMouseLeave={nullHeaderSettings}
        className="p-10 bg-white gap-5 shadow-xl border border-borderLight items-center rounded-large grid grid-cols-[1fr_2fr] w-full max-w-lowerHeader justify-center"
      >
        <button className="flex gap-5 justify-start items-center text-lg font-semibold w-full px-4 text-textPlaceholder">
          <FaMapMarked className="text-primary text-3xl" />
          Začněte výběrem kraje
        </button>
        <div className="cursor-pointer relative z-20 hover:shadow-xl transition-all ease-in-out w-full border bg-white border-borderLight rounded-xl">
          <button
            onClick={() => {
              setShowRegions(!showRegions);
            }}
            className="w-full cursor-pointer text-lg font-semibold text-start text-textNormal p-3 pl-5"
          >
            Ukázat kraje
          </button>
          {showRegions && (
            <div className="absolute w-full h-100 bg-white top-15 border border-borderLight rounded-xl flex flex-col shadow-xl p-10">
              <div className="overflow-y-scroll flex flex-col gap-3 pr-5 items-start font-semibold">
                <p className="hover:bg-primary border-b w-full border-borderLight hover:text-white transition-all ease-in-out p-2 rounded-lg hover:text-lg">
                  Hlavní město Praha
                </p>
                <p className="hover:bg-primary border-b w-full border-borderLight hover:text-white transition-all ease-in-out p-2 rounded-lg hover:text-lg">
                  Hlavní město Praha
                </p>
                <p className="hover:bg-primary border-b w-full border-borderLight hover:text-white transition-all ease-in-out p-2 rounded-lg hover:text-lg">
                  Hlavní město Praha
                </p>
                <p className="hover:bg-primary border-b w-full border-borderLight hover:text-white transition-all ease-in-out p-2 rounded-lg hover:text-lg">
                  Hlavní město Praha
                </p>
                <p className="hover:bg-primary border-b w-full border-borderLight hover:text-white transition-all ease-in-out p-2 rounded-lg hover:text-lg">
                  Hlavní město Praha
                </p>
                <p className="hover:bg-primary border-b w-full border-borderLight hover:text-white transition-all ease-in-out p-2 rounded-lg hover:text-lg">
                  Hlavní město Praha
                </p>
                <p className="hover:bg-primary border-b w-full border-borderLight hover:text-white transition-all ease-in-out p-2 rounded-lg hover:text-lg">
                  Hlavní město Praha
                </p>
              </div>
            </div>
          )}
        </div>
        <button className="flex gap-5 justify-start items-center text-lg font-semibold w-full px-4 text-textPlaceholder">
          <FaMapSigns className="text-primary text-3xl" />
          Vyberte město
        </button>
        <div className="cursor-pointer relative hover:shadow-xl transition-all ease-in-out w-full border bg-white border-borderLight rounded-xl">
          <button
            onClick={() => {
              setShowCities(!showCities);
            }}
            className="w-full cursor-pointer text-lg font-semibold text-start text-textNormal p-3 pl-5"
          >
            Ukázat města
          </button>
          {showCities && (
            <div className="absolute w-full h-100 bg-white top-15 border border-borderLight rounded-xl flex flex-col shadow-xl p-10">
              <div className="overflow-y-scroll flex flex-col gap-3 pr-5 items-start font-semibold">
                <p className="hover:bg-primary border-b w-full border-borderLight hover:text-white transition-all ease-in-out p-2 rounded-lg hover:text-lg">
                  Hlavní město Praha
                </p>
                <p className="hover:bg-primary border-b w-full border-borderLight hover:text-white transition-all ease-in-out p-2 rounded-lg hover:text-lg">
                  Hlavní město Praha
                </p>
                <p className="hover:bg-primary border-b w-full border-borderLight hover:text-white transition-all ease-in-out p-2 rounded-lg hover:text-lg">
                  Hlavní město Praha
                </p>
                <p className="hover:bg-primary border-b w-full border-borderLight hover:text-white transition-all ease-in-out p-2 rounded-lg hover:text-lg">
                  Hlavní město Praha
                </p>
                <p className="hover:bg-primary border-b w-full border-borderLight hover:text-white transition-all ease-in-out p-2 rounded-lg hover:text-lg">
                  Hlavní město Praha
                </p>
                <p className="hover:bg-primary border-b w-full border-borderLight hover:text-white transition-all ease-in-out p-2 rounded-lg hover:text-lg">
                  Hlavní město Praha
                </p>
                <p className="hover:bg-primary border-b w-full border-borderLight hover:text-white transition-all ease-in-out p-2 rounded-lg hover:text-lg">
                  Hlavní město Praha
                </p>
              </div>
            </div>
          )}
        </div>

        {/* <div className="w-full flex flex-col gap-5">
          <button className="flex gap-5 justify-center items-center text-lg font-semibold w-full px-4 text-textPlaceholder">
            <FaMapSigns className="text-primary text-3xl" />
            Vyberte okres
          </button>
          <div className="h-70 overflow-y-scroll p-3 rounded-xl">
            <button className="flex hover:bg-primary hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-primary hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-primary hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-primary hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-primary hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-primary hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-primary hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-primary hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-primary hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
          </div>
        </div> */}
      </div>
    </HeaderSettingsWrapper>
  );
}
