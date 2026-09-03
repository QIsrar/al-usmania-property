"use client";

import { useState } from "react";
import { BUSINESS, WHATSAPP_MESSAGES, PROPERTY_TYPE_LABELS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function SellPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyType: "house",
    purpose: "sale",
    area: "",
    areaSize: "",
    areaUnit: "marla",
    priceExpectation: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const purposeOptions = {
      buy: "looking to buy a",
      sale: "looking to sell my",
      rent: "looking to rent a",
      rent_out: "looking to rent out my",
    };
    const purposeText = purposeOptions[formData.purpose as keyof typeof purposeOptions];

    const message = `Hi, I'm ${purposeText} property with AL-Usmania Property.

Property Details:
- Type: ${PROPERTY_TYPE_LABELS[formData.propertyType as keyof typeof PROPERTY_TYPE_LABELS]}
- Area: ${formData.area}
- Size: ${formData.areaSize} ${formData.areaUnit}
- Price Expectation: ${formData.priceExpectation}

Name: ${formData.name}
Phone: ${formData.phone}

Additional Notes: ${formData.description || "None"}`;

    window.open(whatsappLink(message), "_blank");
  };

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="bg-stone-900 py-16 lg:py-24">
        <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" delay={0.1}>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">
            List or Find Property
          </h1>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">
            Want to buy, sell, or rent property in Abbottabad? Tell us what you need
            and we&apos;ll help you find the right match — with no hidden commission.
          </p>
        </AnimatedSection>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Points */}
          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12" delay={0.2}>
            {[
              {
                title: "No Hidden Fees",
                desc: "Our commission is discussed upfront — no surprises at closing.",
              },
              {
                title: "Local Market Knowledge",
                desc: "We price your property right based on real Abbottabad market rates.",
              },
              {
                title: "Fast Results",
                desc: "We actively market your property to our network of buyers and tenants.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-4">
                <div className="w-10 h-10 mx-auto mb-3 bg-brand-50 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-stone-800 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-stone-500">{item.desc}</p>
              </div>
            ))}
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.3}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 lg:p-8 space-y-6"
            >
            <h2 className="font-serif text-xl font-bold text-stone-800 mb-2">
              Property Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  pattern="^[a-zA-Z\s]+$"
                  title="Name should not contain numbers or special characters"
                  maxLength={50}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                  placeholder="Your full name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  pattern="^\d{11}$"
                  title="Phone number must be exactly 11 digits"
                  maxLength={11}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                  placeholder="03XXXXXXXXX"
                />
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Property Type *
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) =>
                    setFormData({ ...formData, propertyType: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                >
                  {Object.entries(PROPERTY_TYPE_LABELS).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Purpose */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  I Want To *
                </label>
                <select
                  value={formData.purpose}
                  onChange={(e) =>
                    setFormData({ ...formData, purpose: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                >
                  <option value="buy">Buy a property</option>
                  <option value="sale">Sell my property</option>
                  <option value="rent">Find a property to rent</option>
                  <option value="rent_out">Rent out my property</option>
                </select>
              </div>

              {/* Area/Location */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Area / Location *
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                  placeholder="e.g., Supply, Jinnahabad"
                />
              </div>

              {/* Size */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Property Size
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formData.areaSize}
                    onChange={(e) =>
                      setFormData({ ...formData, areaSize: e.target.value })
                    }
                    className="flex-1 px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    placeholder="e.g., 5"
                  />
                  <select
                    value={formData.areaUnit}
                    onChange={(e) =>
                      setFormData({ ...formData, areaUnit: e.target.value })
                    }
                    className="px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                  >
                    <option value="marla">Marla</option>
                    <option value="kanal">Kanal</option>
                    <option value="sqft">Sq Ft</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Price Expectation */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">
                Price Expectation (PKR)
              </label>
              <input
                type="text"
                value={formData.priceExpectation}
                onChange={(e) =>
                  setFormData({ ...formData, priceExpectation: e.target.value })
                }
                className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                placeholder="e.g., 50 Lakh or 30,000/month"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">
                Additional Details
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 resize-none"
                placeholder="Tell us anything else about your property — bedrooms, condition, special features, etc."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 transition-colors duration-200 shadow-sm cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Submit via WhatsApp
            </button>

            <p className="text-xs text-stone-400 text-center">
              This form sends your property details directly to our WhatsApp.
              We&apos;ll review and get back to you within 24 hours.
            </p>
          </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
