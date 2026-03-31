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

function buildComparableQuote(quote: any) {
  if (!quote) return null;

  return {
    quoteName: quote.quoteName || "Quotation",
    quoteNo: quote.quoteNo || "",
    quoteDate: quote.quoteDate || "",
    payload: {
      company: {
        country: quote.payload?.company?.country || "",
        name: quote.payload?.company?.name || "",
        phone: quote.payload?.company?.phone || "",
        gstin: quote.payload?.company?.gstin || null,
        address: quote.payload?.company?.address || "",
        city: quote.payload?.company?.city || "",
        state: quote.payload?.company?.state || "",
      },
      client: {
        country: quote.payload?.client?.country || "",
        name: quote.payload?.client?.name || "",
        phone: quote.payload?.client?.phone || "",
        gstin: quote.payload?.client?.gstin || null,
        address: quote.payload?.client?.address || "",
        city: quote.payload?.client?.city || "",
        state: quote.payload?.client?.state || "",
      },
      items: (quote.payload?.items || []).map((item: any) => ({
        name: item.name || "",
        qty: Number(item.qty || 0),
        unit: item.unit || "",
        rate: Number(item.rate || 0),
        amount: Number(item.amount || 0),
      })),
      gst: quote.payload?.gst
        ? {
            percentage: Number(quote.payload.gst.percentage || 0),
            amount: Number(quote.payload.gst.amount || 0),
          }
        : null,
      discount: quote.payload?.discount
        ? {
            type: quote.payload.discount.type || "FLAT",
            value: Number(quote.payload.discount.value || 0),
            amount: Number(quote.payload.discount.amount || 0),
          }
        : null,
      subTotal: Number(quote.payload?.subTotal || 0),
      grandTotal: Number(quote.payload?.grandTotal || 0),
      terms: quote.payload?.terms || "",
      notes: quote.payload?.notes || "",
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
        <div className="preview-container">
          <div className="preview-header">
            <div>
              <h2>{quoteName}</h2>
              <p>No: {quoteNo}</p>
              <p>Date: {quoteDate}</p>
            </div>
          </div>

          <div className="party-grid">
            <div className="party-card">
              <h4>Your Details</h4>
              <p>
                <strong>{payload.company.name}</strong>
              </p>
              <p>{payload.company.address}</p>
              <p>
                {payload.company.city}, {payload.company.state}
              </p>
              <p>{payload.company.phone}</p>
            </div>

            <div className="party-card">
              <h4>Client Details</h4>
              <p>
                <strong>{payload.client.name}</strong>
              </p>
              <p>{payload.client.address}</p>
              <p>
                {payload.client.city}, {payload.client.state}
              </p>
              <p>{payload.client.phone}</p>
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
          </div>

          {hasChanges && (
            <p className="preview-note">
              Changes have been detected in the quotation. Please save the
              updates before downloading.
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
