"use client";

import { useRef } from "react";

import { useClickOutside } from "@/app/_hooks/useClickOutside";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import { headerFilterSlice } from "@/app/_redux/slices/headerFilterSlice";
import CalendarSettings from "./popupSettings/CalendarSettings";
import EventTypeSettings from "./popupSettings/EventTypeSettings";
import GuestsSettings from "./popupSettings/GuestsSettings";
import PlaceSettings from "./popupSettings/PlaceSettings";
import { UpperHeader } from "./headerFIlter/UpperHeader";
import ListingCategorySettings from "./popupSettings/ListingCategorySettings";

export default function HeaderDesktop() {
  const { settingsType } = useAppSelector((state) => state.headerFilter);
  const dispatch = useAppDispatch();

  function closeSettingsHandler() {
    dispatch(headerFilterSlice.actions.changeSettings(null));
  }

  const headerRef = useRef(null);
  const headerFilterRef = useRef(null);

  useClickOutside(headerRef, closeSettingsHandler, headerFilterRef);

  return (
    <div
      className={`sticky top-0 bg-white z-50 px-[74px] flex flex-col items-center w-full border-b border-zinc-100 py-3`}
    >
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
    </div>
  );
}
