import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { incrementAction } from "./actions/incrementAction";
import { decrementAction } from "./actions/decrementAction";
import { changeListingCategoryAction } from "./actions/changeListingCategoryAction";
import { changeOnUserInputAction } from "./actions/changeOnUserInputAction";
import { changeHeaderSettingsAction } from "./actions/changeHeaderSettingsAction";

export type SettingsTypes =
  | "listingCategory"
  | "eventType"
  | "location"
  | "time"
  | "people"
  | null;

export const SettingsTypesArray: SettingsTypes[] = [
  "eventType",
  "location",
  "time",
  "people",
];

export type ListingCategoryType = "gastro" | "place" | "entertainment" | null;

export type HeaderFilterType = {
  settingsType: SettingsTypes;
  guests: {
    adult: number;
    minor: number;
    ztp: number;
    pets: number;
  };
  category: ListingCategoryType;
};

const initialState: HeaderFilterType = {
  settingsType: null,
  guests: {
    adult: 0,
    minor: 0,
    ztp: 0,
    pets: 0,
  },
  category: null,
};
export const guestTypeArray = Object.keys(initialState.guests) as GuestType[];
export type GuestType = keyof typeof initialState.guests;

export const headerFilterSlice = createSlice({
  name: "headerFilter",
  initialState,
  reducers: {
    increment: incrementAction,
    decrement: decrementAction,
    changeOnUserInput: changeOnUserInputAction,
    changeListingCategory: changeListingCategoryAction,
    changeSettings: changeHeaderSettingsAction,
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, changeOnUserInput } =
  headerFilterSlice.actions;

export default headerFilterSlice.reducer;
