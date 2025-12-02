import { PayloadAction } from "@reduxjs/toolkit";
import { NewListingSlice } from "../newListingSlice";
import { ListingType } from "@/app/_types/business/services";

export function updateListingTypesToFill(
  state: NewListingSlice,
  action: PayloadAction<ListingType>
) {
  console.log("Current listing types before update:", state.listingTypesToFill);
  const hasService = state.listingTypesToFill.some(
    (service) => service === action.payload
  );

  const serviceArray = state.listingTypesToFill;

  if (!hasService) {
    state.listingTypesToFill = [...state.listingTypesToFill, action.payload];
  } else {
    state.listingTypesToFill = serviceArray.filter(
      (service) => service !== action.payload
    );
  }

  console.log("Updated listing types:", state.listingTypesToFill);
}
