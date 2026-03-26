import type { Party } from "../../types/quotation.types";
import {
  COUNTRY_OPTIONS,
  getCountryPhoneCode,
} from "../../utils/countryOptions";
import "./PartyDetails.scss";

type Props = {
  title: string;
  value: Party;
  onChange: (key: keyof Party, val: any) => void;
};

export default function PartyDetails({ title, value, onChange }: Props) {
  const isClient = title === "Client Details";
  const phoneCode = getCountryPhoneCode(value.country);

  return (
    <div className="party-card">
      <div className="header">{title}</div>

      {/* Country */}
      <div className="field-row">
        <label>Country :</label>
        <select
          className="party-input"
          value={value.country}
          onChange={(e) => onChange("country", e.target.value)}
        >
          {COUNTRY_OPTIONS.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
      </div>

      {/* Name */}
      <div className="field-row">
        <label>Name :</label>
        <div className="field-control">
          <input
            className="party-input"
            placeholder={
              isClient
                ? "Clients Business Name (required)"
                : "Your Business Name (required)"
            }
            required
            value={value.name}
            onChange={(e) => onChange("name", e.target.value)}
          />
          {!value.name && (
            <span className="error-text">Your Business Name is required.</span>
          )}
        </div>
      </div>

      {/* Phone */}
      <div className="field-row">
        <label>Phone :</label>
        <div className="phone-field">
          <span className="country-code">{phoneCode}</span>
          <input
            className="party-input"
            placeholder={
              isClient ? "Clients Phone (optional)" : "Your Phone (optional)"
            }
            value={value.phone ?? ""}
            onChange={(e) => onChange("phone", e.target.value)}
          />
        </div>
      </div>

      {/* GSTIN */}
      <div className="field-row">
        <label>GSTIN :</label>
        <input
          className="party-input"
          placeholder={
            isClient ? "Clients GSTIN (optional)" : "Your GSTIN (optional)"
          }
          value={value.gstin ?? ""}
          onChange={(e) => onChange("gstin", e.target.value || null)}
        />
      </div>

      {/* Address */}
      <div className="field-row">
        <label>Address :</label>
        <input
          className="party-input"
          placeholder={
            isClient ? "Clients Address (optional)" : "Your Address (optional)"
          }
          value={value.address ?? ""}
          onChange={(e) => onChange("address", e.target.value)}
        />
      </div>

      {/* City */}
      <div className="field-row">
        <label>City :</label>
        <input
          className="party-input"
          placeholder={
            isClient ? "Clients City (optional)" : "Your City (optional)"
          }
          value={value.city ?? ""}
          onChange={(e) => onChange("city", e.target.value)}
        />
      </div>

      {/* State */}
      <div className="field-row">
        <label>State :</label>
        <input
          className="party-input"
          placeholder={
            isClient ? "Clients State (optional)" : "Your State (optional)"
          }
          value={value.state ?? ""}
          onChange={(e) => onChange("state", e.target.value)}
        />
      </div>
    </div>
  );
}
