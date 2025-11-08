import { PayloadAction } from "@reduxjs/toolkit";
import { AuthSliceType } from "../authSlice";

export function loginUser(
  state: AuthSliceType,
  action: PayloadAction<{ email: string; password: string }>
) {
  state.loggedIn = true;
}
