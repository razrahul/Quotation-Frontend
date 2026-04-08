import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import "./QuotationPreview.scss";
import {
  downloadQuoteById,
  finalizeAndDownloadQuote,
  updateQuotation,
} from "../../redux/action/quotationActions";
import Navbar from "../../components/layout/Navbar/Navbar";

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

  const { isAuthenticated, authChecked } = useSelector(
    (state: RootState) => state.auth,
  );
  const { loading } = useSelector((state: RootState) => state.quotation);

  const dispatch = useDispatch<AppDispatch>();

  const data = location.state?.quotation;
  const originalQuotation = location.state?.originalQuotation;

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

  const accentColor = payload.design?.accentColor || "#0f4c81";
  const headingFont = payload.design?.headingFont || "Open Sans";
  const bodyFont = payload.design?.bodyFont || "Open Sans";
  const headingFontSize = payload.design?.headingFontSize || 20;
  const bodyFontSize = payload.design?.bodyFontSize || 14;
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

  const handleDownload = async () => {
    if (!authChecked || hasChanges) return;

    if (!isAuthenticated) {
      requireLogin("download");
      return;
    }

    if (persistedQuoteId) {
      await dispatch(downloadQuoteById(persistedQuoteId, quoteNo));
      return;
    }

    await dispatch(finalizeAndDownloadQuote(data));
  };

  const handleUpdate = async () => {
    if (!persistedQuoteId || !hasChanges || !authChecked) return;

    if (!isAuthenticated) {
      requireLogin("update");
      return;
    }

    const response = await dispatch(updateQuotation(persistedQuoteId, data));
    if (!response?.data) return;

    navigate("/preview", {
      replace: true,
      state: {
        quotation: response.data,
        originalQuotation: response.data,
      },
    });
  };

  return (
    <>
      <Navbar />
      <div className="preview-page">
        <div
          className="preview-container"
          style={{
            ["--accent" as string]: accentColor,
            ["--heading-size" as string]: `${headingFontSize + 14}px`,
            ["--body-size" as string]: `${bodyFontSize}px`,
          }}
        >
          <div className="preview-paper" style={{ fontFamily: bodyFont, fontSize: bodyFontSize }}>
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
                  <h2 style={{ fontFamily: headingFont }}>{quoteName}</h2>
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
              <div className="party-card">
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

              <div className="party-card">
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

            <table className="items-table">
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
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>{item.unit}</td>
                    <td>Rs. {item.rate}</td>
                    <td>Rs. {item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="preview-bottom">
              <div className="supporting-column">
                {payload.taxConfig && (
                  <div className="info-card">
                    <h5>Tax Configuration</h5>
                    <p>Tax Type: {payload.taxConfig.taxType}</p>
                    <p>Place of Supply: {payload.taxConfig.placeOfSupply}</p>
                    <p>
                      GST Type:{" "}
                      {payload.taxConfig.gstMode === "cgst_sgst" ? "CGST & SGST" : "IGST"}
                    </p>
                    <p>
                      Reverse Charge: {payload.taxConfig.reverseCharge ? "Applicable" : "No"}
                    </p>
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
              Quote me changes detect hue hain. Download se pehle update save karna hoga.
            </p>
          )}

          <div className="preview-actions">
            <button
              className="edit-btn"
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
              <button className="update-btn" onClick={handleUpdate}>
                {loading ? "Updating..." : "Update Quote"}
              </button>
            )}

            <button
              className="download-btn"
              onClick={handleDownload}
              disabled={hasChanges}
            >
              {loading
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
