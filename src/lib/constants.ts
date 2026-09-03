// ─── Business Constants ───────────────────────────────────────────

export const BUSINESS = {
  name: "AL-Usmania Property",
  tagline: "Abbottabad Property, Handled Honestly",
  shortTagline: "Honesty · Trust · Local Expertise",
  description:
    "AL-Usmania Property is a trusted residential and commercial property dealer based in Abbottabad, specializing in buying, selling, and renting properties across the city.",
  owner: "Qazi Sajjad & Qazi Sher Khan",
  location: {
    address: "Bara Tower, Shop No. 1, PMA Link Road",
    city: "Abbottabad",
    province: "Khyber Pakhtunkhwa",
    country: "Pakistan",
    full: "Bara Tower, Shop No. 1, PMA Link Road, Abbottabad, KPK, Pakistan",
    coordinates: { lat: 34.1688, lng: 73.2215 },
  },
  phone: {
    primary: "0322-5634463",
    secondary: "0321-9981683",
    primaryClean: "+923225634463",
    secondaryClean: "+923219981683",
  },
  whatsapp: {
    primary: "+923225634463",
    secondary: "+923219981683",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100064006479041",
  },
  hours: "Available 7 Days a Week",
  stats: {
    followers: "1,000+",
    recommendRate: "100%",
    reviews: "100+",
  },
} as const;

// ─── WhatsApp Helpers ─────────────────────────────────────────────

export const WHATSAPP_BASE = "https://wa.me";

export const WHATSAPP_MESSAGES = {
  general:
    "Hi, I'm interested in your property services. I found you through your website.",
  enquiry: (propertyTitle: string) =>
    `Hi, I'm interested in this property: ${propertyTitle}. Could you share more details?`,
  valuation:
    "Hi, I'd like to get a free property valuation. Can you help?",
  sell: "Hi, I'd like to list my property with AL-Usmania Property. Can we discuss?",
  viewing: (propertyTitle: string) =>
    `Hi, I'd like to schedule a viewing for: ${propertyTitle}. When would be a good time?`,
} as const;

// ─── Navigation ───────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Areas", href: "/areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Property Request", href: "/request" },
] as const;

// ─── Property Type Labels ─────────────────────────────────────────

export const PROPERTY_TYPE_LABELS: Record<string, string> = {
  house: "House",
  flat: "Flat / Apartment",
  plot: "Plot / Land",
  commercial: "Commercial",
  portion: "Portion",
};

export const PURPOSE_LABELS: Record<string, string> = {
  sale: "For Sale",
  rent: "For Rent",
};

// ─── Price Ranges for Filters ─────────────────────────────────────

export const PRICE_RANGES = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under 50 Lakh", min: 0, max: 5000000 },
  { label: "50 Lakh – 1 Crore", min: 5000000, max: 10000000 },
  { label: "1 – 2 Crore", min: 10000000, max: 20000000 },
  { label: "2 – 5 Crore", min: 20000000, max: 50000000 },
  { label: "Above 5 Crore", min: 50000000, max: Infinity },
] as const;

export const RENT_PRICE_RANGES = [
  { label: "Any Rent", min: 0, max: Infinity },
  { label: "Under 20,000", min: 0, max: 20000 },
  { label: "20,000 – 40,000", min: 20000, max: 40000 },
  { label: "40,000 – 70,000", min: 40000, max: 70000 },
  { label: "70,000 – 1 Lakh", min: 70000, max: 100000 },
  { label: "Above 1 Lakh", min: 100000, max: Infinity },
] as const;

// ─── SEO ──────────────────────────────────────────────────────────

export const SEO = {
  siteName: "AL-Usmania Property",
  defaultTitle:
    "AL-Usmania Property | Trusted Property Dealer in Abbottabad",
  defaultDescription:
    "Find houses, flats, plots, and commercial properties for sale and rent in Abbottabad. AL-Usmania Property — your honest, trusted local property dealer on PMA Link Road.",
  keywords: [
    "Abbottabad property",
    "property for sale Abbottabad",
    "house for rent Abbottabad",
    "PMA Link Road property",
    "Abbottabad real estate",
    "property dealer Abbottabad",
    "flat for rent Abbottabad",
    "plot for sale Abbottabad",
    "AL-Usmania Property",
    "Khyber Pakhtunkhwa property",
  ],
  url: "https://al-usmania-property.vercel.app",
} as const;
