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
  gstin: string | null;
  address: string;
  city: string;
  state: string;
};

export type QuoteField = {
  label: string;
  value: string;
};

export type QuoteAsset = {
  name: string;
  url?: string;
  dataUrl?: string;
  provider?: string;
  publicId?: string;
};

export type QuoteDesign = {
  accentColor: string;
  language: string;
  headingFont: string;
  bodyFont: string;
  headingFontSize: number;
  bodyFontSize: number;
  paperSize: "A4" | "Letter";
  marginPreset: "compact" | "normal" | "wide";
  textScale: "small" | "normal" | "large";
};

export type QuoteTaxConfig = {
  taxType: string;
  placeOfSupply: string;
  gstMode: "igst" | "cgst_sgst";
  reverseCharge: boolean;
};

export type QuotationFormState = {
  quoteName: string;
  quoteNo: string;
  quoteDate: string;
  validUntil: string;
  company: Party;
  client: Party;
  items: Item[];
  gst: { percentage: number; amount?: number } | null;
  discount: { type: "FLAT"; value: number; amount?: number };
  terms: string;
  notes: string;
  gstEnabled: boolean;
  companyLogo: QuoteAsset | null;
  signature: QuoteAsset | null;
  headerFields: QuoteField[];
  additionalFields: QuoteField[];
  showTotalInWords: boolean;
  design: QuoteDesign;
  gstConfig: QuoteTaxConfig;
};
