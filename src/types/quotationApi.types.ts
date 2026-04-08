import type { QuotationFormState } from "./quotation.types";

export type QuoteRecord = {
  id: number;
  userId: number;
  quoteName: string;
  quoteNo: string;
  quoteDate: string;
  status: string;
  currency: string;
  totalAmount: string;
  createdAt: string;
  updatedAt: string;
  payload: {
    company: QuotationFormState["company"];
    client: QuotationFormState["client"];
    items: QuotationFormState["items"];
    gst?: { percentage: number; amount?: number } | null;
    discount?: { type: string; value: number; amount?: number };
    subTotal?: number;
    grandTotal?: number;
    terms?: string;
    notes?: string;
    companyLogo?: QuotationFormState["companyLogo"];
    signature?: QuotationFormState["signature"];
    headerFields?: QuotationFormState["headerFields"];
    additionalFields?: QuotationFormState["additionalFields"];
    design?: QuotationFormState["design"];
    taxConfig?: QuotationFormState["gstConfig"];
    meta?: {
      showTotalInWords?: boolean;
      validUntil?: string;
    };
  };
};

export type QuoteApiResponse = {
  success: boolean;
  message: string;
  data: QuoteRecord;
};

export type QuoteListApiResponse = {
  success: boolean;
  message: string;
  data: QuoteRecord[];
};

export type User = {
  id: number;
  name: string;
  email: string;
  country: string;
  createdAt?: string;
  updatedAt?: string;
};

export type AuthResponse = {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
};

export type MeResponse = {
  success: boolean;
  message: string;
  data: User;
};

export type UserResponce = {
  success: boolean;
  message: string;
  data: {
    user: {
      id: number;
      name: string;
      email: string;
      country: string;
      createdAt?: string;
      updatedAt?: string;
    };
    token: string;
  };
};
