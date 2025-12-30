import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./QuotationPreview.scss";

export default function QuotationPreview() {
  const isAuth = useSelector((s: any) => s.auth?.isAuthenticated);
  const navigate = useNavigate();

  return (
    <div className="preview-page">
      {!isAuth && (
        <div className="overlay">
          <button onClick={() => navigate("/login")}>Login to Download</button>
        </div>
      )}

      <div className="a4">
        <h2>Quotation Preview</h2>
        {/* yahin quotation ka layout render karoge */}
      </div>
    </div>
  );
}
