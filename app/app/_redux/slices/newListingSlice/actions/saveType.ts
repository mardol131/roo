import { PayloadAction } from "@reduxjs/toolkit";
import { NewListingSlice } from "../newListingSlice";
import { ListingType } from "@/app/_types/business/services";

export function saveType(
  state: NewListingSlice,
  action: PayloadAction<ListingType | undefined>
) {
  state.listingData.type = action.payload;
  console.log("Saved listing type:", state.listingData.type);
}
