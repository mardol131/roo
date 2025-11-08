import { PayloadAction } from "@reduxjs/toolkit";
import { AuthModalModes, AuthSliceType } from "../authSlice";

export function changeAuthModalMode(
  state: AuthSliceType,
  action: PayloadAction<AuthModalModes>
) {
  state.authModalMode = action.payload;
}
