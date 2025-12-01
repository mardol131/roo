"use client";

import Button from "@/app/_components/atoms/Button";

import Text from "@/app/_components/atoms/Text";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import { newListing } from "@/app/_redux/slices/newListingSlice/newListingSlice";
import { useTranslations } from "next-intl";
import { useCallback } from "react";
import { useNewListingSteps } from "../../_hooks/useNewListingSteps";

type Props = {};

export default function NewListingSummary({}: Props) {
  const { changeStepHandler } = useNewListingSteps();
  const state = useAppSelector((state) => state.newListing);
  const t = useTranslations("admin.company.newListing.steps.summary");
  const dispatch = useAppDispatch();

  const startNewlistingHandler = useCallback(
    (listingType: "gastro" | "place" | "entertainment") => {
      dispatch(
        newListing.actions.restartFromListing({
          listtingType: listingType,
          listingsToFill: state.listingTypesToFill.filter(
            (type) => type !== listingType
          ),
        })
      );
    },
    [changeStepHandler, dispatch]
  );

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="relative overflow-hidden bg-white shadow-xl animate-popup rounded-4xl z-10 max-w-200 w-full flex flex-col items-center gap-10">
        <div className="z-10  w-full p-10 backdrop flex flex-col items-center text-center gap-8">
          <Text
            tag="h2"
            size="headingLg"
            text={t("title")}
            color="black"
            fontWeight="semibold"
          />
          <Text
            tag="p"
            text={t("congratulations")}
            className="text-center"
            size="bodyXl"
            fontWeight="semibold"
          />

          <div className="flex items-center gap-2">
            {state.listingTypesToFill.includes("gastro") && (
              <Button
                onClick={() => {
                  startNewlistingHandler("gastro");
                }}
                text={t("buttons.start_gastro")}
                size="xl"
                bgColor="secondaryPrimary"
                textColor="white"
                rounding="full"
              />
            )}
            {state.listingTypesToFill.includes("place") && (
              <Button
                onClick={() => {
                  startNewlistingHandler("place");
                }}
                text={t("buttons.start_place")}
                size="xl"
                bgColor="secondaryPrimary"
                textColor="white"
                rounding="full"
              />
            )}
            {state.listingTypesToFill.includes("entertainment") && (
              <Button
                onClick={() => {
                  startNewlistingHandler("entertainment");
                }}
                text={t("buttons.start_entertainment")}
                size="xl"
                bgColor="secondaryPrimary"
                textColor="white"
                rounding="full"
              />
            )}
          </div>
          <Text
            tag="p"
            text={t("go_to_admin")}
            className="text-center"
            size="bodyXl"
            fontWeight="semibold"
          />
          <div className="flex gap-2">
            <Button
              onClick={() => {
                changeStepHandler("listingType");
              }}
              text={t("buttons.to_admin")}
              size="xl"
              bgColor="primaryTertiary"
              textColor="white"
              rounding="full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
