import { PayloadAction } from "@reduxjs/toolkit";
import { NewListingSlice } from "../newListingSlice";

export function saveListingNameAction(
  state: NewListingSlice,
  action: PayloadAction<string>
) {
  state.listingData.listingName = action.payload;
  console.log("Saved listing name:", state.listingData.listingName);
}
