import { PayloadAction } from "@reduxjs/toolkit";
import { ListingLocation, NewListingSlice } from "../newListingSlice";

export function saveLocation(
  state: NewListingSlice,
  action: PayloadAction<ListingLocation>
) {
  state.listingData.location = action.payload;

  console.log("Saved listing location:", state.listingData?.location);
}
