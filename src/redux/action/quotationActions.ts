import api from "../../services/axios";
import type { QuoteListApiResponse } from "../../types/quotationApi.types";
import {
  quotationRequest,
  quotationFail,
  createQuoteSuccess,
  getQuoteSuccess,
  finalizeQuoteSuccess,
  getQuotationListbyProfileSuccess
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


/* ================= FINALIZE & DOWNLOAD ================= */
export const finalizeAndDownloadQuote = (payload: any) => async (dispatch: any) => {
    try {
      dispatch(quotationRequest());

      const { data } = await api.post("/quote/finalize", payload, {
        responseType: "blob",
      });

      // trigger browser download
      const url = window.URL.createObjectURL(new Blob([data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = `${payload.quoteNo}.pdf`;
      a.click();

      dispatch(finalizeQuoteSuccess());
    } catch (error: any) {
      dispatch(
        quotationFail(
          error.response?.data?.message || "Failed to download quotation"
        )
      );
    }
  };


  export const getQuotationListbyProfile =  () => async (dispatch: any) => {
    try {
      dispatch(quotationRequest());
      const { data } = await api.get<QuoteListApiResponse>("/quote/user/me/list");
      dispatch(getQuotationListbyProfileSuccess(data.data));
    } catch (error: any) {
      dispatch(
        quotationFail(
          error.response?.data?.message || "Failed to fetch quotation"
        )
      );
    }
  };
