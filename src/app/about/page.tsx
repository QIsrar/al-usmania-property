import type { Metadata } from "next";
import { BUSINESS, WHATSAPP_MESSAGES, SEO } from "@/lib/constants";
import { whatsappLink, phoneLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${BUSINESS.name} and ${BUSINESS.owner} — Abbottabad's trusted local property dealer. Honest dealing, no hidden fees, always available.`,
  openGraph: {
    title: `About ${BUSINESS.name}`,
    description: `Learn about ${BUSINESS.name} and ${BUSINESS.owner} — Abbottabad's trusted local property dealer.`,
    url: `${SEO.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="bg-stone-900 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">
            Our Story
          </h1>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">
            A small, honest property office in Abbottabad — and the people behind it.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-stone prose-lg max-w-none">
            <p className="text-stone-600 leading-relaxed">
              My name is <strong className="text-stone-800">Qazi Sher Khan</strong>, and alongside Qazi Sajjad, we run 
              AL-Usmania Property from our office in Bara Tower on PMA Link Road, Abbottabad. 
              With around 20 years of experience in property-related tasks, we have built a local 
              property business founded on one core principle: <em>honesty</em>.
            </p>

            <p className="text-stone-600 leading-relaxed">
              We have lived and worked in Abbottabad for decades. We know the streets, the sectors, 
              the fair prices, and the people. When someone comes to us looking for a house, a plot, 
              or a rental — we don't just show them the most expensive option. We show them 
              what's right for them. And we tell them the truth about it — the good parts and 
              the not-so-good parts.
            </p>

            <p className="text-stone-600 leading-relaxed">
              That&apos;s how we&apos;ve earned a 100% recommendation rate from every client 
              who&apos;s reviewed us. Not through marketing or flashy advertising, but through simple, 
              straight dealing. No hidden commissions. No inflated prices. No pressure.
            </p>

            <p className="text-stone-600 leading-relaxed">
              Whether you&apos;re buying your first home, looking for a rental for your family, 
              selling a plot, or hunting for a commercial space — we&apos;re here to help. 
              We&apos;re available seven days a week, and the fastest way to reach us is on WhatsApp. 
              Send a message, tell us what you need, and we&apos;ll get back to you — usually within 
              minutes.
            </p>

            <p className="text-stone-600 leading-relaxed">
              Abbottabad is a beautiful city, and we&apos;re proud to help people find their place in 
              it. If you&apos;re looking for property here, we&apos;d be glad to work with you — 
              honestly and openly, just as it should be.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center">
              <span className="text-brand-700 font-bold text-xl">QS</span>
            </div>
            <div>
              <p className="font-semibold text-stone-800">{BUSINESS.owner}</p>
              <p className="text-sm text-stone-500">Founder, {BUSINESS.name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: BUSINESS.stats.recommendRate, label: "Recommend Rate" },
              { value: BUSINESS.stats.followers, label: "Facebook Followers" },
              { value: `${BUSINESS.stats.reviews}`, label: "Client Reviews" },
              { value: "7 Days", label: "Always Available" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl lg:text-4xl font-bold text-brand-600 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-stone-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-stone-800 text-center mb-12">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Honesty",
                desc: "We tell you the truth about every property — the good and the bad. If a property isn't right for you, we'll say so. Our reputation depends on it.",
              },
              {
                title: "Transparency",
                desc: "No hidden fees, no surprise charges. Our commission and terms are discussed upfront before any deal is made. You always know what you're paying for.",
              },
              {
                title: "Local Knowledge",
                desc: "We live and work in Abbottabad. We know the fair prices, the best sectors for families, and the areas with the most potential. That knowledge is yours.",
              },
            ].map((value, i) => (
              <div key={i} className="bg-stone-50 rounded-xl p-6 border border-stone-100">
                <h3 className="font-semibold text-stone-800 text-lg mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-stone-400 mb-8">
            Looking for property in Abbottabad? Let&apos;s have a conversation.
          </p>
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-all duration-200 shadow-lg"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
