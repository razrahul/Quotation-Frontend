import { stripCountryPhoneCode } from "./countryOptions";

import type { Party, Item, QuotationFormState } from "../types/quotation.types";

export function normalizeParty(p?: Partial<Party>): Party {
  return {
    country: p?.country ?? "India",
    name: p?.name ?? "",
    phone: stripCountryPhoneCode(p?.country ?? "India", p?.phone ?? ""),
    gstin: p?.gstin ?? null,
    address: p?.address ?? "",
    city: p?.city ?? "",
    state: p?.state ?? "",
  };
}

export function normalizeItems(items?: Partial<Item>[]): Item[] {
  if (!items?.length) {
    return [{ name: "", qty: 1, unit: "Service", rate: 0 }];
  }

  return items.map(i => ({
    name: i.name ?? "",
    qty: i.qty ?? 1,
    unit: i.unit ?? "Service",
    rate: i.rate ?? 0,
    amount: i.amount ?? (i.qty ?? 1) * (i.rate ?? 0),
  }));
}

export function mapQuoteToForm(data?: any): QuotationFormState {
  const payload = data?.payload ?? {};

  return {
    quoteName: data?.quoteName ?? "",
    quoteNo: data?.quoteNo ?? "",
    quoteDate: data?.quoteDate ?? "",
    company: normalizeParty(payload.company),
    client: normalizeParty(payload.client),
    items: normalizeItems(payload.items),
    gst: payload.gst
      ? {
          percentage: payload.gst.percentage ?? 0,
          amount: payload.gst.amount,
        }
      : null,
    discount: {
      type: "FLAT",
      value: payload.discount?.value ?? 0,
      amount: payload.discount?.amount,
    },
    terms: payload.terms ?? "",
    notes: payload.notes ?? "",
    gstEnabled: Boolean(payload.gst),
  };
}
