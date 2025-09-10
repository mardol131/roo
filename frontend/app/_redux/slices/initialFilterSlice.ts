import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type InitialFilterSliceType = {
  peopleCount: number;
};

const initialState: InitialFilterSliceType = {
  peopleCount: 0,
};

export function incrementFunction(state: InitialFilterSliceType) {
  const { peopleCount } = state;
  if (peopleCount > 999) {
    state.peopleCount += 500;
  } else if (peopleCount > 499) {
    state.peopleCount += 100;
  } else if (peopleCount > 199) {
    state.peopleCount += 50;
  } else if (peopleCount > 99) {
    state.peopleCount += 20;
  } else if (peopleCount > 49) {
    state.peopleCount += 10;
  } else if (peopleCount > 19) {
    state.peopleCount += 5;
  } else {
    state.peopleCount += 1;
  }
}

export function decrementFunction(state: InitialFilterSliceType) {
  const { peopleCount } = state;
  if (peopleCount > 1000) {
    state.peopleCount -= 500;
  } else if (peopleCount > 0) {
    if (peopleCount > 500) {
      state.peopleCount -= 100;
    } else if (peopleCount > 200) {
      state.peopleCount -= 50;
    } else if (peopleCount > 100) {
      state.peopleCount -= 20;
    } else if (peopleCount > 50) {
      state.peopleCount -= 10;
    } else if (peopleCount > 20) {
      state.peopleCount -= 5;
    } else if (peopleCount > 0) {
      state.peopleCount -= 1;
    }
  }
}

export const initialFilterSlice = createSlice({
  name: "initialFilter",
  initialState,
  reducers: {
    increment: incrementFunction,
    decrement: decrementFunction,
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = initialFilterSlice.actions;

export default initialFilterSlice.reducer;
