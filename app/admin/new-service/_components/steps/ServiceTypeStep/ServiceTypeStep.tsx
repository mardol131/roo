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
import { ServiceTypeCard } from "../../ServiceTypeCard";
import { useRouter } from "next/router";
import { useNewListingSteps } from "../../../_hooks/useNewListingSteps";

type Props = {};

export default function ServiceTypeStep({}: Props) {
  const { currentStep: step, services } = useAppSelector(
    (state) => state.newListing
  );
  const dispatch = useAppDispatch();
  const { newListingNextStep } = useNewListingSteps();

  function updateStateHandler(value: ServiceType) {
    dispatch(newListing.actions.updateServiceType(value));
  }

  async function anotherStepHandler() {
    if (services.length > 1) {
      dispatch(newListing.actions.changeCurrentService(null));
      newListingNextStep("vybrat-prvni-typ-dodavatele");
    } else if (services.length === 1) {
      dispatch(newListing.actions.changeCurrentService(services[0]));
      newListingNextStep("jmeno-dodavatele");
    } else if (!services.length) {
      console.log("Vyberte službu");
    }
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
