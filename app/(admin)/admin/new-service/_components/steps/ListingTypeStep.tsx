"use client";

import Button from "@/app/_global/atoms/Button";

import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import { newListing } from "@/app/_redux/slices/newListingSlice";
import { ListingType, listingTypeArray } from "@/app/_types/business/services";
import AdminFormWrapper from "@/app/(admin)/admin/_components/wrappers/AdminFormWrapper";
import AdminWrapper from "@/app/(admin)/admin/_components/wrappers/AdminWrapper";
import React, { useState } from "react";
import { ServiceTypeCard } from "../ServiceTypeCard";
import { useNewListingSteps } from "../../_hooks/useNewListingSteps";

type Props = {};

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
      console.log("Vyberte službu");
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
      <AdminWrapper>
        <AdminFormWrapper
          heading={"Jakou službu chceš nastavit jako první?"}
          subheading={"Druhou službu budete mít možnost nadtavit později"}
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
        </AdminFormWrapper>
      </AdminWrapper>
    );
  }

  return (
    <AdminWrapper>
      <AdminFormWrapper
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
      </AdminFormWrapper>
    </AdminWrapper>
  );
}
