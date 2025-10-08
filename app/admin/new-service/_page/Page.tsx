"use client";

import React from "react";
import ServiceTypeStep from "../_components/steps/ServiceTypeStep/ServiceTypeStep";
import PickFirstServiceStep from "../_components/steps/PickFirstServiceStep/PickFirstServiceStep";
import ServiceInitialDataStep from "../_components/steps/ServiceInitialDataStep/ServiceInitialDataStep";
import { steps } from "../_components/steps/steps";
import { useAppSelector } from "@/app/_redux/hooks";

export default function Page() {
  const { step } = useAppSelector((state) => state.newListing);

  const StepComponent = steps[step];

  return <StepComponent />;
}
