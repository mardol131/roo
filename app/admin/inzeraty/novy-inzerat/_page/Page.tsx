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
import ServiceTypeStep from "../_components/steps/ServiceTypeStep/ServiceTypeStep";

export default function Page() {
  const { currentStep: step } = useAppSelector((state) => state.newListing);

  if (step === "pickService" || step === "pickOneService") {
    return <ServiceTypeStep />;
  }
}
