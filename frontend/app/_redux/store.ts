"use client";

import { configureStore } from "@reduxjs/toolkit";
import initialFilterSlice from "./slices/initialFilterSlice";
import lowerHeaderStepSlice from "./slices/lowerHeaderStepsSlice";
import { lowerHeaderStep } from "./slices/lowerHeaderStepsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      initialFilter: initialFilterSlice,
      lowerHeaderStep: lowerHeaderStepSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
