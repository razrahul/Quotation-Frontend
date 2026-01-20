import type { QuotationFormState } from "./quotation.types";

export type QuoteApiResponse = {
  success: boolean;
  message: string;
  data: {
    id: number;
    quoteNo: string;
    quoteDate: string;
    payload: {
      company: QuotationFormState["company"];
      client: QuotationFormState["client"];
      items: QuotationFormState["items"];
      gst?: { percentage: number };
      discount?: { type: string; value: number };
      terms?: string;
      notes?: string;
    };
  };
};
