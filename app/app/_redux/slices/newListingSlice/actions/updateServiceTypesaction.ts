import { PayloadAction } from "@reduxjs/toolkit";
import { NewListingSlice } from "../newListingSlice";
import { ListingType } from "@/app/_types/business/services";

export function updateServiceTypesAction(
  state: NewListingSlice,
  action: PayloadAction<ListingType>
) {
  const serviceIndex = state.listings.findIndex(
    (service) => service === action.payload
  );

  const serviceArray = state.listings;

  if (serviceIndex === -1) {
    state.listings = [...state.listings, action.payload];
  } else {
    serviceArray.splice(serviceIndex, 1);
    state.listings = [...serviceArray];
  }
}
