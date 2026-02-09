import { createSlice } from "@reduxjs/toolkit";

import type { User } from "../../types/quotationApi.types";

type AuthSliceState = {
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null; // ✅ ONLY User
  error: string | null;
  success: boolean;
  authChecked: boolean; // ✅ NEW
};

const initialState: AuthSliceState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
  success: false,
  authChecked: false, // ❗ initially false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authRequest(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },

    authFail(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.authChecked = true;
    },

    // 🔐 Register / Login success
    authRegister(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.data.user; // ✅ normalize
      state.success = true;
      state.authChecked = true;
    },

    // 🔄 /auth/me success
    loadUserSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.data; // ✅ direct user
      state.authChecked = true;
    },

    login(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.data.user; // ✅ consistent
      state.success = true;
      state.authChecked = true; // ✅ ADD THIS
    },

    logout(state) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.success = false;
      state.error = null;
      state.authChecked = true; // ❗ important
    },

    updateProfileSucess(state, action) {
      state.loading = false;
      state.user = action.payload.data.user;
      state.success = true;
      state.isAuthenticated = true;
      state.authChecked = true;
    },

    deleteProfileSucess(state) {
      state.loading = false;
      state.user = null;
      state.success = true;
      state.isAuthenticated = false;
      state.authChecked = true;
    },

    changePasswordSucess(state) {
      state.loading = false;
      state.success = true;
      state.isAuthenticated = false;
      state.authChecked = true;
    },
  },
});

export const {
  authRequest,
  authFail,
  login,
  authRegister,
  logout,
  loadUserSuccess,
  updateProfileSucess,
  deleteProfileSucess,
  changePasswordSucess,
} = authSlice.actions;
export default authSlice.reducer;
