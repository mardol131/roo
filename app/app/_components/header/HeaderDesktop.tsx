"use client";

import { useCallback, useRef, useState } from "react";

import { useClickOutside } from "@/app/_hooks/useClickOutside";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import { authSlice } from "@/app/_redux/slices/authSlice/authSlice";
import { headerFilterSlice } from "@/app/_redux/slices/filtersSlice/headerFilterSlice";
import logo from "@/public/logo.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import Text from "../atoms/text/Text";
import { UpperHeader } from "./headerFIlter/UpperHeader";
import CalendarSettings from "./popupSettings/CalendarSettings";
import EventTypeSettings from "./popupSettings/EventTypeSettings";
import GuestsSettings from "./popupSettings/GuestsSettings";
import ListingCategorySettings from "./popupSettings/ListingCategorySettings";
import PlaceSettings from "./popupSettings/PlaceSettings";
import UserDropdown from "./userDropdown/UserDropdown";

export default function HeaderDesktop() {
  const { settingsType } = useAppSelector((state) => state.headerFilter);
  const { loggedIn } = useAppSelector((state) => state.authSlice);
  const dispatch = useAppDispatch();

  const t = useTranslations("header.desktop");

  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  function closeSettingsHandler() {
    dispatch(headerFilterSlice.actions.changeHeaderSettings(null));
  }

  const headerRef = useRef(null);
  const headerFilterRef = useRef(null);

  useClickOutside(headerRef, closeSettingsHandler, headerFilterRef);

  const openLoginModal = useCallback(() => {
    dispatch(authSlice.actions.changeModalIsOpen({ isOpen: true }));
  }, []);

  return (
    <div
      className={`sticky top-0 bg-white z-50 px-[74px] flex flex-col items-center w-full border-b border-zinc-100 py-3`}
    >
      <div className="w-full max-w-contentWrapper grid grid-cols-[1fr_3fr_1fr] items-center">
        <Link href={"/"}>
          <Image
            src={logo}
            width={100}
            height={100}
            alt="logo"
            className="h-10 w-auto"
          />
        </Link>
        <UpperHeader headerFilterRef={headerFilterRef} />
        {settingsType && (
          <div
            ref={headerRef}
            className="absolute top-full w-full flex justify-center max-w-contentWrapper"
          >
            {settingsType == "listingCategory" && <ListingCategorySettings />}
            {settingsType == "eventType" && <EventTypeSettings />}
            {settingsType == "location" && <PlaceSettings />}
            {settingsType == "time" && <CalendarSettings />}
            {settingsType == "people" && <GuestsSettings />}
          </div>
        )}
        <div className="relative text-center flex justify-end gap-6 items-center">
          {/* <Button
            type="button"
            size="lg"
            text="Pro dodavatele"
            bgColor="white"
            textColor="tertiary"
            rounding="full"
          /> */}
          <button>
            <Text
              text={t("becomeHost")}
              tag="p"
              color="black"
              className="pr-3 hover:text-primary animate"
              fontWeight="semibold"
            />
          </button>
          <button
            onClick={() => {
              setUserDropdownOpen(!userDropdownOpen);
            }}
            className="bg-linear-30 from-primary to-tertiary text-xl rounded-full w-10 h-10 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all ease-in-out cursor-pointer"
          >
            <MdMenu />
          </button>
          {userDropdownOpen && (
            <UserDropdown
              closeHandler={() => {
                setUserDropdownOpen(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
