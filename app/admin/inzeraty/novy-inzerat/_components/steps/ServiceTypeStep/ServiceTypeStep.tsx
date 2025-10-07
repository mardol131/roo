"use client";

import {
  colorsAndGradients,
  ColorsAndGradientsType,
  textColor,
  TextColorType,
} from "@/app/_design/colors";
import Button from "@/app/_global/atoms/Button";
import Text from "@/app/_global/atoms/Text";
import Gastro from "@/app/_icons/Gastro";
import KidParty from "@/app/_icons/KidParty";
import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import { newListing } from "@/app/_redux/slices/newListingSlice";
import { ServiceType } from "@/app/_types/business/services";
import AdminFormWrapper from "@/app/admin/_components/wrappers/AdminFormWrapper";
import AdminWrapper from "@/app/admin/_components/wrappers/AdminWrapper";
import React, { useState } from "react";

type Props = {};

export type ServiceTypeCardProps = {
  heading: string;
  text: string;
  onClick: (value: ServiceType) => void;
  value: ServiceType;
  state: ServiceType[];
  color: TextColorType;
  bgColor: ColorsAndGradientsType;
};

export function ServiceTypeCard({
  heading,
  text,
  onClick,
  value,
  state,
  color: globalColor,
  bgColor: bgColorGlobal,
}: ServiceTypeCardProps) {
  const color = globalColor && textColor[globalColor];
  const bgColor = bgColorGlobal && colorsAndGradients[bgColorGlobal];

  const isInState = state.some((state) => state === value);

  if (isInState) {
    return (
      <div
        onClick={() => {
          onClick(value);
        }}
        className={`${bgColor} cursor-pointer px-8 py-12 rounded-large text-center text-white flex flex-col gap-5 items-center shadow-lg`}
      >
        <div className="w-20 h-20">
          <Gastro className="" fill="currentColor" />
        </div>
        <Text text={heading} level="h3" className="font-semibold" />
        <Text text={text} level="paragraph2" className="text-white" />
      </div>
    );
  }

  return (
    <div
      onClick={() => {
        onClick(value);
      }}
      className={`${color} cursor-pointer bg-white px-8 py-12 rounded-large text-center flex flex-col gap-5 items-center shadow-lg`}
    >
      <div className="w-20 h-20">
        <Gastro className="" fill="currentColor" />
      </div>
      <Text text={heading} level="h3" className="font-semibold" />
      <Text text={text} level="paragraph2" className="text-black" />
    </div>
  );
}

export default function ServiceTypeStep({}: Props) {
  const { currentStep: step, services } = useAppSelector(
    (state) => state.newListing
  );
  const dispatch = useAppDispatch();

  function updateStateHandler(value: ServiceType) {
    dispatch(newListing.actions.addService(value));
  }

  function anotherStepHandler() {
    if (services.length > 1) {
      dispatch(newListing.actions.changeStep("pickOneService"));
    } else if (services.length === 1) {
      dispatch(newListing.actions.changeCurrentService(services[0]));
      dispatch(newListing.actions.changeStep("serviceName"));
    } else if (!services.length) {
      console.log("Vyberte službu");
    }
  }

  function startFormularHandler(value: ServiceType) {
    dispatch(newListing.actions.changeCurrentService(value));
    dispatch(newListing.actions.changeStep("serviceName"));
  }

  return (
    <AdminWrapper>
      <AdminFormWrapper
        heading={
          step === "pickService"
            ? "Jaké služby poskytuješ?"
            : "Jakou službu chceš nastavit jako první?"
        }
        subheading={
          step === "pickService"
            ? "Vyber jednu nebo více kategorií kliknutím na ikonu"
            : "Druhou službu budete mít možnost nadtavit později"
        }
      >
        {step === "pickService" && (
          <>
            <div className="grid grid-cols-3 w-full justify-items-center gap-5 max-w-250">
              <ServiceTypeCard
                heading="Gastro"
                text="Děláš catering, máš foodtruck nebo bar na eventy"
                value="gastro"
                state={services}
                color="secondary"
                onClick={updateStateHandler}
                bgColor="secondaryPrimary"
              />
              <ServiceTypeCard
                heading="Gastro"
                text="Děláš catering, máš foodtruck nebo bar na eventy"
                value="entertainment"
                state={services}
                color="primary"
                onClick={updateStateHandler}
                bgColor="primaryTertiary"
              />
              <ServiceTypeCard
                heading="Gastro"
                text="Děláš catering, máš foodtruck nebo bar na eventy"
                value="place"
                state={services}
                color="tertiary"
                onClick={updateStateHandler}
                bgColor="tertiarySecondary"
              />
            </div>
            <div onClick={anotherStepHandler}>
              <Button
                text="Pokračovat"
                bgColor="secondaryPrimaryTertiary"
                size="xl"
                rounding="full"
                textColor="white"
              />
            </div>
          </>
        )}
        {step === "pickOneService" && (
          <>
            <div className="flex w-full justify-items-center gap-5 max-w-250">
              {services.some((value) => value === "gastro") && (
                <ServiceTypeCard
                  heading="Gastro"
                  text="Děláš catering, máš foodtruck nebo bar na eventy"
                  value="gastro"
                  state={services}
                  color="secondary"
                  onClick={startFormularHandler}
                  bgColor="secondaryPrimary"
                />
              )}
              {services.some((value) => value === "entertainment") && (
                <ServiceTypeCard
                  heading="Gastro"
                  text="Děláš catering, máš foodtruck nebo bar na eventy"
                  value="entertainment"
                  state={services}
                  color="primary"
                  onClick={startFormularHandler}
                  bgColor="primaryTertiary"
                />
              )}
              {services.some((value) => value === "place") && (
                <ServiceTypeCard
                  heading="Gastro"
                  text="Děláš catering, máš foodtruck nebo bar na eventy"
                  value="place"
                  state={services}
                  color="tertiary"
                  onClick={startFormularHandler}
                  bgColor="tertiarySecondary"
                />
              )}
            </div>
            <div className="flex gap-5">
              <div onClick={anotherStepHandler}>
                <Button
                  text="Zpět"
                  bgColor="secondaryPrimaryTertiary"
                  size="xl"
                  rounding="full"
                  textColor="white"
                />
              </div>
            </div>
          </>
        )}
      </AdminFormWrapper>
    </AdminWrapper>
  );
}
