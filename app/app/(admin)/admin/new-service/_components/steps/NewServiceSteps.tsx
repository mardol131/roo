"use client";

import { useAppSelector } from "@/app/_redux/hooks";
import React from "react";

import ServiceNameStep from "./name/ListingNameStep";
import ServiceInitialDataStep from "./companyData/CompanyDataStep";
import ServiceTypeStep from "./ListingTypeStep";
import ServiceSpecificationStep from "./ListingSpecificationStep";
import ListingLocationStep from "./location/ListingLocationStep";
import NewListingSummary from "./NewListingSummary";

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
