import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import "./QuotationPreview.scss";
// import api from "../../services/axios";
import { finalizeAndDownloadQuote } from "../../redux/action/quotationActions";
import Navbar from "../../components/layout/Navbar/Navbar";

export default function QuotationPreview() {
  const location = useLocation();
  const navigate = useNavigate();

  const { isAuthenticated, authChecked } = useSelector(
    (state: RootState) => state.auth,
  );

  const { loading } = useSelector((state: RootState) => state.quotation);

  const dispatch = useDispatch<AppDispatch>();

  const data = location.state.quotation;

  if (!data) {
    return (
      <div className="preview-page">
        <p>No quotation data found.</p>
        <button onClick={() => navigate("/")}>Create New</button>
      </div>
    );
  }

  const { quoteName = "Quotation", quoteNo, quoteDate, payload } = data;

  const handleDownload = async () => {
    // auth status abhi check hi nahi hua
    if (!authChecked) return;

    if (!isAuthenticated) {
      navigate("/login", {
        state: {
          redirectTo: "/preview",
          quotation: data,
        },
      });
      return;
    }

    // const res = await api.post("/quote/finalize", data, {
    //   responseType: "blob",
    // });

    // const url = window.URL.createObjectURL(new Blob([res.data]));
    // const a = document.createElement("a");
    // a.href = url;
    // a.download = `${quoteNo}.pdf`;
    // a.click();

    dispatch(finalizeAndDownloadQuote(data));
  };

  return (
    <>
      <Navbar />
      <div className="preview-page">
        <div className="preview-container">
          {/* HEADER */}
          <div className="preview-header">
            <div>
              <h2>{quoteName}</h2>
              <p>No: {quoteNo}</p>
              <p>Date: {quoteDate}</p>
            </div>
          </div>

          {/* PARTY SECTION */}
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

          {/* ITEMS TABLE */}
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
              {payload.items.map((item: any, i: number) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.unit}</td>
                  <td>₹ {item.rate}</td>
                  <td>₹ {item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* SUMMARY */}
          <div className="summary">
            <div className="summary-row">
              <span>Sub Total</span>
              <span>₹ {payload.subTotal}</span>
            </div>

            {payload.gst && (
              <div className="summary-row">
                <span>GST ({payload.gst.percentage}%)</span>
                <span>₹ {payload.gst.amount}</span>
              </div>
            )}

            <div className="summary-row total">
              <span>Total</span>
              <span>₹ {payload.grandTotal}</span>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="preview-actions">
            <button className="edit-btn" onClick={() => navigate(-1)}>
              Edit
            </button>

            <button className="download-btn" onClick={handleDownload}>
              {loading
                ? "Loading..."
                : !authChecked
                  ? "Checking..."
                  : "Download PDF"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
