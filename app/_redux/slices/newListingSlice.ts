import { ServiceType } from "@/app/_types/business/services";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type CurrentStepType =
  | "pickService"
  | "pickOneService"
  | "serviceName"
  | "serviceType"
  | "serviceLocation";

export type NewListingSlice = {
  currentStep: CurrentStepType;
  services: ServiceType[];
  currentService: ServiceType | null;
};

const initialState: NewListingSlice = {
  currentStep: "pickService",
  services: [],
  currentService: null,
};

export function changeStepAction(
  state: NewListingSlice,
  action: PayloadAction<CurrentStepType>
) {
  state.currentStep = action.payload;
}

export function addServiceAction(
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
  action: PayloadAction<ServiceType>
) {
  state.currentService = action.payload;
}

export const newListing = createSlice({
  name: "initialFilter",
  initialState,
  reducers: {
    changeStep: changeStepAction,
    addService: addServiceAction,
    changeCurrentService: changeCurrentServiceAction,
  },
});

// Action creators are generated for each case reducer function
export const { changeStep } = newListing.actions;

export default newListing.reducer;
