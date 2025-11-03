"use client";

import { useEffect, useRef, useState } from "react";

import { useClickOutside } from "@/app/_hooks/useClickOutside";
import { useAppSelector } from "@/app/_redux/hooks";
import { useParams, usePathname } from "next/navigation";
import { LowerHeader } from "./lowerHeader/LowerHeader";
import CalendarSettings from "./popupSettings/CalendarSettings";
import PlaceSettings from "./popupSettings/PlaceSettings";
import GuestsSettings from "./popupSettings/GuestsSettings";
import EventTypeSettings from "./popupSettings/EventTypeSettings";
import { UpperHeader } from "./upperHeader/UpperHeader";

export default function HeaderDesktop() {
  const [eventSettingsOpen, setEventSettingsOpen] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  const { currentStep } = useAppSelector((state) => state.lowerHeaderStep);
  const { slug } = useParams();
  const pathname = usePathname();
  const isLandingpage = pathname.startsWith("/home");
  const handleScroll = () => {
    if (window.scrollY == 0 && eventSettingsOpen) {
      setEventSettingsOpen(true);
      setIsAtTop(true);
    } else if (window.scrollY > 0 && isAtTop) {
      setEventSettingsOpen(false);
      setIsAtTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function openSettingsHandler() {
    setEventSettingsOpen(true);
  }

  function closeSettingsHandler() {
    setEventSettingsOpen(false);
  }

  const headerRef = useRef(null);

  useClickOutside(headerRef, closeSettingsHandler);

  if (!isLandingpage) {
    return (
      <div
        ref={headerRef}
        className={`sticky top-0 bg-white z-50 px-[74px] flex flex-col items-center w-full border-b border-zinc-100 py-3`}
      >
        <UpperHeader openSettingsHandler={openSettingsHandler} />
        {currentStep == "eventType" && <EventTypeSettings />}
        {currentStep == "location" && <PlaceSettings />}
        {currentStep == "time" && <CalendarSettings />}
        {currentStep == "people" && <GuestsSettings />}
      </div>
    );
  }
}
