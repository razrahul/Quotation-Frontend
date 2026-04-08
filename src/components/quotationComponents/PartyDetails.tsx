import type { Party } from "../../types/quotation.types";
import {
  COUNTRY_OPTIONS,
  INDIAN_STATE_OPTIONS,
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
  const usesStateSelect = value.country === "India";

  return (
    <div className="party-card">
      <div className="header">{title}</div>

      <div className="field-row">
        <label>Country</label>
        <select
          className="party-input"
          value={value.country}
          onChange={(event) => onChange("country", event.target.value)}
        >
          {COUNTRY_OPTIONS.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
      </div>

      <div className="field-row">
        <label>Name</label>
        <div className="field-control">
          <input
            className="party-input"
            placeholder={
              isClient ? "Clients Business Name (required)" : "Your Business Name (required)"
            }
            required
            value={value.name}
            onChange={(event) => onChange("name", event.target.value)}
          />
          {!value.name && (
            <span className="error-text">
              {isClient ? "Clients business name is required." : "Your business name is required."}
            </span>
          )}
        </div>
      </div>

      <div className="field-row">
        <label>Phone</label>
        <div className="phone-field">
          <span className="country-code">{phoneCode}</span>
          <input
            className="party-input"
            placeholder={isClient ? "Clients Phone" : "Your Phone"}
            value={value.phone ?? ""}
            onChange={(event) => onChange("phone", event.target.value)}
          />
        </div>
      </div>

      <div className="field-row">
        <label>GSTIN</label>
        <input
          className="party-input"
          placeholder={isClient ? "Clients GSTIN (optional)" : "Your GSTIN (optional)"}
          value={value.gstin ?? ""}
          onChange={(event) => onChange("gstin", event.target.value || null)}
        />
      </div>

      <div className="field-row">
        <label>Address</label>
        <textarea
          className="party-input textarea"
          placeholder={isClient ? "Clients Address (optional)" : "Your Address (optional)"}
          value={value.address ?? ""}
          onChange={(event) => onChange("address", event.target.value)}
        />
      </div>

      <div className="field-row">
        <label>City</label>
        <input
          className="party-input"
          placeholder={isClient ? "Clients City" : "Your City"}
          value={value.city ?? ""}
          onChange={(event) => onChange("city", event.target.value)}
        />
      </div>

      <div className="field-row">
        <label>State</label>
        {usesStateSelect ? (
          <select
            className="party-input"
            value={value.state ?? ""}
            onChange={(event) => onChange("state", event.target.value)}
          >
            <option value="">Select State</option>
            {INDIAN_STATE_OPTIONS.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        ) : (
          <input
            className="party-input"
            placeholder={isClient ? "Clients State" : "Your State"}
            value={value.state ?? ""}
            onChange={(event) => onChange("state", event.target.value)}
          />
        )}
      </div>
    </div>
  );
}
