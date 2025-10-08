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
import { ServiceType, serviceTypeArray } from "@/app/_types/business/services";
import AdminFormWrapper from "@/app/admin/_components/wrappers/AdminFormWrapper";
import AdminWrapper from "@/app/admin/_components/wrappers/AdminWrapper";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { ServiceTypeCard } from "../ServiceTypeCard";
import { useNewListingSteps } from "../../_hooks/useNewListingSteps";

type Props = {};

export default function ServiceTypeStep({}: Props) {
  const {
    currentStep: step,
    services,
    currentService,
  } = useAppSelector((state) => state.newListing);
  const dispatch = useAppDispatch();
  const { changeStepHandler } = useNewListingSteps();
  const [pickOne, setPickOne] = useState(false);

  function updateStateHandler(value: ServiceType) {
    dispatch(newListing.actions.updateServiceType(value));
  }

  function returnToTypeshandler() {
    setPickOne(false);
  }

  function anotherStepHandler() {
    if (services.length > 1) {
      dispatch(newListing.actions.changeCurrentService(null));
      setPickOne(true);
    } else if (services.length === 1) {
      dispatch(newListing.actions.changeCurrentService(services[0]));
      changeStepHandler("serviceName");
    } else if (!services.length) {
      console.log("Vyberte službu");
    }
  }

  function updateCurrentService(value: ServiceType) {
    dispatch(newListing.actions.changeCurrentService(value));
  }

  function startFormularHandler() {
    if (currentService) {
      changeStepHandler("serviceName");
    }
  }

  function previousStepHandler() {
    changeStepHandler("serviceType");
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
              {services.map((service) => {
                return (
                  <ServiceTypeCard
                    isActive={currentService === service}
                    key={service}
                    value={service}
                    onClick={updateCurrentService}
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
                  text="Začít s vyplňováním"
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
            {serviceTypeArray.map((service) => {
              return (
                <ServiceTypeCard
                  isActive={services.some((value) => value === service)}
                  key={service}
                  value={service}
                  onClick={updateStateHandler}
                />
              );
            })}
          </div>
          {services.length > 0 && (
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
