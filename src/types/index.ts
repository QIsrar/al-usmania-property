// ─── Property Types ───────────────────────────────────────────────

export type PropertyPurpose = "sale" | "rent";

export type PropertyType =
  | "house"
  | "flat"
  | "plot"
  | "commercial"
  | "portion";

export type PropertyStatus = "new" | "hot" | "reduced" | "none";

export interface Property {
  id: string;
  title: string;
  slug: string;
  purpose: PropertyPurpose;
  type: PropertyType;
  price: number;
  currency: string;
  areaSize: number;
  areaUnit: "marla" | "kanal" | "sqft";
  beds: number;
  baths: number;
  location: string;
  sector: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  amenities: string[];
  images: string[];
  status: PropertyStatus;
  featured: boolean;
  createdAt: string;
}

// ─── Area Types ───────────────────────────────────────────────────

export interface Area {
  name: string;
  slug: string;
  description: string;
  propertyCount: number;
  image: string;
}

// ─── Testimonial Types ────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  date: string;
}

// ─── Filter Types ─────────────────────────────────────────────────

export interface PropertyFilters {
  purpose: PropertyPurpose | "all";
  type: PropertyType | "all";
  sector: string;
  priceMin: number;
  priceMax: number;
  beds: number;
  sortBy: "newest" | "price-asc" | "price-desc";
}
