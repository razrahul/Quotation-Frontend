
export type BrandConfigType = {
    id: string; // "techtime" | "nexquote" | "gst" | "invoice" | "smm"
    companyName: string;
    websiteName: string;
    websiteUrl: string;
    supportEmail: string;
    phone: string;
    address: string;
    countryState: string;
    effectiveYear: number;
}

export const BRAND_CONFIGS: BrandConfigType[] = [
    {
        id: "techtime",
        companyName: "TechTime Software",
        websiteName: "TechTime Software",
        websiteUrl: "https://techtime.software",
        supportEmail: "support@techtimesoftware.com",
        phone: "+91 9876543210",
        address: "123 Business Avenue, Suite 456, City, Country",
        countryState: "India",
        effectiveYear: 2025
    },
    {
        id: "nexquote",
        companyName: "TechTime Software",
        websiteName: "NexQuote",
        websiteUrl: "https://techtime.software/nexquote",
        supportEmail: "support@nexquote.com",
        phone: "+91 9876543210",
        address: "123 Business Avenue, Suite 456, City, Country",
        countryState: "India",
        effectiveYear: 2025
    },
    {
        id: "gst",
        companyName: "TechTime Software",
        websiteName: "GST Calculator",
        websiteUrl: "https://techtime.software/gst-calculator",
        supportEmail: "support@techtimesoftware.com",
        phone: "+91 9876543210",
        address: "123 Business Avenue, Suite 456, City, Country",
        countryState: "India",
        effectiveYear: 2025
    },
    {
        id: "invoice",
        companyName: "TechTime Software",
        websiteName: "Invoice Generator",
        websiteUrl: "https://techtime.software/invoice-generator",
        supportEmail: "support@techtimesoftware.com",
        phone: "+91 9876543210",
        address: "123 Business Avenue, Suite 456, City, Country",
        countryState: "India",
        effectiveYear: 2025
    },
    {
        id: "smm",
        companyName: "TechTime Software",
        websiteName: "SMM Panel",
        websiteUrl: "https://techtime.software/smm-panel",
        supportEmail: "support@techtimesoftware.com",
        phone: "+91 9876543210",
        address: "123 Business Avenue, Suite 456, City, Country",
        countryState: "India",
        effectiveYear: 2025
    }
];

export const getBrandConfig = (id: string): BrandConfigType => {
    return BRAND_CONFIGS.find(config => config.id === id) || BRAND_CONFIGS[0];
};

export const NEXQUOTE_CONFIG = BRAND_CONFIGS[1];
    
    