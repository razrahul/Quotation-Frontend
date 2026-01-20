import type { Party, Item } from "../types/quotation.types";

export function normalizeParty(p?: Partial<Party>): Party {
  return {
    country: p?.country ?? "India",
    name: p?.name ?? "",
    phone: p?.phone ?? "",
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
