//page/Quotation/Quotation.tsx
import UploadLogo from "../../components/quotationComponents/UploadLogo";
// import QuotationHeader from "../../components/quotationComponents/QuotationHeader";
// import PartyDetails from "../../components/quotationComponents/PartyDetails";
// import ItemsTable from "../../components/quotationComponents/ItemsTable";
// import SummarySection from "../../components/quotationComponents/SummarySection";
import Button from "../../components/common/Button/Button";
import "./Quotation.scss";

export default function Quotation() {
  return (
    <div className="quotation-page">
      <div className="quote-header">
        <UploadLogo value={null} onChange={() => undefined} />

        {/* <QuotationHeader /> */}
      </div>

      <div className="grid">
        {/* <PartyDetails /> */}
      </div>

      {/* <ItemsTable /> */}
      {/* <SummarySection /> */}

      <div className="actions">
        <Button>Save & Continue</Button>
      </div>
    </div>
  );
}
