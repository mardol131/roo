import { ListingType } from "@/app/_types/business/services";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { changeStepAction } from "./actions/changeStepAction";
import { updateServiceTypesAction } from "./actions/updateServiceTypesaction";
import { changeCurrentServiceAction } from "./actions/changeCurrentServiceAction";

export type NewListingStepsType =
  | "companyData"
  | "listingType"
  | "listingName"
  | "listingSpecification"
  | "listingLocation";

export const NewListingStepsArray: NewListingStepsType[] = [
  "companyData",
  "listingType",
  "listingName",
  "listingSpecification",
  "listingLocation",
];

export type NewListingSlice = {
  step: NewListingStepsType;
  listings: ListingType[];
  currentListingType: ListingType | null;
  companyData:
    | {
        name: string;
        ico: string;
        dic: string;
        street: string;
        city: string;
        cityCode: string;
        country: string;
      }
    | undefined;
  contactPerson:
    | {
        firstName: string;
        lastname: string;
        countryCode: string;
        phone: string;
        email: string;
      }
    | undefined;
  listingData:
    | {
        listingName: string;
        type: string[];
        adressSameAsCompany: boolean;
        street: string;
        city: string;
        cityCode: string;
        country: string;
      }
    | undefined;
};

const initialState: NewListingSlice = {
  step: "companyData",
  listings: [],
  currentListingType: null,
  companyData: undefined,
  contactPerson: undefined,
  listingData: undefined,
};

export const newListing = createSlice({
  name: "initialFilter",
  initialState,
  reducers: {
    changeStep: changeStepAction,
    updateServiceType: updateServiceTypesAction,
    changeCurrentService: changeCurrentServiceAction,
  },
});

// Action creators are generated for each case reducer function
export const { changeStep } = newListing.actions;

export default newListing.reducer;
