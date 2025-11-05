import { PayloadAction } from "@reduxjs/toolkit";
import { GuestType, HeaderFilterType } from "../headerFilterSlice";

export function decrementAction(
  state: HeaderFilterType,
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
