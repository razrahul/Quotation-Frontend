import { configureStore } from "@reduxjs/toolkit";
import quotationReducer from "./slices/quotationSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    quotation: quotationReducer,
    auth: authReducer,
  },

  // thunk already included by RTK
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // safe for forms / dates / payloads
    }),

  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
