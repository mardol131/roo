"use client";

import { useAppDispatch } from "@/app/_redux/hooks";
import {
  newListing,
  NewListingStepsType,
} from "@/app/_redux/slices/newListingSlice/newListingSlice";

export function useNewListingSteps() {
  const dispatch = useAppDispatch();

  async function changeStepHandler(step: NewListingStepsType) {
    await dispatch(newListing.actions.changeStep(step));
  }

  return { changeStepHandler };
}
