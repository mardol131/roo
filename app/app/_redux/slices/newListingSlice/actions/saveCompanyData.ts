import { PayloadAction } from "@reduxjs/toolkit";
import { NewCompanyData, NewListingSlice } from "../newListingSlice";

export function saveCompanyDataAction(
  state: NewListingSlice,
  action: PayloadAction<NewCompanyData>
) {
  state.companyData = action.payload;

  console.log("Saved company data:", state.companyData);
}
