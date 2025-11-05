import { PayloadAction } from "@reduxjs/toolkit";
import { HeaderFilterType, ListingCategoryType } from "../headerFilterSlice";

export function changeListingCategoryAction(
  state: HeaderFilterType,
  action: PayloadAction<ListingCategoryType>
) {
  state.category = action.payload;
}
