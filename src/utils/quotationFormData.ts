import type { QuoteAsset } from "../types/quotation.types";

type QuotePayload = {
  quoteName?: string;
  quoteNo?: string;
  quoteDate?: string;
  currency?: string;
  totalAmount?: string;
  payload?: Record<string, unknown>;
};

function serializeAsset(asset?: QuoteAsset | null) {
  if (!asset) {
    return null;
  }

  if (!asset.url && !asset.publicId && !asset.public_id && !asset.name) {
    return null;
  }

  const publicId = asset.publicId || asset.public_id;

  return {
    name: asset.name,
    url: asset.url,
    publicId,
    public_id: publicId,
    provider: asset.provider,
  };
}

export function buildQuotationFormData(data: QuotePayload) {
  const formData = new FormData();
  const companyLogo = data.payload?.companyLogo as QuoteAsset | null | undefined;
  const signature = data.payload?.signature as QuoteAsset | null | undefined;

  const payload = {
    ...data.payload,
    companyLogo: serializeAsset(companyLogo),
    signature: serializeAsset(signature),
  };

  formData.append("quoteName", data.quoteName ?? "");
  formData.append("quoteNo", data.quoteNo ?? "");
  formData.append("quoteDate", data.quoteDate ?? "");
  formData.append("currency", data.currency ?? "INR");
  formData.append("totalAmount", data.totalAmount ?? "");
  formData.append("payload", JSON.stringify(payload));

  if (companyLogo?.file) {
    formData.append("companyLogo", companyLogo.file);
  }

  if (signature?.file) {
    formData.append("signature", signature.file);
  }

  return formData;
}
