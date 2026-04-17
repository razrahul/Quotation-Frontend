import type { ChangeEvent } from "react";

import type { QuoteAsset } from "../../types/quotation.types";

import "./UploadLogo.scss";

type Props = {
  label?: string;
  helperText?: string;
  value: QuoteAsset | null;
  onChange: (value: QuoteAsset | null) => void;
};

export default function UploadLogo({
  label = "Add Company Logo",
  helperText = "Up to 100x80 px",
  value,
  onChange,
}: Props) {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      onChange({
        name: file.name,
        file,
        dataUrl: typeof reader.result === "string" ? reader.result : undefined,
        provider: "inline",
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <label className="upload-logo">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {value?.dataUrl || value?.url ? (
        <div className="preview-wrap">
          <img src={value.dataUrl || value.url} alt={value.name || label} />
        </div>
      ) : (
        <div className="icon">+</div>
      )}
      <div>{label}</div>
      <small>{helperText}</small>
      {value && (
        <button
          type="button"
          className="clear-btn"
          onClick={(event) => {
            event.preventDefault();
            onChange(null);
          }}
        >
          Remove
        </button>
      )}
    </label>
  );
}
