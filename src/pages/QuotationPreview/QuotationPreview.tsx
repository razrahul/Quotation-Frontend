import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import "./QuotationPreview.scss";
import {
  createQuotation,
  downloadQuoteById,
  finalizeAndDownloadQuote,
  updateQuotation,
} from "../../redux/action/quotationActions";
import Navbar from "../../components/layout/Navbar/Navbar";

type PreviewAction = "update" | "print" | "download" | null;

function getPreviewAsset(asset: any) {
  if (!asset) return null;

  return {
    name: asset.name,
    url: asset.url,
    dataUrl: asset.dataUrl,
    provider: asset.provider,
    publicId: asset.publicId ?? asset.public_id,
    public_id: asset.public_id ?? asset.publicId,
  };
}

function mergeAssetForPreview(savedAsset: any, currentAsset: any) {
  const savedPreview = getPreviewAsset(savedAsset);
  const currentPreview = getPreviewAsset(currentAsset);

  if (!savedPreview && !currentPreview) return null;

  return {
    ...currentPreview,
    ...savedPreview,
    dataUrl: savedPreview?.dataUrl || currentPreview?.dataUrl,
    url: savedPreview?.url || currentPreview?.url,
  };
}

function mergeSavedQuoteForPreview(savedQuote: any, currentQuote: any) {
  if (!savedQuote) return savedQuote;

  return {
    ...currentQuote,
    ...savedQuote,
    payload: {
      ...currentQuote?.payload,
      ...savedQuote.payload,
      companyLogo: mergeAssetForPreview(
        savedQuote.payload?.companyLogo,
        currentQuote?.payload?.companyLogo,
      ),
      signature: mergeAssetForPreview(
        savedQuote.payload?.signature,
        currentQuote?.payload?.signature,
      ),
    },
  };
}

async function waitForImagesToLoad(container: HTMLElement | null) {
  if (!container) return;

  const images = Array.from(container.querySelectorAll("img"));
  if (!images.length) return;

  await Promise.race([
    Promise.all(
      images.map(
        (image) =>
          new Promise<void>((resolve) => {
            if (image.complete && image.naturalWidth > 0) {
              resolve();
              return;
            }

            image.addEventListener("load", () => resolve(), { once: true });
            image.addEventListener("error", () => resolve(), { once: true });
          }),
      ),
    ),
    new Promise<void>((resolve) => {
      window.setTimeout(resolve, 2000);
    }),
  ]);
}

function numberToWords(value: number) {
  const units = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  const convertBelowThousand = (num: number): string => {
    if (num < 20) return units[num];
    if (num < 100) {
      return `${tens[Math.floor(num / 10)]}${num % 10 ? ` ${units[num % 10]}` : ""}`;
    }
    return `${units[Math.floor(num / 100)]} Hundred${num % 100 ? ` ${convertBelowThousand(num % 100)}` : ""}`;
  };

  if (value === 0) return "Zero Rupees Only";

  const parts: string[] = [];
  const crore = Math.floor(value / 10000000);
  const lakh = Math.floor((value % 10000000) / 100000);
  const thousand = Math.floor((value % 100000) / 1000);
  const hundred = value % 1000;

  if (crore) parts.push(`${convertBelowThousand(crore)} Crore`);
  if (lakh) parts.push(`${convertBelowThousand(lakh)} Lakh`);
  if (thousand) parts.push(`${convertBelowThousand(thousand)} Thousand`);
  if (hundred) parts.push(convertBelowThousand(hundred));

  return `${parts.join(" ").trim()} Rupees Only`;
}

function buildComparableQuote(quote: any) {
  if (!quote) return null;

  return {
    quoteName: quote.quoteName || "Quotation",
    quoteNo: quote.quoteNo || "",
    quoteDate: quote.quoteDate || "",
    payload: {
      company: quote.payload?.company || {},
      client: quote.payload?.client || {},
      items: quote.payload?.items || [],
      gst: quote.payload?.gst || null,
      discount: quote.payload?.discount || null,
      subTotal: Number(quote.payload?.subTotal || 0),
      grandTotal: Number(quote.payload?.grandTotal || 0),
      terms: quote.payload?.terms || "",
      notes: quote.payload?.notes || "",
      companyLogo: quote.payload?.companyLogo || null,
      signature: quote.payload?.signature || null,
      headerFields: quote.payload?.headerFields || [],
      additionalFields: quote.payload?.additionalFields || [],
      design: quote.payload?.design || {},
      taxConfig: quote.payload?.taxConfig || {},
      meta: quote.payload?.meta || {},
    },
  };
}

export default function QuotationPreview() {
  const location = useLocation();
  const navigate = useNavigate();
  const printTriggeredRef = useRef(false);
  const previewPaperRef = useRef<HTMLDivElement>(null);
  const [activeAction, setActiveAction] = useState<PreviewAction>(null);

  const { isAuthenticated, authChecked } = useSelector(
    (state: RootState) => state.auth,
  );
  const { loading } = useSelector((state: RootState) => state.quotation);

  const dispatch = useDispatch<AppDispatch>();

  const data = location.state?.quotation;
  const originalQuotation = location.state?.originalQuotation;
  const postLoginAction = location.state?.postLoginAction;

  const comparableCurrent = useMemo(() => buildComparableQuote(data), [data]);
  const comparableOriginal = useMemo(
    () => buildComparableQuote(originalQuotation),
    [originalQuotation],
  );

  if (!data) {
    return (
      <div className="preview-page">
        <p>No quotation data found.</p>
        <button onClick={() => navigate("/")}>Create New</button>
      </div>
    );
  }

  const { quoteName = "Quotation", quoteNo, quoteDate, payload } = data;
  const persistedQuoteId = data.id ?? originalQuotation?.id;
  const hasExistingQuote = Boolean(persistedQuoteId);
  const hasChanges =
    hasExistingQuote &&
    JSON.stringify(comparableCurrent) !== JSON.stringify(comparableOriginal);
  const isActionBusy = Boolean(activeAction) || loading;

  const accentColor = payload.design?.accentColor || "#0f4c81";
  const headingFont = payload.design?.headingFont || "Open Sans";
  const bodyFont = payload.design?.bodyFont || "Open Sans";
  const headingFontSize = payload.design?.headingFontSize || 20;
  const bodyFontSize = payload.design?.bodyFontSize || 14;
  const paperSize = payload.design?.paperSize || "A4";
  const marginPreset = payload.design?.marginPreset || "compact";
  const textScale = payload.design?.textScale || "normal";
  const totalInWords =
    payload.meta?.showTotalInWordsLabel ||
    numberToWords(Math.round(Number(payload.grandTotal || 0)));

  const requireLogin = (action?: string) => {
    navigate("/login", {
      state: {
        redirectTo: "/preview",
        quotation: data,
        originalQuotation,
        postLoginAction: action,
      },
    });
  };

  const triggerPrint = async () => {
    await waitForImagesToLoad(previewPaperRef.current);

    window.setTimeout(() => {
      window.print();
    }, 120);
  };

  const handleDownload = async () => {
    if (!authChecked || hasChanges || isActionBusy) return;

    if (!isAuthenticated) {
      requireLogin("download");
      return;
    }

    setActiveAction("download");
    try {
      if (persistedQuoteId) {
        await dispatch(downloadQuoteById(persistedQuoteId, quoteNo));
        return;
      }

      await dispatch(finalizeAndDownloadQuote(data));
    } finally {
      setActiveAction(null);
    }
  };

  const saveQuotationUpdates = async (options?: { shouldPrint?: boolean }) => {
    const response = await dispatch(updateQuotation(persistedQuoteId, data));
    if (!response?.data) return false;
    const previewQuote = mergeSavedQuoteForPreview(response.data, data);

    navigate("/preview", {
      replace: true,
      state: {
        quotation: previewQuote,
        originalQuotation: previewQuote,
        ...(options?.shouldPrint ? { postLoginAction: "print" } : {}),
      },
    });

    return true;
  };

  const handleUpdate = async (options?: { shouldPrint?: boolean }) => {
    if (!persistedQuoteId || !hasChanges || !authChecked || isActionBusy) return;

    if (!isAuthenticated) {
      requireLogin(options?.shouldPrint ? "print" : "update");
      return;
    }

    setActiveAction(options?.shouldPrint ? "print" : "update");
    try {
      await saveQuotationUpdates(options);
    } finally {
      setActiveAction(null);
    }
  };

  const handlePrint = async () => {
    if (!authChecked || isActionBusy) return;

    if (!isAuthenticated) {
      requireLogin("print");
      return;
    }

    setActiveAction("print");
    try {
      if (hasExistingQuote && hasChanges) {
        await saveQuotationUpdates({ shouldPrint: true });
        return;
      }

      if (!hasExistingQuote) {
        const response = await dispatch(createQuotation(data));
        if (!response?.data) return;
        const previewQuote = mergeSavedQuoteForPreview(response.data, data);

        navigate("/preview", {
          replace: true,
          state: {
            quotation: previewQuote,
            originalQuotation: previewQuote,
            postLoginAction: "print",
          },
        });
        return;
      }

      await triggerPrint();
    } finally {
      setActiveAction(null);
    }
  };

  useEffect(() => {
    if (!authChecked || !isAuthenticated || postLoginAction !== "print" || printTriggeredRef.current) {
      return;
    }

    if (!data?.id || hasChanges) {
      return;
    }

    printTriggeredRef.current = true;
    void triggerPrint();
  }, [authChecked, data?.id, hasChanges, isAuthenticated, postLoginAction]);

  useEffect(() => {
    printTriggeredRef.current = false;
  }, [data?.id, hasChanges]);

  const paperWidth = paperSize === "Letter" ? "216mm" : "210mm";
  const paperMinHeight = paperSize === "Letter" ? "279mm" : "297mm";
  const paperPadding =
    marginPreset === "wide" ? "22mm" : marginPreset === "normal" ? "18mm" : "14mm";
  const textScaleMultiplier =
    textScale === "small" ? 0.92 : textScale === "large" ? 1.08 : 1;

  return (
    <>
      <Navbar />
      <div className="preview-page">
        <div
          className="preview-container"
          style={{
            ["--accent" as string]: accentColor,
            ["--heading-font" as string]: `${headingFont}`,
            ["--body-font" as string]: `${bodyFont}`,
            ["--heading-size" as string]: `${headingFontSize + 14}px`,
            ["--body-size" as string]: `${bodyFontSize}px`,
            ["--paper-width" as string]: paperWidth,
            ["--paper-min-height" as string]: paperMinHeight,
            ["--paper-padding" as string]: paperPadding,
            ["--text-scale-multiplier" as string]: String(textScaleMultiplier),
          }}
        >
          <div className="preview-paper" ref={previewPaperRef}>
            <div className="preview-header">
              <div className="brand-block">
                {payload.companyLogo?.dataUrl || payload.companyLogo?.url ? (
                  <img
                    className="brand-logo"
                    src={payload.companyLogo.dataUrl || payload.companyLogo.url}
                    alt="Company logo"
                  />
                ) : (
                  <div className="brand-logo fallback">Logo</div>
                )}
              </div>

              <div className="meta-block">
                <div className="heading-row">
                  <h2>{quoteName}</h2>
                </div>
                <div className="meta-list">
                  <p>
                    <span>Quotation No</span>
                    <strong>{quoteNo}</strong>
                  </p>
                  <p>
                    <span>Quotation Date</span>
                    <strong>{quoteDate}</strong>
                  </p>
                  {payload.meta?.validUntil && (
                    <p>
                      <span>Valid Till Date</span>
                      <strong>{payload.meta.validUntil}</strong>
                    </p>
                  )}
                  {(payload.headerFields || []).map((field: any, index: number) => (
                    <p key={`${field.label}-${index}`}>
                      <span>{field.label || "Field Name"}</span>
                      <strong>{field.value || "-"}</strong>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="party-grid">
              <div className="party-card-preview">
                <h4>Your Details</h4>
                <p>
                  <strong>{payload.company.name}</strong>
                </p>
                <p>Country: {payload.company.country}</p>
                <p>Phone: {payload.company.phone || "-"}</p>
                <p>GSTIN: {payload.company.gstin || "-"}</p>
                <p>Address: {payload.company.address || "-"}</p>
                <p>
                  City: {payload.company.city || "-"} | State: {payload.company.state || "-"}
                </p>
              </div>

              <div className="party-card-preview">
                <h4>Client Details</h4>
                <p>
                  <strong>{payload.client.name}</strong>
                </p>
                <p>Country: {payload.client.country}</p>
                <p>Phone: {payload.client.phone || "-"}</p>
                <p>GSTIN: {payload.client.gstin || "-"}</p>
                <p>Address: {payload.client.address || "-"}</p>
                <p>
                  City: {payload.client.city || "-"} | State: {payload.client.state || "-"}
                </p>
              </div>
            </div>

            <table className="items-priview-table">
              <thead>
                <tr>
                  <th>Sr.</th>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Unit</th>
                  <th>Rate</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {payload.items.map((item: any, index: number) => (
                  <tr key={index}>
                    <td data-label="Sr.">{index + 1}</td>
                    <td data-label="Item">{item.name}</td>
                    <td data-label="Qty">{item.qty}</td>
                    <td data-label="Unit">{item.unit}</td>
                    <td data-label="Rate">Rs. {item.rate}</td>
                    <td data-label="Amount">Rs. {item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="preview-bottom">
              <div className="supporting-column">
                {payload.taxConfig && (
                  <div className="info-card tax-config-card">
                    <h5>Tax Configuration</h5>
                    <div className="tax-grid">
                      <div>
                        <span>Tax Type</span>
                        <strong>{payload.taxConfig.taxType}</strong>
                      </div>
                      <div>
                        <span>Place of Supply</span>
                        <strong>{payload.taxConfig.placeOfSupply}</strong>
                      </div>
                      <div>
                        <span>GST Type</span>
                        <strong>
                          {payload.taxConfig.gstMode === "cgst_sgst" ? "CGST & SGST" : "IGST"}
                        </strong>
                      </div>
                      <div>
                        <span>Reverse Charge</span>
                        <strong>{payload.taxConfig.reverseCharge ? "Applicable" : "No"}</strong>
                      </div>
                    </div>
                  </div>
                )}

                {!!payload.notes && (
                  <div className="info-card">
                    <h5>Notes</h5>
                    <p>{payload.notes}</p>
                  </div>
                )}

                {!!payload.terms && (
                  <div className="info-card">
                    <h5>Terms &amp; Conditions</h5>
                    <p>{payload.terms}</p>
                  </div>
                )}
              </div>

              <div className="summary">
                <div className="summary-row">
                  <span>Sub Total</span>
                  <span>Rs. {payload.subTotal}</span>
                </div>

                {payload.gst && (
                  <div className="summary-row">
                    <span>GST ({payload.gst.percentage}%)</span>
                    <span>Rs. {payload.gst.amount}</span>
                  </div>
                )}

                <div className="summary-row total">
                  <span>Total</span>
                  <span>Rs. {payload.grandTotal}</span>
                </div>

                {payload.meta?.showTotalInWords && (
                  <div className="summary-words">
                    <span>Total In Words</span>
                    <strong>{totalInWords}</strong>
                  </div>
                )}
              </div>
            </div>

            {(payload.additionalFields?.length || payload.signature) && (
              <div className="footer-strip">
                {!!payload.additionalFields?.length && (
                  <div className="additional-card">
                    <h5>Additional Info</h5>
                    {payload.additionalFields.map((field: any, index: number) => (
                      <p key={`${field.label}-${index}`}>
                        <span>{field.label || "Field"}</span>
                        <strong>{field.value || "-"}</strong>
                      </p>
                    ))}
                  </div>
                )}

                {payload.signature?.dataUrl || payload.signature?.url ? (
                  <div className="signature-card">
                    <span>Authorized Signature</span>
                    <img
                      src={payload.signature.dataUrl || payload.signature.url}
                      alt="Signature"
                    />
                  </div>
                ) : null}
              </div>
            )}

            <div className="design-impact">
              <div className="design-impact__header">Custom Design</div>
              <div className="design-impact__body">
                <div>
                  <span>Accent Color</span>
                  <strong>{accentColor}</strong>
                </div>
                <div>
                  <span>Typography</span>
                  <strong>{payload.design?.headingFont || "Open Sans"}</strong>
                </div>
                <div>
                  <span>Language</span>
                  <strong>{payload.design?.language || "English"}</strong>
                </div>
                <div>
                  <span>Heading Size</span>
                  <strong>{headingFontSize}px</strong>
                </div>
                <div>
                  <span>Body Size</span>
                  <strong>{bodyFontSize}px</strong>
                </div>
                <div>
                  <span>Paper</span>
                  <strong>{payload.design?.paperSize || "A4"}</strong>
                </div>
              </div>
            </div>
          </div>

          {hasChanges && (
            <p className="preview-note">
              Changes have been detected in the quotation. Please save the updates before downloading or printing.
            </p>
          )}

          <div className="preview-actions">
            <button
              type="button"
              className="edit-btn"
              disabled={isActionBusy}
              onClick={() =>
                navigate("/quotation", {
                  state: {
                    quotation: data,
                    originalQuotation,
                  },
                })
              }
            >
              Edit
            </button>

            {hasChanges && (
              <button
                type="button"
                className="update-btn"
                onClick={() => void handleUpdate()}
                disabled={isActionBusy}
              >
                {activeAction === "update" ? "Updating..." : "Update Quote"}
              </button>
            )}

            <button
              type="button"
              className="print-btn"
              onClick={() => void handlePrint()}
              disabled={!authChecked || isActionBusy}
            >
              {activeAction === "print"
                ? "Loading..."
                : !authChecked
                  ? "Checking..."
                  : !isAuthenticated
                    ? "Login to Print"
                    : hasChanges || !hasExistingQuote
                      ? "Save / Print"
                      : hasExistingQuote
                        ? "Print"
                        : "Save / Print"}
            </button>

            <button
              type="button"
              className="download-btn"
              onClick={() => void handleDownload()}
              disabled={hasChanges || isActionBusy}
            >
              {activeAction === "download"
                ? "Loading..."
                : !authChecked
                  ? "Checking..."
                  : hasExistingQuote
                    ? "Download PDF"
                    : "Finalize & Download"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
