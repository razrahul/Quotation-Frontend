import UploadLogo from "../../components/quotation/UploadLogo";
import QuotationMeta from "../../components/quotation/QuotationMeta";
import YourDetails from "../../components/quotation/YourDetails";
import ClientDetails from "../../components/quotation/ClientDetails";
import ItemsTable from "../../components/quotation/ItemsTable";
import TotalSection from "../../components/quotation/TotalSection";
import Button from "../../components/common/Button/Button";
import "./Quotation.scss";

export default function Quotation() {
  return (
    <div className="quotation-page">
      <UploadLogo />
      <QuotationMeta />

      <div className="grid">
        <YourDetails />
        <ClientDetails />
      </div>

      <ItemsTable />
      <TotalSection />

      <div className="actions">
        <Button>Save & Continue</Button>
      </div>
    </div>
  );
}
