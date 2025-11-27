import { PayloadAction } from "@reduxjs/toolkit";
import { NewListingSlice } from "../newListingSlice";

export function saveName(
  state: NewListingSlice,
  action: PayloadAction<string>
) {
  state.listingData.name = action.payload;
  console.log("Saved listing name:", state.listingData.name);
}
