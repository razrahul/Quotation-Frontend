export type Item = {
  name: string;
  qty: number;
  unit: string;
  rate: number;
  amount?: number;
};

export type Party = {
  country: string;
  name: string;
  phone: string;
  gstin: string | null;   // 👈 NULL allowed
  address: string;
  city: string;
  state: string;
};

export type QuotationFormState = {
  quoteNo: string;
  quoteDate: string;
  company: Party;
  client: Party;
  items: Item[];
  gst: { percentage: number; amount?: number } | null;
  discount: { type: "FLAT"; value: number; amount?: number };
  terms: string;
  notes: string;
  gstEnabled: boolean;
};
