import { ListingType } from "@/app/_types/business/services";
import { createSlice } from "@reduxjs/toolkit";
import { changeStepAction } from "./actions/changeStepAction";
import { updateListingTypesToFill } from "./actions/updateListingTypesToFill";
import { saveCompanyDataAction } from "./actions/saveCompanyData";
import { saveLocation } from "./actions/saveLocation";
import { saveName } from "./actions/saveName";
import { saveType } from "./actions/saveType";
import { saveSpecification } from "./actions/saveSpecification";

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

export type ListingLocation = {
  adressSameAsCompany: boolean;
  street: string | undefined;
  city: string | undefined;
  cityCode: string | undefined;
  country: string | undefined;
};

export type Category = { label: string; value: string; id: string };

export type Listing = {
  name: string;
  type: ListingType | undefined;
  specifications: Category[];
  location: ListingLocation;
};

export type NewListingSlice = {
  step: NewListingStepsType;
  companyData: NewCompanyData;
  listingTypesToFill: ListingType[];
  listingData: Listing;
};

const initialState: NewListingSlice = {
  step: "companyData",
  listingTypesToFill: [],
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
    name: "",
    type: undefined,
    specifications: [],
    location: {
      adressSameAsCompany: false,
      street: undefined,
      city: undefined,
      cityCode: undefined,
      country: undefined,
    },
  },
};

export const newListing = createSlice({
  name: "initialFilter",
  initialState,
  reducers: {
    changeStep: changeStepAction,
    updateTypesToFill: updateListingTypesToFill,
    saveCompanyData: saveCompanyDataAction,
    saveLocation: saveLocation,
    saveName: saveName,
    saveType: saveType,
    saveSpecifications: saveSpecification,
  },
});

// Action creators are generated for each case reducer function
export const { changeStep } = newListing.actions;

export default newListing.reducer;
