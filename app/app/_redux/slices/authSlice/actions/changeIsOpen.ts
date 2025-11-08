import { PayloadAction } from "@reduxjs/toolkit";
import { AuthModalModes, AuthSliceType } from "../authSlice";

export function changeIsOpen(
  state: AuthSliceType,
  action: PayloadAction<{ isOpen: boolean; mode?: AuthModalModes }>
) {
  state.authModalOpen = action.payload.isOpen;
  state.authModalMode = action.payload.mode || "login";
}
