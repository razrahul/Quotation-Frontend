import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import type { QuotationFormState, QuoteField } from "../../types/quotation.types";

import "./QuotationHeader.scss";

type HeaderValue = Pick<
  QuotationFormState,
  "quoteName" | "quoteNo" | "quoteDate" | "validUntil" | "headerFields"
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

  const handleTitleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Escape") {
      setIsEditingTitle(false);
    }
  };

  const updateField = (index: number, patch: Partial<QuoteField>) => {
    const nextFields = value.headerFields.map((field, fieldIndex) =>
      fieldIndex === index ? { ...field, ...patch } : field,
    );
    onChange("headerFields", nextFields);
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
            onChange={(event) => onChange("quoteName", event.target.value)}
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
            onChange={(event) => onChange("quoteNo", event.target.value)}
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
            onChange={(event) => onChange("quoteDate", event.target.value)}
          />
        </div>

        <div className="field">
          <label>Valid Till</label>
          <input
            type="date"
            className="quote-input"
            value={value.validUntil}
            onChange={(event) => onChange("validUntil", event.target.value)}
          />
        </div>

        {value.headerFields.map((field, index) => (
          <div className="field field-dual" key={`header-field-${index}`}>
            <input
              className="quote-input"
              placeholder="Field Name"
              value={field.label}
              onChange={(event) => updateField(index, { label: event.target.value })}
            />
            <div className="field-inline">
              <input
                className="quote-input"
                placeholder="Value"
                value={field.value}
                onChange={(event) => updateField(index, { value: event.target.value })}
              />
              <button
                type="button"
                className="remove-field"
                onClick={() =>
                  onChange(
                    "headerFields",
                    value.headerFields.filter((_, fieldIndex) => fieldIndex !== index),
                  )
                }
              >
                x
              </button>
            </div>
          </div>
        ))}

        <div className="links">
          <button
            type="button"
            onClick={() =>
              onChange("headerFields", [...value.headerFields, { label: "", value: "" }])
            }
          >
            + Add Custom Fields
          </button>
        </div>
      </div>
    </div>
  );
}
