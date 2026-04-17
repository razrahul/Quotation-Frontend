import { stripCountryPhoneCode } from "./countryOptions";

import type {
  Party,
  Item,
  QuotationFormState,
  QuoteAsset,
  QuoteDesign,
  QuoteField,
  QuoteTaxConfig,
} from "../types/quotation.types";

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

  return items.map((item) => ({
    name: item.name ?? "",
    qty: item.qty ?? 1,
    unit: item.unit ?? "Service",
    rate: item.rate ?? 0,
    amount: item.amount ?? (item.qty ?? 1) * (item.rate ?? 0),
  }));
}

function normalizeFields(fields?: Partial<QuoteField>[]): QuoteField[] {
  return (fields ?? [])
    .map((field) => ({
      label: field.label ?? "",
      value: field.value ?? "",
    }))
    .filter((field) => field.label || field.value);
}

function normalizeAsset(asset?: Partial<QuoteAsset> | null): QuoteAsset | null {
  if (!asset?.url && !asset?.dataUrl && !asset?.name) {
    return null;
  }

  return {
    name: asset.name ?? "asset",
    url: asset.url,
    dataUrl: asset.dataUrl,
    provider: asset.provider,
    publicId: asset.publicId ?? asset.public_id,
    public_id: asset.public_id ?? asset.publicId,
  };
}

function normalizeDesign(design?: Partial<QuoteDesign>): QuoteDesign {
  return {
    accentColor: design?.accentColor ?? "#0f4c81",
    language: design?.language ?? "English",
    headingFont: design?.headingFont ?? "Open Sans",
    bodyFont: design?.bodyFont ?? "Open Sans",
    headingFontSize: design?.headingFontSize ?? 20,
    bodyFontSize: design?.bodyFontSize ?? 14,
    paperSize: design?.paperSize ?? "A4",
    marginPreset: design?.marginPreset ?? "compact",
    textScale: design?.textScale ?? "normal",
  };
}

function normalizeTaxConfig(taxConfig?: Partial<QuoteTaxConfig>): QuoteTaxConfig {
  return {
    taxType: taxConfig?.taxType ?? "GST India",
    placeOfSupply: taxConfig?.placeOfSupply ?? "Other Territory",
    gstMode: taxConfig?.gstMode ?? "cgst_sgst",
    reverseCharge: Boolean(taxConfig?.reverseCharge),
  };
}

export function mapQuoteToForm(data?: any): QuotationFormState {
  const payload = data?.payload ?? {};

  return {
    quoteName: data?.quoteName ?? "",
    quoteNo: data?.quoteNo ?? "",
    quoteDate: data?.quoteDate ?? "",
    validUntil: payload.meta?.validUntil ?? "",
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
    companyLogo: normalizeAsset(payload.companyLogo),
    signature: normalizeAsset(payload.signature),
    headerFields: normalizeFields(payload.headerFields),
    additionalFields: normalizeFields(payload.additionalFields),
    showTotalInWords: payload.meta?.showTotalInWords ?? true,
    design: normalizeDesign(payload.design),
    gstConfig: normalizeTaxConfig(payload.taxConfig),
  };
}
