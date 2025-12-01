import { PayloadAction } from "@reduxjs/toolkit";
import { Category, NewListingSlice } from "../newListingSlice";

export function saveSpecification(
  state: NewListingSlice,
  action: PayloadAction<Category[]>
) {
  state.listingData.specifications = action.payload;
  console.log(
    "Saved listing specifications:",
    state.listingData.specifications
  );
}
