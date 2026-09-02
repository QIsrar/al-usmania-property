import type { Metadata } from "next";
import Link from "next/link";
import { areas } from "@/data/areas";
import { properties } from "@/data/properties";
import { SEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Areas We Serve in Abbottabad",
  description:
    "Explore properties across Abbottabad's top sectors — Supply, Jinnahabad, Mandian, PMA Link Road, Sarban Hills, and more. AL-Usmania Property serves all major areas.",
  openGraph: {
    title: "Areas We Serve in Abbottabad | AL-Usmania Property",
    description:
      "Browse properties by area across Abbottabad's top residential and commercial sectors.",
    url: `${SEO.url}/areas`,
  },
};

export default function AreasPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="bg-stone-900 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">
            Areas We Serve
          </h1>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">
            We cover all major residential and commercial areas across Abbottabad.
            Each area has its own character — here&apos;s a quick guide.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {areas.map((area) => {
              const areaProperties = properties.filter(
                (p) => p.sector === area.name
              );

              return (
                <div
                  key={area.slug}
                  className="bg-white rounded-xl border border-stone-200 p-6 lg:p-8 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="font-serif text-xl lg:text-2xl font-bold text-stone-800 mb-3">
                        {area.name}
                      </h2>
                      <p className="text-stone-600 leading-relaxed mb-4">
                        {area.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-stone-500">
                          {areaProperties.length}{" "}
                          {areaProperties.length === 1
                            ? "property"
                            : "properties"}{" "}
                          listed
                        </span>
                        <Link
                          href={`/properties?sector=${encodeURIComponent(area.name)}`}
                          className="inline-flex items-center gap-1.5 text-brand-600 font-medium hover:text-brand-700 transition-colors"
                        >
                          View Properties
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
