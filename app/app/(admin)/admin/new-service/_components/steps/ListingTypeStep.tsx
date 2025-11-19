"use client";
import Button from "@/app/_components/atoms/Button";

import AdminNewListingFormWrapper from "@/app/(admin)/admin/new-service/_components/wrappers/AdminNewListingFormWrapper";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import { newListing } from "@/app/_redux/slices/newListingSlice/newListingSlice";
import { ListingType, ListingTypeData } from "@/app/_types/business/services";

import Gastro from "@/app/_icons/Gastro";
import { useState } from "react";
import { useNewListingSteps } from "../../_hooks/useNewListingSteps";
import { ServiceTypeCard } from "./ServiceTypeCard";

type Props = {};

export const listingCardsData: {
  gastro: ListingTypeData;
  entertainment: ListingTypeData;
  place: ListingTypeData;
} = {
  gastro: {
    heading: "Gastro",
    text: "Děláš catering, máš foodtruck nebo bar na eventy",
    icon: Gastro,
    color: "secondary",
    bgColor: "secondaryPrimary",
    index: 1,
    value: "gastro",
  },
  place: {
    heading: "Místo",
    text: "Máš prostory, kde pořádáš akce.",
    icon: Gastro,
    color: "primary",
    bgColor: "primary",
    index: 2,
    value: "place",
  },
  entertainment: {
    heading: "Zábava",
    text: "Jsi DJ, kapela, moderátor, kouzelník, tanečnice nebo jakkoliv bavíš hosty",
    icon: Gastro,
    color: "tertiary",
    bgColor: "primaryTertiary",
    index: 3,
    value: "entertainment",
  },
};

export const listingTypeArray: ListingTypeData[] = [
  listingCardsData.gastro,
  listingCardsData.place,
  listingCardsData.entertainment,
];

export default function ServiceTypeStep({}: Props) {
  const { listings, currentListingType } = useAppSelector(
    (state) => state.newListing
  );
  const dispatch = useAppDispatch();
  const { changeStepHandler } = useNewListingSteps();
  const [pickOne, setPickOne] = useState(false);

  function updateStateHandler(value: ListingType) {
    dispatch(newListing.actions.updateServiceType(value));
  }

  function returnToTypeshandler() {
    setPickOne(false);
  }

  function anotherStepHandler() {
    if (listings.length > 1) {
      dispatch(newListing.actions.changeCurrentService(null));
      setPickOne(true);
    } else if (listings.length === 1) {
      dispatch(newListing.actions.changeCurrentService(listings[0]));
      changeStepHandler("listingName");
    } else if (!listings.length) {
    }
  }

  function updateCurrentService(value: ListingType) {
    dispatch(newListing.actions.changeCurrentService(value));
  }

  function startFormularHandler() {
    if (currentListingType) {
      changeStepHandler("listingName");
    }
  }

  if (pickOne) {
    return (
      <AdminNewListingFormWrapper
        heading={"Jakou službu chceš nastavit jako první?"}
        subheading={"Druhou službu budeš mít možnost nastavit později"}
      >
        <>
          <div className="flex w-full justify-center gap-5 max-w-250">
            {listings.map((listing, i) => {
              const delay = i * 50;

              return (
                <ServiceTypeCard
                  isActive={currentListingType === listing}
                  key={listing}
                  value={listing}
                  onClick={updateCurrentService}
                  delayMs={delay.toString()}
                />
              );
            })}
          </div>
          <div className="flex gap-5">
            <div onClick={returnToTypeshandler}>
              <Button
                text="Zpět"
                bgColor="secondaryPrimaryTertiary"
                size="xl"
                rounding="full"
                textColor="white"
              />
            </div>
            <div onClick={startFormularHandler}>
              <Button
                text="Pokračovat"
                bgColor="secondaryPrimaryTertiary"
                size="xl"
                rounding="full"
                textColor="white"
              />
            </div>
          </div>
        </>
      </AdminNewListingFormWrapper>
    );
  }

  return (
    <AdminNewListingFormWrapper
      heading={"Jaké služby poskytuješ?"}
      subheading={"Vyber jednu nebo více kategorií kliknutím na ikonu"}
    >
      <>
        <div className="grid grid-cols-3 w-full justify-items-center gap-5 max-w-250">
          {listingTypeArray.map((listing, i) => {
            const delay = i * 50;

            return (
              <ServiceTypeCard
                isActive={listings.some((value) => value === listing.value)}
                key={listing.text}
                value={listing.value}
                onClick={updateStateHandler}
                delayMs={delay.toString()}
              />
            );
          })}
        </div>
        {listings.length > 0 && (
          <div onClick={anotherStepHandler}>
            <Button
              text="Pokračovat"
              bgColor="secondaryPrimaryTertiary"
              size="xl"
              rounding="full"
              textColor="white"
            />
          </div>
        )}
      </>
    </AdminNewListingFormWrapper>
  );
}
