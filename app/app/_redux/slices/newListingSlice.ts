import { ListingType } from "@/app/_types/business/services";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
  data: any;
};

const initialState: NewListingSlice = {
  step: "companyData",
  listings: [],
  currentListingType: null,
  data: {
    1: {},
  },
};

export function changeStepAction(
  state: NewListingSlice,
  action: PayloadAction<NewListingStepsType>
) {
  state.step = action.payload;
}

export function updateServiceTypesAction(
  state: NewListingSlice,
  action: PayloadAction<ListingType>
) {
  const serviceIndex = state.listings.findIndex(
    (service) => service === action.payload
  );

  const serviceArray = state.listings;

  if (serviceIndex === -1) {
    state.listings = [...state.listings, action.payload];
  } else {
    serviceArray.splice(serviceIndex, 1);
    state.listings = [...serviceArray];
  }
}

export function changeCurrentServiceAction(
  state: NewListingSlice,
  action: PayloadAction<ListingType | null>
) {
  state.currentListingType = action.payload;
}

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
