import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { properties, getPropertyBySlug, getSimilarProperties } from "@/data/properties";
import { PhotoGallery } from "@/components/ui/PhotoGallery";
import { EnquiryPanel } from "@/components/ui/EnquiryPanel";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { Badge } from "@/components/ui/Badge";
import { formatPrice, formatRentPrice, timeAgo, googleMapsLink } from "@/lib/utils";
import { PROPERTY_TYPE_LABELS, SEO } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};

  const priceStr =
    property.purpose === "rent"
      ? formatRentPrice(property.price)
      : formatPrice(property.price, true);

  return {
    title: `${property.title} | ${priceStr}`,
    description: property.description.slice(0, 160),
    openGraph: {
      title: `${property.title} - ${priceStr} | AL-Usmania Property`,
      description: property.description.slice(0, 160),
      url: `${SEO.url}/properties/${property.slug}`,
      images: property.images[0]
        ? [{ url: property.images[0], width: 1200, height: 630 }]
        : undefined,
    },
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const similarProperties = getSimilarProperties(property, 3);

  const priceDisplay =
    property.purpose === "rent"
      ? formatRentPrice(property.price)
      : formatPrice(property.price, true);

  return (
    <div className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="bg-stone-50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-stone-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">
              Home
            </Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <Link href="/properties" className="hover:text-brand-600 transition-colors">
              Properties
            </Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <span className="text-stone-700 truncate max-w-[200px]">
              {property.title}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Photo Gallery */}
            <PhotoGallery images={property.images} title={property.title} />

            {/* Title & Meta */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant={property.purpose === "sale" ? "sale" : "rent"}>
                  {property.purpose === "sale" ? "For Sale" : "For Rent"}
                </Badge>
                {property.status !== "none" && (
                  <Badge variant={property.status}>
                    {property.status === "new"
                      ? "New Listing"
                      : property.status === "hot"
                      ? "Hot Property"
                      : "Price Reduced"}
                  </Badge>
                )}
                <span className="text-sm text-stone-400">
                  Listed {timeAgo(property.createdAt)}
                </span>
              </div>

              <h1 className="font-serif text-2xl lg:text-3xl font-bold text-stone-900 mb-2">
                {property.title}
              </h1>

              <p className="text-stone-500 flex items-center gap-1.5 mb-4">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {property.location}
              </p>

              <p className="text-2xl lg:text-3xl font-bold text-stone-900 lg:hidden">
                {priceDisplay}
              </p>
            </div>

            {/* Key Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {property.beds > 0 && (
                <div className="bg-stone-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-stone-800">{property.beds}</p>
                  <p className="text-sm text-stone-500">Bedrooms</p>
                </div>
              )}
              {property.baths > 0 && (
                <div className="bg-stone-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-stone-800">{property.baths}</p>
                  <p className="text-sm text-stone-500">Bathrooms</p>
                </div>
              )}
              <div className="bg-stone-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-stone-800">
                  {property.areaSize}
                </p>
                <p className="text-sm text-stone-500 capitalize">
                  {property.areaUnit}
                </p>
              </div>
              <div className="bg-stone-50 rounded-xl p-4 text-center">
                <p className="text-lg font-bold text-stone-800 capitalize">
                  {PROPERTY_TYPE_LABELS[property.type]}
                </p>
                <p className="text-sm text-stone-500">Type</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="font-serif text-xl font-bold text-stone-800 mb-4">
                About This Property
              </h2>
              <div className="prose prose-stone max-w-none">
                {property.description.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-stone-600 leading-relaxed mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Amenities */}
            {property.amenities.length > 0 && (
              <div>
                <h2 className="font-serif text-xl font-bold text-stone-800 mb-4">
                  Features & Amenities
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-stone-600"
                    >
                      <svg className="w-4 h-4 text-brand-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Location Map */}
            <div>
              <h2 className="font-serif text-xl font-bold text-stone-800 mb-4">
                Location
              </h2>
              <div className="rounded-xl overflow-hidden border border-stone-200 aspect-[16/9]">
                <iframe
                  src={`https://www.google.com/maps?q=${property.coordinates.lat},${property.coordinates.lng}&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing ${property.location}`}
                />
              </div>
              <a
                href={googleMapsLink(property.coordinates.lat, property.coordinates.lng)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-sm text-brand-600 hover:text-brand-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Sidebar - Enquiry Panel */}
          <div className="lg:col-span-1">
            <EnquiryPanel property={property} />
          </div>
        </div>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-16 pt-12 border-t border-stone-200">
            <h2 className="font-serif text-2xl font-bold text-stone-800 mb-8">
              Similar Properties
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
