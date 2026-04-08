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

async function getQuotationErrorMessage(
  error: any,
  fallbackMessage: string
): Promise<string> {
  const responseData = error?.response?.data;

  if (responseData instanceof Blob) {
    try {
      const text = await responseData.text();
      const parsed = JSON.parse(text);
      return parsed?.message || fallbackMessage;
    } catch (_) {
      return fallbackMessage;
    }
  }

  return error?.response?.data?.message || fallbackMessage;
}

/* ================= CREATE QUOTE ================= */
export const createQuotation = (payload: any) => async (dispatch:any) => {
  try {
    dispatch(quotationRequest());

    const { data } = await api.post("/quote", payload);

    dispatch(createQuoteSuccess(data));
    return data;
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
    return data;
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
      return true;
    } catch (error: any) {
      const message = await getQuotationErrorMessage(
        error,
        "Failed to download quotation"
      );
      dispatch(
        quotationFail(message)
      );
    }
  };

export const downloadQuoteById =
  (quoteId: number, quoteNo: string) => async (dispatch: any) => {
    try {
      dispatch(quotationRequest());

      const { data } = await api.get(`/quote/${quoteId}/download`, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = `${quoteNo}.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);

      dispatch(finalizeQuoteSuccess());
      return true;
    } catch (error: any) {
      const message = await getQuotationErrorMessage(
        error,
        "Failed to download quotation"
      );
      dispatch(
        quotationFail(message)
      );
      return false;
    }
  };

export const updateQuotation =
  (id: number, payload: any) => async (dispatch: any) => {
    try {
      dispatch(quotationRequest());

      const { data } = await api.put(`/quote/${id}`, payload);

      dispatch(getQuoteSuccess(data));
      return data;
    } catch (error: any) {
      dispatch(
        quotationFail(
          error.response?.data?.message || "Failed to update quotation"
        )
      );
      return null;
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
