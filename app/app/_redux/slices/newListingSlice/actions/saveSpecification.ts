import { PayloadAction } from "@reduxjs/toolkit";
import { Category, NewListingSlice } from "../newListingSlice";
import { ListingType } from "@/app/_types/business/services";

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
