"use client";

import React from "react";
import HeaderSettingsWrapper from "../../wrappers/HeaderSettingsWrapper";
import { FaMapMarked, FaMapSigns } from "react-icons/fa";
import { useAppDispatch } from "@/app/_redux/hooks";
import { lowerHeaderStep } from "@/app/_redux/slices/lowerHeaderStepsSlice";

type Props = {};

export default function PlaceSettings({}: Props) {
  const dispatch = useAppDispatch();

  return (
    <HeaderSettingsWrapper>
      <div
        onMouseLeave={() => {
          dispatch(lowerHeaderStep.actions.changeStep(null));
        }}
        className="p-10 bg-white gap-10 shadow-xl border border-borderLight rounded-3xl grid grid-cols-2 items-center w-full max-w-lowerHeader justify-center"
      >
        <div className="w-full flex flex-col gap-5">
          <button className="flex gap-5 justify-center items-center text-lg font-semibold w-full px-4 text-textPlaceholder">
            <FaMapMarked className="text-pink text-3xl" />
            Začněte výběrem kraje
          </button>
          <div className=" h-70 overflow-y-scroll p-3 rounded-xl [&::-webkit-scrollbar-thumb]:bg-pink">
            <button className="flex hover:bg-pink hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-pink hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-pink hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-pink hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-pink hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-pink hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-pink hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-pink hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-pink hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <button className="flex gap-5 justify-center items-center text-lg font-semibold w-full px-4 text-textPlaceholder">
            <FaMapSigns className="text-pink text-3xl" />
            Vyberte okres
          </button>
          <div className="h-70 overflow-y-scroll p-3 rounded-xl">
            <button className="flex hover:bg-pink hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-pink hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-pink hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-pink hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-pink hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-pink hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-pink hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-pink hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
            <button className="flex hover:bg-pink hover:text-white transition-all cursor-pointer hover:scale-105 ease-in-out rounded-lg gap-5 justify-center items-center font-semibold w-full py-2 px-4 hover:shadow-lg text-textPlaceholder">
              Začněte výběrem kraje
            </button>
          </div>
        </div>
      </div>
    </HeaderSettingsWrapper>
  );
}
