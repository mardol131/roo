import { PayloadAction } from "@reduxjs/toolkit";
import { NewListingSlice } from "../newListingSlice";
import { ListingType } from "@/app/_types/business/services";

export function updateListingTypes(
  state: NewListingSlice,
  action: PayloadAction<ListingType>
) {
  const serviceIndex = state.listingTypes.findIndex(
    (service) => service === action.payload
  );

  const serviceArray = state.listingTypes;

  if (serviceIndex === -1) {
    state.listingTypes = [...state.listingTypes, action.payload];
  } else {
    serviceArray.splice(serviceIndex, 1);
    state.listingTypes = [...serviceArray];
  }

  console.log("Updated listing types:", state.listingTypes);
}
