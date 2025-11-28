import { ListingType } from "@/app/_types/business/services";
import { createSlice } from "@reduxjs/toolkit";
import { changeStepAction } from "./actions/changeStepAction";
import { updateListingTypesToFill } from "./actions/updateListingTypesToFill";
import { saveCompanyDataAction } from "./actions/saveCompanyData";
import { saveLocation } from "./actions/saveLocation";
import { saveName } from "./actions/saveName";
import { saveType } from "./actions/saveType";
import { saveSpecification } from "./actions/saveSpecification";
import { restartFull } from "./actions/restartFull";
import { restartFromListing } from "./actions/restartFromListing";

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

export type MultiLocationArea = {
  country: Category[];
  regions: Category[];
  districts: Category[];
  cities: Category[];
};

export type ListingLocation = {
  adressSameAsCompany: boolean;
  street: string | undefined;
  city: string | undefined;
  cityCode: string | undefined;
  country: string | undefined;
  multipleLocations: boolean;
  serviceAreas: MultiLocationArea | undefined;
};

export type Category = { label: string; slug: string; id: string };

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

export const newListingInitialData: NewListingSlice = {
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
    type: undefined,
    name: "",
    specifications: [],
    location: {
      adressSameAsCompany: false,
      street: undefined,
      city: undefined,
      cityCode: undefined,
      country: undefined,
      multipleLocations: false,
      serviceAreas: undefined,
    },
  },
};

export const newListing = createSlice({
  name: "initialFilter",
  initialState: newListingInitialData,
  reducers: {
    changeStep: changeStepAction,
    updateTypesToFill: updateListingTypesToFill,
    saveCompanyData: saveCompanyDataAction,
    saveLocation: saveLocation,
    saveName: saveName,
    saveType: saveType,
    saveSpecifications: saveSpecification,
    restartFull: restartFull,
    restartFromListing: restartFromListing,
  },
});

// Action creators are generated for each case reducer function
export const { changeStep } = newListing.actions;

export default newListing.reducer;
