"use client";

import { configureStore } from "@reduxjs/toolkit";
import initialFilterSlice from "./slices/initialFilterSlice";
import lowerHeaderStepSlice from "./slices/lowerHeaderStepsSlice";
import newListingSlice from "./slices/newListingSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      initialFilter: initialFilterSlice,
      lowerHeaderStep: lowerHeaderStepSlice,
      newListing: newListingSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
