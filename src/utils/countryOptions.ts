export type CountryOption = {
  value: string;
  label: string;
  phoneCode: string;
};

export const COUNTRY_OPTIONS: CountryOption[] = [
  { value: "India", label: "India", phoneCode: "+91" },
  { value: "United States", label: "United States", phoneCode: "+1" },
  { value: "United Kingdom", label: "United Kingdom", phoneCode: "+44" },
  { value: "Canada", label: "Canada", phoneCode: "+1" },
  { value: "Australia", label: "Australia", phoneCode: "+61" },
  { value: "Germany", label: "Germany", phoneCode: "+49" },
  { value: "United Arab Emirates", label: "United Arab Emirates", phoneCode: "+971" },
  { value: "Singapore", label: "Singapore", phoneCode: "+65" },
  { value: "Japan", label: "Japan", phoneCode: "+81" },
  { value: "South Africa", label: "South Africa", phoneCode: "+27" },
];

export const INDIAN_STATE_OPTIONS = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
  "Other Territory",
];

export const LANGUAGE_OPTIONS = ["English", "Hindi"];
export const FONT_OPTIONS = [
  "Open Sans",
  "Poppins",
  "Lora",
  "Merriweather",
  "Montserrat",
  "Source Sans Pro",
];

export const getCountryPhoneCode = (countryName: string) =>
  COUNTRY_OPTIONS.find((country) => country.value === countryName)?.phoneCode || "+91";

export const formatPhoneWithCountryCode = (
  countryName: string,
  phoneNumber?: string | null,
) => {
  const trimmedPhone = phoneNumber?.trim() ?? "";

  if (!trimmedPhone) {
    return "";
  }

  return `${getCountryPhoneCode(countryName)} ${trimmedPhone}`;
};

export const stripCountryPhoneCode = (
  countryName: string,
  phoneNumber?: string | null,
) => {
  const trimmedPhone = phoneNumber?.trim() ?? "";

  if (!trimmedPhone) {
    return "";
  }

  const phoneCode = getCountryPhoneCode(countryName);

  if (trimmedPhone.startsWith(`${phoneCode} `)) {
    return trimmedPhone.slice(phoneCode.length + 1);
  }

  if (trimmedPhone.startsWith(phoneCode)) {
    return trimmedPhone.slice(phoneCode.length).trim();
  }

  return trimmedPhone;
};
