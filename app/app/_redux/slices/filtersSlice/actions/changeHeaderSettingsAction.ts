import { PayloadAction } from "@reduxjs/toolkit";
import { HeaderFilterType, SettingsTypes } from "../headerFilterSlice";

export function changeHeaderSettingsAction(
  state: HeaderFilterType,
  action: PayloadAction<SettingsTypes>
) {
  state.settingsType = action.payload;
}
