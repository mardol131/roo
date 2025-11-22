"use client";

import { useAppSelector } from "@/app/_redux/hooks";
import React from "react";
import NewCompanyDataStep from "./steps/companyData/NewCompanyDataStep";
import NewListingTypeStep from "./steps/listingType/NewListingTypeStep";
import NewListingNameStep from "./steps/name/NewListingNameStep";
import NewListingSpecificationStep from "./steps/NewListingSpecificationStep";
import NewListingLocationStep from "./steps/location/NewListingLocationStep";
import NewListingSummary from "./steps/NewListingSummary";

export default function NewListingSteps() {
  const { step } = useAppSelector((state) => state.newListing);
  if (step === "companyData") {
    return <NewCompanyDataStep />;
  } else if (step === "listingType") {
    return <NewListingTypeStep />;
  } else if (step === "listingName") {
    return <NewListingNameStep />;
  } else if (step === "listingSpecification") {
    return <NewListingSpecificationStep />;
  } else if (step === "listingLocation") {
    return <NewListingLocationStep />;
  } else if (step === "summary") {
    return <NewListingSummary />;
  }
}
