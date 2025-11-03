"use client";

import { useEffect, useRef, useState } from "react";

import { useClickOutside } from "@/app/_hooks/useClickOutside";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import { useParams, usePathname } from "next/navigation";
import { LowerHeader } from "./lowerHeader/LowerHeader";
import CalendarSettings from "./popupSettings/CalendarSettings";
import PlaceSettings from "./popupSettings/PlaceSettings";
import GuestsSettings from "./popupSettings/GuestsSettings";
import EventTypeSettings from "./popupSettings/EventTypeSettings";
import { UpperHeader } from "./upperHeader/UpperHeader";
import { headerFilterSlice } from "@/app/_redux/slices/headerFilterSlice";

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
          {settingsType == "eventType" && <EventTypeSettings />}
          {settingsType == "location" && <PlaceSettings />}
          {settingsType == "time" && <CalendarSettings />}
          {settingsType == "people" && <GuestsSettings />}
        </div>
      )}
    </div>
  );
}
