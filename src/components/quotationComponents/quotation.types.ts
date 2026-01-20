export type Item = {
  name: string;
  qty: number;
  unit: string;
  rate: number;
};

export type Party = {
  country: string;
  name: string;
  phone: string;
  gstin: string;
  address: string;
  city: string;
  state: string;
};

export  type QuotationState = {
  quoteNo: string;
  quoteDate: string;
  company: Party;
  client: Party;
  items: Item[];
  gstEnabled?: boolean;
};
