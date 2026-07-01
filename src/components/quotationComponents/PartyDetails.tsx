import { useState, useRef, useEffect } from "react";

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

  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isStateOpen, setIsStateOpen] = useState(false);

  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const stateDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryOpen(false);
      }
      if (
        stateDropdownRef.current &&
        !stateDropdownRef.current.contains(event.target as Node)
      ) {
        setIsStateOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedCountry = COUNTRY_OPTIONS.find((c) => c.value === value.country);
  const countryLabel = selectedCountry ? selectedCountry.label : "Select Country";
  const stateLabel = value.state || "Select State";

  const hasOpenDropdown = isCountryOpen || isStateOpen;

  return (
    <div className={`party-card ${hasOpenDropdown ? "has-open-dropdown" : ""}`}>
      <div className="header">{title}</div>

      <div className="field-row">
        <label>Country</label>
        <div className="party-select-container" ref={countryDropdownRef}>
          <div
            className="party-select-trigger"
            onClick={() => setIsCountryOpen((prev) => !prev)}
          >
            <span className="selected-value">{countryLabel}</span>
            <span className={`arrow ${isCountryOpen ? "arrow--open" : ""}`}>▼</span>
          </div>
          {isCountryOpen && (
            <div className="custom-dropdown-list">
              {COUNTRY_OPTIONS.map((countryOption) => (
                <div
                  key={countryOption.value}
                  className={`custom-dropdown-item ${value.country === countryOption.value ? "active" : ""}`}
                  onClick={() => {
                    onChange("country", countryOption.value);
                    setIsCountryOpen(false);
                  }}
                >
                  {countryOption.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="field-row">
        <label>Name</label>
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
            onChange={(event) => onChange("name", event.target.value)}
          />
          {!value.name && (
            <span className="error-text">
              {isClient
                ? "Clients business name is required."
                : "Your business name is required."}
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
          placeholder={
            isClient ? "Clients GSTIN (optional)" : "Your GSTIN (optional)"
          }
          value={value.gstin ?? ""}
          onChange={(event) => onChange("gstin", event.target.value || null)}
        />
      </div>

      <div className="field-row">
        <label>Address</label>
        <textarea
          className="party-input textarea"
          placeholder={
            isClient ? "Clients Address (optional)" : "Your Address (optional)"
          }
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
          <div className="party-select-container" ref={stateDropdownRef}>
            <div
              className="party-select-trigger"
              onClick={() => setIsStateOpen((prev) => !prev)}
            >
              <span className="selected-value">{stateLabel}</span>
              <span className={`arrow ${isStateOpen ? "arrow--open" : ""}`}>▼</span>
            </div>
            {isStateOpen && (
              <div className="custom-dropdown-list">
                {INDIAN_STATE_OPTIONS.map((stateOption) => (
                  <div
                    key={stateOption}
                    className={`custom-dropdown-item ${value.state === stateOption ? "active" : ""}`}
                    onClick={() => {
                      onChange("state", stateOption);
                      setIsStateOpen(false);
                    }}
                  >
                    {stateOption}
                  </div>
                ))}
              </div>
            )}
          </div>
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
