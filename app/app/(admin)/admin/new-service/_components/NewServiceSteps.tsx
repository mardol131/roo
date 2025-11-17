"use client";

import { useAppSelector } from "@/app/_redux/hooks";
import React from "react";

import ServiceNameStep from "./steps/ListingNameStep";
import ServiceInitialDataStep from "./steps/CompanyDataStep";
import ServiceTypeStep from "./steps/ListingTypeStep";
import ServiceSpecificationStep from "./steps/ListingSpecificationStep";
import ListingLocationStep from "./steps/ListingLocationStep";
import NewListingSummary from "./steps/NewListingSummary";

export default function NewServiceSteps() {
  const { step } = useAppSelector((state) => state.newListing);
  if (step === "companyData") {
    return <ServiceInitialDataStep />;
  } else if (step === "listingType") {
    return <ServiceTypeStep />;
  } else if (step === "listingName") {
    return <ServiceNameStep />;
  } else if (step === "listingSpecification") {
    return <ServiceSpecificationStep />;
  } else if (step === "listingLocation") {
    return <ListingLocationStep />;
  } else if (step === "summary") {
    return <NewListingSummary />;
  }
}
