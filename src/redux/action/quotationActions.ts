import api from "../../services/axios";
import {
  quotationRequest,
  quotationFail,
  createQuoteSuccess,
  getQuoteSuccess,
} from "../slices/quotationSlice";

/* ================= CREATE QUOTE ================= */
export const createQuotation = (payload: any) => async (dispatch:any) => {
  try {
    dispatch(quotationRequest());

    const { data } = await api.post("/quote", payload);

    dispatch(createQuoteSuccess(data));
  } catch (error: any) {
    dispatch(
      quotationFail(
        error.response?.data?.message || "Failed to create quotation"
      )
    );
  }
};

/* ================= GET QUOTE BY ID ================= */
export const getQuotationById = (id: number) => async (dispatch: any) => {
  try {
    dispatch(quotationRequest());

    const { data } = await api.get(`/quote/${id}`);

    dispatch(getQuoteSuccess(data));
  } catch (error: any) {
    dispatch(
      quotationFail(
        error.response?.data?.message || "Failed to fetch quotation"
      )
    );
  }
};
