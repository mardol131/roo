import { PayloadAction } from "@reduxjs/toolkit";
import { NewListingLocation, NewListingSlice } from "../newListingSlice";

export function saveListingLocationAction(
  state: NewListingSlice,
  action: PayloadAction<NewListingLocation>
) {
  state.listingData.newListingLocation = action.payload;

  console.log("Saved company data:", state.listingData?.newListingLocation);
}
