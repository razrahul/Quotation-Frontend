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
