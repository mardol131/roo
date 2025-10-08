"use client";

import { useAppSelector } from "@/app/_redux/hooks";
import React from "react";

import ServiceNameStep from "../_components/steps/ServiceNameStep";
import ServiceInitialDataStep from "../_components/steps/ServiceInitialDataStep";
import ServiceTypeStep from "../_components/steps/ServiceTypeStep";

export default function Page() {
  const { currentStep } = useAppSelector((state) => state.newListing);
  if (currentStep === "companyData") {
    return <ServiceInitialDataStep />;
  } else if (currentStep === "serviceType") {
    return <ServiceTypeStep />;
  } else if (currentStep === "serviceName") {
    return <ServiceNameStep />;
  }
}
