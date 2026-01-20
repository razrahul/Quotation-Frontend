import type { QuotationFormState } from "../../types/quotation.types";

import "./QuotationHeader.scss";

type HeaderValue = Pick<QuotationFormState, "quoteNo" | "quoteDate">;

type Props = {
  value: HeaderValue;
  onChange: (key: keyof HeaderValue, val: any) => void;
};

export default function QuotationHeader({ value, onChange }: Props) {
  return (
    <div className="quotation-header">
      <div className="title">
        Quotation <span className="edit">✎</span>
      </div>
      <div className="fields">
        <div className="field">
          <label>
            Quotation No <span className="required">*</span>
          </label>
          <input
            className="quote-input"
            value={value.quoteNo}
            onChange={(e) => onChange("quoteNo", e.target.value)}
          />
        </div>

        <div className="field">
          <label>
            Quotation Date <span className="required">*</span>
          </label>
          <input
            type="date"
            className="quote-input"
            value={value.quoteDate}
            onChange={(e) => onChange("quoteDate", e.target.value)}
          />
        </div>

        <div className="links">
          <span>＋ Add due date</span>
          <span>＋ Add Custom Fields</span>
        </div>
      </div>
    </div>
  );
}
