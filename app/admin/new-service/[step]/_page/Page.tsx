"use client";

import React from "react";
import ServiceTypeStep from "../_components/steps/ServiceTypeStep/ServiceTypeStep";
import { useParams } from "next/navigation";
import PickFirstServiceStep from "../_components/steps/PickFirstServiceStep/PickFirstServiceStep";
import { NewListingStepsType } from "@/app/_redux/slices/newListingSlice";
import ServiceInitialDataStep from "../_components/steps/ServiceInitialDataStep/ServiceInitialDataStep";

export default function Page() {
  const { step }: { step: NewListingStepsType } = useParams();
  if (step === "udaje-dodavatele") {
    return <ServiceInitialDataStep />;
  } else if (step === "typ-dodavatele") {
    return <ServiceTypeStep />;
  } else if (step === "vybrat-prvni-typ-dodavatele") {
    return <PickFirstServiceStep />;
  }
}
