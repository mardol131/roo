"use client";

import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./slices/calendarSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      calendar: calendarReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
