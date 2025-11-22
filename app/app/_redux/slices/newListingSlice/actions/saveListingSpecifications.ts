import { PayloadAction } from "@reduxjs/toolkit";
import { Category, NewListingSlice } from "../newListingSlice";
import { ListingType } from "@/app/_types/business/services";

export function saveListingSpecificationsAction(
  state: NewListingSlice,
  action: PayloadAction<Category[]>
) {
  state.listingData.listingSpecification = action.payload;
  console.log(
    "Saved listing specifications:",
    state.listingData.listingSpecification
  );
}
