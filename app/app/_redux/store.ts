"use client";

import { configureStore } from "@reduxjs/toolkit";
import newListingSlice from "./slices/newListingSlice";
import headerFilterSlice from "./slices/headerFilterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      headerFilter: headerFilterSlice,
      newListing: newListingSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
