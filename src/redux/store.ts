import { configureStore } from "@reduxjs/toolkit";
import quotationReducer from "./slices/quotationSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    quotation: quotationReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
