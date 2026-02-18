import { createSlice } from "@reduxjs/toolkit";

import type { QuoteApiResponse } from "../../types/quotationApi.types";

type QuotationSliceState = {
  loading: boolean;
  quotation: QuoteApiResponse | null;
  error: string | null;
  success: boolean;
  items: any[];
};

const initialState: QuotationSliceState = {
  loading: false,
  quotation: null,
  error: null,
  success: false,
  items: [],
};



const quotationSlice = createSlice({
  name: "quotation",
  initialState,
  reducers: {
    /* ================= REQUEST / FAIL ================= */
    quotationRequest(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },

    quotationFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    /* ================= CREATE QUOTE ================= */
    createQuoteSuccess(state, action) {
      state.loading = false;
      state.success = true;
      state.quotation = action.payload;
    },

    /* ================= GET QUOTE (EDIT) ================= */
    getQuoteSuccess(state, action) {
      state.loading = false;
      state.quotation = action.payload;
    },

    /* NEW */
    finalizeQuoteSuccess(state) {
      state.loading = false;
      state.success = true;
    },

    /* ================= UI: ITEMS TABLE ================= */
    addRow(state) {
      state.items.push({
        name: "",
        qty: 1,
        unit: "Service",
        rate: 0,
      });
    },

    removeRow(state, action) {
      state.items = state.items.filter(
        (_, idx) => idx !== action.payload
      );
    },

    updateRow(state, action) {
      const { index, field, value } = action.payload;
      state.items[index][field] = value;
    },

    clearError(state) {
      state.error = null;
    },
  },
});

export const {
  quotationRequest,
  quotationFail,
  createQuoteSuccess,
  getQuoteSuccess,
  finalizeQuoteSuccess,
  addRow,
  removeRow,
  updateRow,
  clearError,
} = quotationSlice.actions;

export default quotationSlice.reducer;
