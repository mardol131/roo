import { createSlice } from "@reduxjs/toolkit";
import { changeIsOpen } from "./actions/changeIsOpen";
import { loginUser } from "./actions/loginUser";
import { changeAuthModalMode } from "./actions/changeAuthModalMode";

export type AuthModalModes = "login" | "passwordReset";

export type AuthSliceType = {
  authModalOpen: boolean;
  authModalMode: AuthModalModes;
  loggedIn: boolean;
};

const initialState: AuthSliceType = {
  authModalMode: "login",
  authModalOpen: false,
  loggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeModalIsOpen: changeIsOpen,
    loginUser: loginUser,
    changeAuthModalMode: changeAuthModalMode,
  },
});

// Action creators are generated for each case reducer function
export const {} = authSlice.actions;

export default authSlice.reducer;
