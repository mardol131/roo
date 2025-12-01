import { ListingType } from "@/app/_types/business/services";
import { PayloadAction } from "@reduxjs/toolkit";
import { NewListingSlice } from "../newListingSlice";

export function restartFromListing(
  state: NewListingSlice,
  action: PayloadAction<{
    listtingType: ListingType;
    listingsToFill: ListingType[];
  }>
) {
  state.listingTypesToFill = action.payload.listingsToFill;
  state.step = "listingName";
  state.listingData = {
    type: action.payload.listtingType,
    name: "",
    specifications: [],
    location: {
      adressSameAsCompany: false,
      street: undefined,
      city: undefined,
      cityCode: undefined,
      country: undefined,
      multipleLocations: false,
      serviceAreas: undefined,
    },
  };
}
