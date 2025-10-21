import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type InitialFilterSliceType = {
  guests: {
    adult: number;
    minor: number;
    ztp: number;
    pets: number;
  };
};

const initialState: InitialFilterSliceType = {
  guests: {
    adult: 0,
    minor: 0,
    ztp: 0,
    pets: 0,
  },
};

export type GuestType = "adult" | "minor" | "ztp" | "pets";

export function incrementFunction(
  state: InitialFilterSliceType,
  action: PayloadAction<GuestType>
) {
  const guestType = action.payload;
  const { guests } = state;
  if (guests[guestType] > 999) {
    state.guests[guestType] += 500;
  } else if (guests[guestType] > 499) {
    state.guests[guestType] += 100;
  } else if (guests[guestType] > 199) {
    state.guests[guestType] += 50;
  } else if (guests[guestType] > 99) {
    state.guests[guestType] += 20;
  } else if (guests[guestType] > 49) {
    state.guests[guestType] += 10;
  } else if (guests[guestType] > 19) {
    state.guests[guestType] += 5;
  } else {
    state.guests[guestType] += 1;
  }
}

export function decrementFunction(
  state: InitialFilterSliceType,
  action: PayloadAction<GuestType>
) {
  const { guests } = state;
  const guestType = action.payload;
  if (guests[guestType] > 1000) {
    state.guests[guestType] -= 500;
  } else if (guests[guestType] > 0) {
    if (guests[guestType] > 500) {
      state.guests[guestType] -= 100;
    } else if (guests[guestType] > 200) {
      state.guests[guestType] -= 50;
    } else if (guests[guestType] > 100) {
      state.guests[guestType] -= 20;
    } else if (guests[guestType] > 50) {
      state.guests[guestType] -= 10;
    } else if (guests[guestType] > 20) {
      state.guests[guestType] -= 5;
    } else if (guests[guestType] > 0) {
      state.guests[guestType] -= 1;
    }
  }
}

export function changeOnUserInputFunction(
  state: InitialFilterSliceType,
  action: PayloadAction<{ guestType: GuestType; value: number }>
) {
  const guestType = action.payload.guestType;
  state.guests[guestType] = action.payload.value;
}

export const initialFilterSlice = createSlice({
  name: "initialFilter",
  initialState,
  reducers: {
    increment: incrementFunction,
    decrement: decrementFunction,
    changeOnUserInput: changeOnUserInputFunction,
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, changeOnUserInput } =
  initialFilterSlice.actions;

export default initialFilterSlice.reducer;
