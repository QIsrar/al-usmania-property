import { Property } from "@/types";
import { BUSINESS, WHATSAPP_MESSAGES } from "@/lib/constants";
import { whatsappLink, phoneLink, formatPrice, formatRentPrice } from "@/lib/utils";

interface EnquiryPanelProps {
  property: Property;
}

export function EnquiryPanel({ property }: EnquiryPanelProps) {
  const priceDisplay =
    property.purpose === "rent"
      ? formatRentPrice(property.price)
      : formatPrice(property.price, true);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 sticky top-24">
      {/* Price */}
      <div className="mb-6">
        <p className="text-2xl font-bold text-stone-900">{priceDisplay}</p>
        <p className="text-sm text-stone-500 mt-1">
          {property.purpose === "rent" ? "Monthly Rent" : "Asking Price"}
        </p>
      </div>

      {/* WhatsApp CTA */}
      <a
        href={whatsappLink(WHATSAPP_MESSAGES.enquiry(property.title))}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20BD5C] transition-colors duration-200 shadow-sm mb-3"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Enquire on WhatsApp
      </a>

      {/* Schedule Viewing */}
      <a
        href={whatsappLink(WHATSAPP_MESSAGES.viewing(property.title))}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-brand-500 text-white font-medium rounded-lg hover:bg-brand-600 transition-colors duration-200 mb-3"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
        Request a Viewing
      </a>

      {/* Call */}
      <a
        href={phoneLink()}
        className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-stone-100 text-stone-700 font-medium rounded-lg hover:bg-stone-200 transition-colors duration-200"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
        Call {BUSINESS.phone.primary}
      </a>

      {/* Agent Info */}
      <div className="mt-6 pt-6 border-t border-stone-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
            <span className="text-brand-700 font-bold text-lg">QS</span>
          </div>
          <div>
            <p className="font-semibold text-stone-800">{BUSINESS.owner}</p>
            <p className="text-sm text-stone-500">{BUSINESS.name}</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-stone-400 flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {BUSINESS.hours} — Typically responds within minutes
        </p>
      </div>
    </div>
  );
}
