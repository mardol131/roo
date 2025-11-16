import { PayloadAction } from "@reduxjs/toolkit";
import { NewListingSlice, NewListingStepsType } from "../newListingSlice";

export function changeStepAction(
  state: NewListingSlice,
  action: PayloadAction<NewListingStepsType>
) {
  state.step = action.payload;
}
