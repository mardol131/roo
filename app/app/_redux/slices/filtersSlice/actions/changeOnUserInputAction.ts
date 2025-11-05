import { PayloadAction } from "@reduxjs/toolkit";
import { GuestType, HeaderFilterType } from "../headerFilterSlice";

export function changeOnUserInputAction(
  state: HeaderFilterType,
  action: PayloadAction<{ guestType: GuestType; value: number }>
) {
  const guestType = action.payload.guestType;
  state.guests[guestType] = action.payload.value;
}
