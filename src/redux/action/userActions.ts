import api from "../../services/axios";

import type { AuthResponse } from "../../types/quotationApi.types";

import {
  authRequest,
  authFail,
  authRegister,
  login,
  logout,
  loadUserSuccess
} from "../slices/authSlice";


//craete User
export const createUser = (payload: any) => async (dispatch: any) => {
  try {
    dispatch(authRequest());

    const { data } = await api.post<AuthResponse>("/auth/register", payload);

     // ✅ TOKEN SAVE HERE (BEST PLACE)
    localStorage.setItem("tt_token", data.data.token);

    dispatch(authRegister(data));
  } catch (error: any) {
    dispatch(authFail(error.response?.data?.message || "Failed to register"));
  }
};

//login user
export const loginUser = (payload: any) => async (dispatch: any) => {
  try {
    dispatch(authRequest());

    const { data } = await api.post("/auth/login", payload);

      // ✅ TOKEN SAVE HERE (BEST PLACE)
    localStorage.setItem("tt_token", data.data.token);

    dispatch(login(data));
  } catch (error: any) {
    dispatch(authFail(error.response?.data?.message || "Failed to login"));
  }
};


//logout user
export const logoutUser = () => async (dispatch: any) => {
  try {
    dispatch(authRequest());
    const { data } = await api.post("/auth/logout");

    // ✅ token delete
    localStorage.removeItem("tt_token");
    dispatch(logout(data));
  } catch (error: any) {
    dispatch(authFail(error.response?.data?.message || "Failed to logout"));
  }
};

export const loadUser = () => async (dispatch: any) => {
  try {
    dispatch(authRequest());

    console.log("loadUser called")

    const { data } = await api.get("/auth/me");

    // expected: data.user
    dispatch(loadUserSuccess( data));
  } catch (error: any) {
    // ❌ token invalid / expired
    localStorage.removeItem("tt_token");
    dispatch(logout());
  }
};
