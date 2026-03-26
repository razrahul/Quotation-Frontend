import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import type { QuotationFormState } from "../../types/quotation.types";

import "./QuotationHeader.scss";

type HeaderValue = Pick<
  QuotationFormState,
  "quoteName" | "quoteNo" | "quoteDate"
>;

type Props = {
  value: HeaderValue;
  onChange: (key: keyof HeaderValue, val: any) => void;
};

export default function QuotationHeader({ value, onChange }: Props) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const displayTitle = value.quoteName.trim() || "Quotation";
  const titleInputWidth = `${Math.max(displayTitle.length, 10)}ch`;

  useEffect(() => {
    if (isEditingTitle) {
      titleInputRef.current?.focus();
      titleInputRef.current?.select();
    }
  }, [isEditingTitle]);

  const handleTitleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "Escape") {
      setIsEditingTitle(false);
    }
  };

  return (
    <div className="quotation-header">
      <div className="title">
        {isEditingTitle ? (
          <input
            ref={titleInputRef}
            type="text"
            className="title-input"
            value={value.quoteName}
            placeholder="Quotation"
            maxLength={100}
            style={{ width: titleInputWidth }}
            onChange={(e) => onChange("quoteName", e.target.value)}
            onBlur={() => setIsEditingTitle(false)}
            onKeyDown={handleTitleKeyDown}
          />
        ) : (
          <span>{displayTitle}</span>
        )}
        <button
          type="button"
          className="edit"
          aria-label="Edit quotation title"
          onClick={() => setIsEditingTitle(true)}
        >
          {"\u270E"}
        </button>
      </div>
      <div className="fields">
        <div className="field">
          <label>
            Quotation No <span className="required">*</span>
          </label>
          <input
            className="quote-input"
            required
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
          <span>+ Add due date</span>
          <span>+ Add Custom Fields</span>
        </div>
      </div>
    </div>
  );
}
