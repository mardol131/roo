"use client";
import Button from "@/app/_components/atoms/Button";

import AdminNewListingFormWrapper from "@/app/(admin)/admin/new-listing/_components/wrappers/AdminNewListingFormWrapper";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import { newListing } from "@/app/_redux/slices/newListingSlice/newListingSlice";
import { ListingType, ListingTypeData } from "@/app/_types/business/services";

import Gastro from "@/app/_icons/Gastro";
import { useMemo, useState } from "react";
import { useNewListingSteps } from "../../../_hooks/useNewListingSteps";
import { ListingTypeCard } from "./ListingTypeCard";
import { useTranslations } from "next-intl";

type Props = {};

export default function NewListingTypeStep({}: Props) {
  const { listingTypesToFill, listingData } = useAppSelector(
    (state) => state.newListing
  );
  const dispatch = useAppDispatch();
  const { changeStepHandler } = useNewListingSteps();
  const [shouldPickOne, setShouldPickOne] = useState(false);

  const t = useTranslations("admin.company.newListing.steps.listingType");

  function updateListingTypesToFillArray(value: ListingType) {
    dispatch(newListing.actions.updateTypesToFill(value));
    dispatch(newListing.actions.saveType(undefined));
  }

  const listingCardsData = useMemo(() => {
    const data: ListingTypeData[] = [
      {
        icon: Gastro,
        color: "secondary",
        bgColor: "secondaryPrimary",
        index: 1,
        value: "gastro",
        heading: t("cards.gastro.title"),
        text: t("cards.gastro.description"),
      },
      {
        icon: Gastro,
        color: "primary",
        bgColor: "primary",
        index: 2,
        value: "place",
        heading: t("cards.place.title"),
        text: t("cards.place.description"),
      },
      {
        icon: Gastro,
        color: "tertiary",
        bgColor: "primaryTertiary",
        index: 3,
        value: "entertainment",
        heading: t("cards.entertainment.title"),
        text: t("cards.entertainment.description"),
      },
    ];

    return data;
  }, [t]);

  function returnToTypeshandler() {
    setShouldPickOne(false);
    dispatch(newListing.actions.saveType(undefined));
  }

  function anotherStepHandler() {
    if (listingData.type) {
      changeStepHandler("listingName");
      return dispatch(newListing.actions.updateTypesToFill(listingData.type));
    }

    if (listingTypesToFill.length === 1) {
      dispatch(newListing.actions.updateTypesToFill(listingTypesToFill[0]));
      updateListingType(listingTypesToFill[0]);
      return changeStepHandler("listingName");
    }

    if (listingTypesToFill.length > 1) {
      return setShouldPickOne(true);
    }
  }

  function updateListingType(value: ListingType) {
    dispatch(newListing.actions.saveType(value));
  }

  if (shouldPickOne) {
    return (
      <AdminNewListingFormWrapper
        heading={t("pickOne.title")}
        subheading={t("pickOne.subheading")}
      >
        <>
          <div className="flex max-md:flex-col w-full justify-center gap-5 max-w-250">
            {listingTypesToFill.map((listing, i) => {
              const delay = i * 50;

              const data = listingCardsData.find(
                (data) => data.value === listing
              );

              if (!data) return null;

              return (
                <ListingTypeCard
                  isActive={listingData.type === data.value}
                  key={data.value}
                  value={data.value}
                  onClick={(value) => {
                    updateListingType(value);
                  }}
                  delayMs={delay.toString()}
                  text={data.text}
                  heading={data.heading}
                  color={data.color}
                  bgColor={data.bgColor}
                />
              );
            })}
          </div>
          <div className="flex gap-5">
            <Button
              text={t("buttonBack")}
              bgColor="secondaryPrimaryTertiary"
              size="xl"
              rounding="full"
              textColor="white"
              onClick={returnToTypeshandler}
            />
            {listingData.type && (
              <Button
                text={t("button")}
                bgColor="secondaryPrimaryTertiary"
                size="xl"
                rounding="full"
                textColor="white"
                onClick={anotherStepHandler}
              />
            )}
          </div>
        </>
      </AdminNewListingFormWrapper>
    );
  }

  return (
    <AdminNewListingFormWrapper heading={t("title")} subheading={t("subtitle")}>
      <>
        <div className="grid max-md:flex max-md:flex-col grid-cols-3 w-full justify-items-center gap-5 max-w-250">
          {listingCardsData.map((listing, i) => {
            const delay = i * 50;

            return (
              <ListingTypeCard
                isActive={listingTypesToFill.some(
                  (value) => value === listing.value
                )}
                heading={listing.heading}
                text={listing.text}
                key={listing.value}
                value={listing.value}
                onClick={updateListingTypesToFillArray}
                delayMs={delay.toString()}
                color={listing.color}
                bgColor={listing.bgColor}
              />
            );
          })}
        </div>
        {listingTypesToFill.length > 0 && (
          <div onClick={anotherStepHandler}>
            <Button
              text={t("button")}
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
