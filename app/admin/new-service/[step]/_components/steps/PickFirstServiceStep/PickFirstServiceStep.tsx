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
import { ServiceTypeCard } from "../../ServiceTypeCard";
import { useNewListingSteps } from "../../../_hooks/useNewListingSteps";

type Props = {};

export default function PickFirstServiceStep({}: Props) {
  const { services, currentService } = useAppSelector(
    (state) => state.newListing
  );
  const dispatch = useAppDispatch();
  const { newListingNextStep } = useNewListingSteps();

  function updateCurrentService(value: ServiceType) {
    dispatch(newListing.actions.changeCurrentService(value));
  }

  function startFormularHandler() {
    if (currentService) {
      newListingNextStep("jmeno-dodavatele");
    }
  }

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
            <Button
              text="Zpět"
              bgColor="secondaryPrimaryTertiary"
              size="xl"
              rounding="full"
              textColor="white"
              link="typ-dodavatele"
            />
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
