import { ServiceType } from "@/app/_types/business/services";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type NewListingStepsType =
  | "companyData"
  | "serviceType"
  | "serviceName"
  | "serviceLocation";

export const NewListingStepsArray: NewListingStepsType[] = [
  "companyData",
  "serviceType",
  "serviceName",
  "serviceLocation",
];

export type NewListingSlice = {
  currentStep: NewListingStepsType;
  services: ServiceType[];
  currentService: ServiceType | null;
  step: number;
  data: any;
};

const initialState: NewListingSlice = {
  currentStep: "companyData",
  services: [],
  currentService: null,
  step: 0,
  data: {
    1: {},
  },
};

export function changeStepAction(
  state: NewListingSlice,
  action: PayloadAction<NewListingStepsType>
) {
  state.currentStep = action.payload;
}

export function updateServiceTypesAction(
  state: NewListingSlice,
  action: PayloadAction<ServiceType>
) {
  const serviceIndex = state.services.findIndex(
    (service) => service === action.payload
  );

  const serviceArray = state.services;

  if (serviceIndex === -1) {
    state.services = [...state.services, action.payload];
  } else {
    serviceArray.splice(serviceIndex, 1);
    state.services = [...serviceArray];
  }
}

export function changeCurrentServiceAction(
  state: NewListingSlice,
  action: PayloadAction<ServiceType | null>
) {
  state.currentService = action.payload;
}

export const newListing = createSlice({
  name: "initialFilter",
  initialState,
  reducers: {
    changeStep: changeStepAction,
    updateServiceType: updateServiceTypesAction,
    changeCurrentService: changeCurrentServiceAction,
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      if (state.step > 0) state.step -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeStep } = newListing.actions;

export default newListing.reducer;
