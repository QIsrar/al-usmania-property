import Link from "next/link";
import Image from "next/image";
import { Property } from "@/types";
import { formatPrice, formatRentPrice, whatsappLink, cn } from "@/lib/utils";
import { WHATSAPP_MESSAGES, PROPERTY_TYPE_LABELS } from "@/lib/constants";
import { Badge } from "./Badge";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const priceDisplay =
    property.purpose === "rent"
      ? formatRentPrice(property.price)
      : formatPrice(property.price, true);

  return (
    <div className="property-card bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 group">
      {/* Image */}
      <Link href={`/properties/${property.slug}`} className="block relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.images[0] || "/images/placeholder-property.jpg"}
          alt={property.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Purpose Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant={property.purpose === "sale" ? "sale" : "rent"}>
            {property.purpose === "sale" ? "For Sale" : "For Rent"}
          </Badge>
        </div>

        {/* Status Badge */}
        {property.status !== "none" && (
          <div className="absolute top-3 right-3">
            <Badge variant={property.status}>
              {property.status === "new"
                ? "New"
                : property.status === "hot"
                ? "Hot"
                : "Reduced"}
            </Badge>
          </div>
        )}

        {/* Price Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-8">
          <p className="text-white font-bold text-lg">{priceDisplay}</p>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link href={`/properties/${property.slug}`}>
          <h3 className="font-semibold text-stone-800 group-hover:text-brand-600 transition-colors line-clamp-1 mb-1">
            {property.title}
          </h3>
        </Link>

        <p className="text-sm text-stone-500 flex items-center gap-1 mb-3">
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          {property.location}
        </p>

        {/* Specs */}
        <div className="flex items-center gap-4 text-sm text-stone-600 mb-4">
          {property.beds > 0 && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              {property.beds} Bed{property.beds > 1 ? "s" : ""}
            </span>
          )}
          {property.baths > 0 && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {property.baths} Bath{property.baths > 1 ? "s" : ""}
            </span>
          )}
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
            {property.areaSize} {property.areaUnit}
          </span>
        </div>

        {/* Type + WhatsApp */}
        <div className="flex items-center justify-between pt-3 border-t border-stone-100">
          <span className="text-xs text-stone-400 uppercase tracking-wider">
            {PROPERTY_TYPE_LABELS[property.type]}
          </span>
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.enquiry(property.title))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
}
