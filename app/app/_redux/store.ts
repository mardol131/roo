"use client";

import { configureStore } from "@reduxjs/toolkit";
import newListingSlice from "./slices/newListingSlice";
import headerFilterSlice from "./slices/filtersSlice/headerFilterSlice";
import authSlice from "./slices/authSlice/authSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      headerFilter: headerFilterSlice,
      newListing: newListingSlice,
      authSlice: authSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
