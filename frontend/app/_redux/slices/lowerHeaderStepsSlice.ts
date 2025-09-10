import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type LowerHeaderStepSlice = {
  currentStep: CurrentStepType;
};

export type CurrentStepType = "eventType" | "place" | "time" | "people" | null;

const initialState: LowerHeaderStepSlice = {
  currentStep: null,
};

export function changeStepFunction(
  state: LowerHeaderStepSlice,
  action: PayloadAction<CurrentStepType>
) {
  state.currentStep = action.payload;
}

export const lowerHeaderStep = createSlice({
  name: "initialFilter",
  initialState,
  reducers: {
    changeStep: changeStepFunction,
  },
});

// Action creators are generated for each case reducer function
export const { changeStep } = lowerHeaderStep.actions;

export default lowerHeaderStep.reducer;
