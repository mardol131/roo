import { ServiceType } from "@/app/_types/business/services";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type NewListingStepsType =
  | "udaje-dodavatele"
  | "typ-dodavatele"
  | "vybrat-prvni-typ-dodavatele"
  | "jmeno-dodavatele"
  | "typ-sluzby"
  | "lokace-sluzby";

export type NewListingSlice = {
  currentStep: NewListingStepsType;
  services: ServiceType[];
  currentService: ServiceType | null;
};

const initialState: NewListingSlice = {
  currentStep: "typ-dodavatele",
  services: [],
  currentService: null,
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
  },
});

// Action creators are generated for each case reducer function
export const { changeStep } = newListing.actions;

export default newListing.reducer;
