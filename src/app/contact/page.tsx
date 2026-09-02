import type { Metadata } from "next";
import { BUSINESS, WHATSAPP_MESSAGES, SEO } from "@/lib/constants";
import { whatsappLink, phoneLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${BUSINESS.name}. Visit us at ${BUSINESS.location.address} or reach us on WhatsApp. Available 7 days a week.`,
  openGraph: {
    title: `Contact ${BUSINESS.name}`,
    description: `Visit us at ${BUSINESS.location.address} or reach us on WhatsApp. Available 7 days a week.`,
    url: `${SEO.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="bg-stone-900 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">
            The fastest way to reach us is on WhatsApp — we typically respond
            within minutes. You&apos;re also welcome to call or visit our office.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-stone-800 mb-6">
                  Contact Details
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">Office Address</h3>
                      <p className="text-stone-600">{BUSINESS.location.full}</p>
                    </div>
                  </div>

                  {/* Phone Primary */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">Phone (Primary)</h3>
                      <a href={phoneLink()} className="text-brand-600 hover:text-brand-700 transition-colors">
                        {BUSINESS.phone.primary}
                      </a>
                    </div>
                  </div>

                  {/* Phone Secondary */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">Phone (Secondary)</h3>
                      <a href={phoneLink(BUSINESS.phone.secondaryClean)} className="text-brand-600 hover:text-brand-700 transition-colors">
                        {BUSINESS.phone.secondary}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">WhatsApp</h3>
                      <a
                        href={whatsappLink(WHATSAPP_MESSAGES.general)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 transition-colors"
                      >
                        Message us on WhatsApp →
                      </a>
                      <p className="text-sm text-stone-500 mt-1">
                        Fastest way to reach us. We respond within minutes.
                      </p>
                    </div>
                  </div>

                  {/* Facebook */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">Facebook</h3>
                      <a
                        href={BUSINESS.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Visit our Facebook Page →
                      </a>
                      <p className="text-sm text-stone-500 mt-1">
                        {BUSINESS.stats.followers} followers · {BUSINESS.stats.recommendRate} recommend
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">Availability</h3>
                      <p className="text-stone-600">{BUSINESS.hours}</p>
                      <p className="text-sm text-stone-500 mt-1">
                        We don&apos;t have rigid office hours. Reach out any day and we&apos;ll
                        respond as quickly as we can — property needs don&apos;t follow a 9-to-5.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-800 mb-6">
                Find Us
              </h2>
              <div className="rounded-xl overflow-hidden border border-stone-200 aspect-square lg:aspect-[4/5]">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.location.full)}&z=17&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AL-Usmania Property office location"
                />
              </div>
              <p className="mt-4 text-sm text-stone-500">
                {BUSINESS.location.full}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
