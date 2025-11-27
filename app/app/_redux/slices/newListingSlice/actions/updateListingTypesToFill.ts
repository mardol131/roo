import { PayloadAction } from "@reduxjs/toolkit";
import { NewListingSlice } from "../newListingSlice";
import { ListingType } from "@/app/_types/business/services";

export function updateListingTypesToFill(
  state: NewListingSlice,
  action: PayloadAction<ListingType>
) {
  const serviceIndex = state.listingTypesToFill.findIndex(
    (service) => service === action.payload
  );

  const serviceArray = state.listingTypesToFill;

  if (serviceIndex === -1) {
    state.listingTypesToFill = [...state.listingTypesToFill, action.payload];
  } else {
    serviceArray.splice(serviceIndex, 1);
    state.listingTypesToFill = [...serviceArray];
  }

  console.log("Updated listing types:", state.listingTypesToFill);
}
