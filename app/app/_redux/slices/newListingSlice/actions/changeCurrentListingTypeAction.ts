import { PayloadAction } from "@reduxjs/toolkit";
import { NewListingSlice } from "../newListingSlice";
import { ListingType } from "@/app/_types/business/services";

export function changeCurrentListingTypeAction(
  state: NewListingSlice,
  action: PayloadAction<ListingType | null>
) {
  state.currentListingType = action.payload;
  console.log("Current listing type changed to:", state.currentListingType);
}
