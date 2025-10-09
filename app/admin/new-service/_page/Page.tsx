"use client";

import { useAppSelector } from "@/app/_redux/hooks";
import React from "react";

import ServiceNameStep from "../_components/steps/ListingNameStep";
import ServiceInitialDataStep from "../_components/steps/CompanyDataStep";
import ServiceTypeStep from "../_components/steps/ListingTypeStep";
import ServiceSpecificationStep from "../_components/steps/ListingSpecificationStep";
import ListingLocationStep from "../_components/steps/ListingLocationStep";

export default function Page() {
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
  }
}
