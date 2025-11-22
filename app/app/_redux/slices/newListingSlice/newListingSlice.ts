import { ListingType } from "@/app/_types/business/services";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { changeStepAction } from "./actions/changeStepAction";
import { updateListingTypes } from "./actions/updateListingTypesAction";
import { saveCompanyDataAction } from "./actions/saveCompanyData";
import { changeCurrentListingTypeAction } from "./actions/changeCurrentListingTypeAction";
import { saveListingLocationAction } from "./actions/saveListingLocation";
import { saveListingNameAction } from "./actions/saveListingName";
import { saveListingTypeAction } from "./actions/saveListingType";
import { saveListingSpecificationsAction } from "./actions/saveListingSpecifications";

export type NewListingStepsType =
  | "companyData"
  | "listingType"
  | "listingName"
  | "listingSpecification"
  | "listingLocation"
  | "summary";

export const NewListingStepsArray: NewListingStepsType[] = [
  "companyData",
  "listingType",
  "listingName",
  "listingSpecification",
  "listingLocation",
  "summary",
];

export type NewCompanyData = {
  companyName: string;
  ico: string;
  dic?: string;
  street: string;
  city: string;
  cityCode: string;
  country: string;
  contactPerson: {
    firstName: string;
    lastName: string;
    countryCode: string;
    phone: string;
    email: string;
  };
  legal: {
    gdpr: boolean;
    marketing: boolean;
  };
};

export type NewListingLocation = {
  adressSameAsCompany: boolean;
  street: string;
  city: string;
  cityCode: string;
  country: string;
};

export type Category = { label: string; value: string; id: string };

export type NewListingData = {
  listingName: string;
  type: ListingType;
  listingSpecification: Category[];
  newListingLocation: NewListingLocation;
};

export type NewListingSlice = {
  step: NewListingStepsType;
  companyData: NewCompanyData;
  listingTypes: ListingType[];
  currentListingType: ListingType | null;
  listingData: NewListingData;
};

const initialState: NewListingSlice = {
  step: "companyData",
  listingTypes: [],
  currentListingType: null,
  companyData: {
    companyName: "",
    ico: "",
    dic: "",
    street: "",
    city: "",
    cityCode: "",
    country: "",
    contactPerson: {
      firstName: "",
      lastName: "",
      countryCode: "",
      phone: "",
      email: "",
    },
    legal: {
      gdpr: false,
      marketing: false,
    },
  },
  listingData: {
    listingName: "",
    type: "gastro",
    listingSpecification: [],
    newListingLocation: {
      adressSameAsCompany: false,
      street: "",
      city: "",
      cityCode: "",
      country: "",
    },
  },
};

export const newListing = createSlice({
  name: "initialFilter",
  initialState,
  reducers: {
    changeStep: changeStepAction,
    updateListingTypes: updateListingTypes,
    changeCurrentListingType: changeCurrentListingTypeAction,
    saveCompanyData: saveCompanyDataAction,
    saveListingLocation: saveListingLocationAction,
    saveListingName: saveListingNameAction,
    saveListingType: saveListingTypeAction,
    saveListingSpecifications: saveListingSpecificationsAction,
  },
});

// Action creators are generated for each case reducer function
export const { changeStep } = newListing.actions;

export default newListing.reducer;
