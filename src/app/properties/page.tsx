import type { Metadata } from "next";
import { PropertiesContent } from "./PropertiesContent";
import { SEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Properties for Sale & Rent in Abbottabad",
  description:
    "Browse houses, flats, plots, and commercial properties for sale and rent in Abbottabad. Filter by area, price, and property type. AL-Usmania Property.",
  keywords: [
    "property for sale Abbottabad",
    "house for rent Abbottabad",
    "flat for rent Abbottabad",
    "plot for sale Abbottabad",
    "commercial property Abbottabad",
  ],
  openGraph: {
    title: "Properties for Sale & Rent in Abbottabad | AL-Usmania Property",
    description:
      "Browse houses, flats, plots, and commercial properties in Abbottabad.",
    url: `${SEO.url}/properties`,
  },
};

export default function PropertiesPage() {
  return <PropertiesContent />;
}
