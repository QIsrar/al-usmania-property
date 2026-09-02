"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { properties, getSectors } from "@/data/properties";
import {
  PROPERTY_TYPE_LABELS,
  PRICE_RANGES,
  RENT_PRICE_RANGES,
} from "@/lib/constants";
import type { PropertyPurpose, PropertyType } from "@/types";

function PropertiesFilter() {
  const searchParams = useSearchParams();
  const sectors = getSectors();

  const [purpose, setPurpose] = useState<string>(
    searchParams.get("purpose") || "all"
  );
  const [type, setType] = useState<string>(
    searchParams.get("type") || "all"
  );
  const [sector, setSector] = useState<string>(
    searchParams.get("sector") || ""
  );
  const [priceRange, setPriceRange] = useState<string>(
    searchParams.get("price") || "0"
  );
  const [beds, setBeds] = useState<string>(searchParams.get("beds") || "0");
  const [sortBy, setSortBy] = useState<string>("newest");

  // Sync from URL params on mount
  useEffect(() => {
    setPurpose(searchParams.get("purpose") || "all");
    setType(searchParams.get("type") || "all");
    setSector(searchParams.get("sector") || "");
    setPriceRange(searchParams.get("price") || "0");
    setBeds(searchParams.get("beds") || "0");
  }, [searchParams]);

  const currentPriceRanges = purpose === "rent" ? RENT_PRICE_RANGES : PRICE_RANGES;
  const priceIdx = parseInt(priceRange) || 0;
  const selectedPriceRange = currentPriceRanges[priceIdx] || currentPriceRanges[0];

  const filteredProperties = useMemo(() => {
    let filtered = [...properties];

    // Purpose filter
    if (purpose !== "all") {
      filtered = filtered.filter((p) => p.purpose === purpose);
    }

    // Type filter
    if (type !== "all") {
      filtered = filtered.filter((p) => p.type === type);
    }

    // Sector filter
    if (sector) {
      filtered = filtered.filter((p) => p.sector === sector);
    }

    // Price filter
    if (priceIdx > 0 && selectedPriceRange) {
      filtered = filtered.filter(
        (p) =>
          p.price >= selectedPriceRange.min &&
          p.price <= selectedPriceRange.max
      );
    }

    // Beds filter
    const bedsNum = parseInt(beds) || 0;
    if (bedsNum > 0) {
      filtered = filtered.filter((p) => p.beds >= bedsNum);
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
      default:
        filtered.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }

    return filtered;
  }, [purpose, type, sector, priceIdx, selectedPriceRange, beds, sortBy]);

  const clearFilters = () => {
    setPurpose("all");
    setType("all");
    setSector("");
    setPriceRange("0");
    setBeds("0");
    setSortBy("newest");
  };

  const activeFilterCount = [
    purpose !== "all",
    type !== "all",
    sector !== "",
    priceIdx > 0,
    parseInt(beds) > 0,
  ].filter(Boolean).length;

  return (
    <div className="pt-20 lg:pt-24">
      {/* Page Header */}
      <div className="bg-stone-900 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-2">
            Properties in Abbottabad
          </h1>
          <p className="text-stone-400">
            {filteredProperties.length} {filteredProperties.length === 1 ? "property" : "properties"} found
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-4 mb-8">
          {/* Purpose Toggle */}
          <div className="flex gap-2 mb-4">
            {[
              { value: "all", label: "All" },
              { value: "sale", label: "Buy" },
              { value: "rent", label: "Rent" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  setPurpose(option.value);
                  setPriceRange("0");
                }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  purpose === option.value
                    ? "bg-brand-500 text-white shadow-sm"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {/* Type */}
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
            >
              <option value="all">All Types</option>
              {Object.entries(PROPERTY_TYPE_LABELS).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>

            {/* Sector */}
            <select
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
            >
              <option value="">All Areas</option>
              {sectors.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            {/* Price */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
            >
              {currentPriceRanges.map((range, i) => (
                <option key={i} value={i.toString()}>{range.label}</option>
              ))}
            </select>

            {/* Beds */}
            <select
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              className="px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
            >
              <option value="0">Any Beds</option>
              <option value="1">1+ Bed</option>
              <option value="2">2+ Beds</option>
              <option value="3">3+ Beds</option>
              <option value="4">4+ Beds</option>
              <option value="5">5+ Beds</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
            >
              <option value="newest">Newest First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>

            {/* Clear */}
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="px-3 py-2.5 text-sm text-brand-600 hover:text-brand-700 font-medium"
              >
                Clear ({activeFilterCount})
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 bg-stone-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-stone-700 mb-2">
              No properties found
            </h3>
            <p className="text-sm text-stone-500 mb-6 max-w-md mx-auto">
              Try adjusting your filters or browse all properties. You can also
              reach out to us on WhatsApp — we may have unlisted options.
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-2.5 bg-brand-500 text-white font-medium rounded-lg hover:bg-brand-600 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function PropertiesContent() {
  return (
    <Suspense fallback={
      <div className="pt-20 lg:pt-24">
        <div className="bg-stone-900 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-10 w-64 bg-stone-700 rounded animate-pulse" />
          </div>
        </div>
      </div>
    }>
      <PropertiesFilter />
    </Suspense>
  );
}
