"use client";

import { userLogin } from "@/app/_api/payload";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaMagnifyingGlass, FaUser } from "react-icons/fa6";

import logo from "@/public/logo.png";
import Text from "../../atoms/Text";
import { MdOutlineFestival } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";

import {
  headerFilterSlice,
  ListingCategoryType,
  SettingsTypes,
  SettingsTypesArray,
} from "@/app/_redux/slices/filtersSlice/headerFilterSlice";
import { useRef } from "react";
import { getLocalization } from "@/app/_localization/getLocalization";

type UpperHeaderProps = {
  headerFilterRef: React.RefObject<HTMLDivElement | null>;
};

const m = getLocalization("cs", "header");

export function UpperHeader(props: UpperHeaderProps) {
  const { guests, category, settingsType } = useAppSelector(
    (state) => state.headerFilter
  );
  const dispatch = useAppDispatch();

  function setSettingsType(type: SettingsTypes) {
    dispatch(headerFilterSlice.actions.changeHeaderSettings(type));
  }

  const guestCountArray = Object.values(guests);
  const guestCount = guestCountArray.reduce((acc, curr) => acc + curr, 0);
  let guestText = "host";

  if (guestCount == 0) {
    guestText = "hostů";
  } else if (guestCount == 1) {
    guestText = "host";
  } else if (guestCount <= 4) {
    guestText = "hosté";
  } else if (guestCount > 4) {
    guestText = "hostů";
  }

  function FilterButton({ value }: { value: SettingsTypes }) {
    return (
      <button
        onClick={(e) => {
          e.stopPropagation();
          setSettingsType(value);
        }}
        className="flex flex-col items-start"
      >
        <Text text={m(`${value}.label`)} tag="p" size="bodyXs" color="black" />
        <Text
          text={m(`${value}.text`)}
          tag="p"
          size="body"
          color="black"
          className={`${settingsType === value && "text-primary"} hover:text-primary text-start w-full rounded-full cursor-pointer animate`}
        />
      </button>
    );
  }

  function CategoryFilterButton() {
    return (
      <div
        onClick={() => {
          setSettingsType("listingCategory");
        }}
        className={`relative flex items-center gap-3`}
      >
        <MdOutlineFestival className="text-primary text-2xl" />
        <button className="flex flex-col items-start">
          <Text
            text={m("listingCategory.label")}
            tag="p"
            size="bodyXs"
            color="black"
          />
          <Text
            text={m(`listingCategory.type.${category}`)}
            tag="p"
            color="black"
            className={`${(settingsType === "listingCategory" || category) && "text-primary"} hover:text-primary text-start w-full rounded-full cursor-pointer animate`}
          />
        </button>
        {category && (
          <div className="absolute top-[100%] w-full mt-3 flex justify-center">
            <div className="bg-success p-2 w-[50%] shadow-xl rounded-b-lg">
              <FaCheck />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={props.headerFilterRef}
      className="rounded-full bg-white p-2 pl-10 justify-self-center text-white border border-borderLight font-semibold shadow-lg"
    >
      <div className="flex items-center text-nowrap gap-15">
        <CategoryFilterButton />
        {SettingsTypesArray.map((item) => {
          return <FilterButton key={item} value={item} />;
        })}
        <Link
          href={"/catalog"}
          className="h-12 w-12 shrink-0 hover:scale-105 animate hover:rotate-20 bg-primaryTertiary text-white rounded-full flex items-center justify-center"
        >
          <FaMagnifyingGlass />
        </Link>
      </div>
    </div>
  );
}
