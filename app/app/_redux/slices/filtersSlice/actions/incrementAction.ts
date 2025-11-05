import { PayloadAction } from "@reduxjs/toolkit";
import { GuestType, HeaderFilterType } from "../headerFilterSlice";

export function incrementAction(
  state: HeaderFilterType,
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
